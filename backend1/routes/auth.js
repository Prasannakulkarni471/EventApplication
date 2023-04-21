const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User') //to use Userschema we need to  import it
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var fetchuser = require('../middleware/fetchuser')
// here we will use router.get and it will be pointing to api after '/api/auth'

const JWT_SECRET = "UpamanyuisKing";//signature we are sending with token which we are providing to user

//CREATE a user using POST "/api/auth/createuser". Doesn't require login
router.post('/createuser',[
    //validation checks
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter correct email').isEmail( ),
    body('password','Enter min 5 values').isLength({min:8})
],async (req,res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();

    let success = false; 
    const errors = validationResult(req);//if any error in validation don't move ahead
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors : errors.array()})
    }

    //humne sb try catch me daal diya taaki kuch bhi error aaye to user ko bta ske kuch error aa rha h
    try{
    //before creating user check if user with this email exists in the database
    let user = await User.findOne({email:req.body.email}); //humne isse await nhi kiya tha isliye barbar hume dikha rha tha jo humne niche if me likh h

    if(user){
        return res.status(404).json({success,error : "Email with this mail already exists"})
    }
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({  //creating a new user
        name:req.body.name,
        email:req.body.email,
        password:secPass //password ko direct nhi bheja h usme pehle salt add kiya h aur phir vo variable yaha bheja h
    })

    const data = {
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET); //USER KI ID ME JWT SECRET MILA DIYA
    // res.json(user);
    success = true;
    res.json({success,authtoken: authtoken})

    // .then(user=>res.json(user)).catch(           //NOW WE ARE USING ASYNC AWAIT TO MAKE USER SO WE DONT NEED IT
    //     err => {console.log(err)
    //     res.json({error : 'please Enter Valid credentials', msg : err.message})
    // });
    // res.send(req.body);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})


//AUTHENTICATE A USER using : POST "/api/auth/login"   --no login required
router.post('/login',[
    //validation checks
    body('email','Enter correct email').isEmail( ),
    body('password','Enter Password').exists()
],async (req,res) => {

    let success= false;
    const errors = validationResult(req);//if any error in validation don't move ahead
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors : errors.array()})
    }

    const {email,password} = req.body;

    try {
        //dekhte ki ye email apne database me h bhi ya nhi 
        let user = await User.findOne({email:email});
        if(!user){
            return res.status(400).json({success,error:"Enter correct credentials"})
        }
        
        //ab hum password compare krenge bcrypt ki madad s
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){//agar password match nhi hua
            return res.status(400).json({success,error:"Enter correct credentials"})
        }

        //agar password sahi h to data bhj denge (user id bhej rhe h yha)
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET); //USER KI ID ME JWT SECRET MILA DIYA
        // res.json(user);
        success = true;
        res.json({success,authtoken: authtoken})


    } catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})


//LOGGED IN USER KI SAARI DETAILS NIKALNE K LIYE BNAYENGE AB
//Fetch USER details using : POST "/api/auth/getuser"   --login required
router.post('/getuser',fetchuser,async (req,res) => {
try {
    //Q.AUTHTOKEN SE USER ID KESE NIKALENEGE
    //jo jo request user authentication mangti h unko ek header bhejunga authtoken naam k us header me jo bhi data hoga vo fetch kr lenge iske liye hum uske liye ek middleware bna lete h kyuki vo kaafi jgh use krenge hum
    userId = req.user.id 
    
    //user ki details nikalenge userid se siwayuske password k
    
    const user = await User.findById(userId).select('-password')
    res.send(user);

}catch(error){
    console.log(error.message);
    res.status(500).send("Some error occured")
}})
module.exports = router ;
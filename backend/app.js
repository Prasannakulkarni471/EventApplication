require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.set('strictQuery', false)

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const channelModel = require('./models/channel')
const studentModel = require('./models/student')
const StudentModel = require('./models/student')

const app = express()
const port = process.env.PORT || 5000 // Change the port number to 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("uploads"))

const start = async() => {
  try {
    await mongoose.connect("mongodb+srv://ishansiddiqui123:12345@symbooth.ncgzyvk.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    })
    .then(() => {console.log('Connected to the Database!')})
    .catch((e) => {console.log("Error: ",e)})
    
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

// app.get("/insert", async (req, res) => {
//     try {
//       var model = new StudentModel;
//       model.name = 'ishan-siddiqui'
//       model.email = 'ishansiddiqui123@gmail.com'
//       model.password = 'nopassword'
//       res.status(200).send({ msg: "Inserted to DB" });
//     } catch (error) {
//       console.log(error);
//     }
//   });


app.post("/insert", async (req, res) => {
    try {
      const model = await studentModel.create(req.body);
      res.status(200).send({ msg: "Inserted to DB" });
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/read", async (req, res) => {
    try {
      const data = await studentModel.find().exec();
      return res.status(200).send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  });

//   app.get("/update", async (req, res) => {
//     try {
//       studentModel.findByIdAndUpdate(req.query.id,{name:req.query.name},(err,data)=>{

//       })
//       return res.status(200).send(data);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send({ error });
//     }
//   });


app.get("/delete", async (req, res) => {
    try {
      const result = await studentModel.deleteOne({ name: 'ishan-siddiqui' });
      return res.status(200).send({ msg: `${result.deletedCount} document(s) deleted` });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  });  
  

app.get("/login", async (req, res) =>{
    try {
              var model = new StudentModel;
              model.name = 'ishan-siddiqui'
              model.email = 'ishansiddiqui123@gmail.com'
              model.password = 'nopassword'
              res.status(200).send({ msg: "Inserted to DB" });
            } catch (error) {
              console.log(error);
            }
})

//Handling user login
app.post("/login", async function(req, res){
    try {
        var model = new StudentModel;
        // check if the user exists
        const user = await StudentModel.findOne({ email: req.body.email });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.send("Login successful");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});
  
//Handling user logout 
// app.get("/logout", function (req, res) {
//     req.logout(function(err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//       });
// });
  
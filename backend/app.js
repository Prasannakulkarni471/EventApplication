require('dotenv').config('.env')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.set('strictQuery', false)

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
    await mongoose.connect(process.env.DB_URI, {
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

app.get("/insert", async (req, res) => {
    try {
      const model = await studentModel.create({
        name: "rehan-siddiqui",
        email: "ishansiddiqui123@gmail.com",
        password: "no1password"
      });
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
      const result = await StudentModel.deleteOne({ name: 'ishan-siddiqui' });
      return res.status(200).send({ msg: `${result.deletedCount} document(s) deleted` });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  });
  
  


  
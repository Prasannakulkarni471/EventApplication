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
const ContactModel = require('./models/contact')
const EventModel = require('./models/events')
const Participants = require('./models/participants')


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
  

// app.get("/login", async (req, res) =>{
//     try {
//               var model = new StudentModel;
//               model.name = 'ishan-siddiqui'
//               model.email = 'ishansiddiqui123@gmail.com'
//               model.password = 'nopassword'
//               res.status(200).send({ msg: "Inserted to DB" });
//             } catch (error) {
//               console.log(error);
//             }
// })

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
  
// app.get('/check-email', async (req, res) => {
//   try {
//     const user = await StudentModel.findOne({ email: req.body.email });
//     if (user) {
//       res.send(true)
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'mongo not able to check email' });
//   }
// });

app.post('/check-email', async (req, res) => {
  try {
    const user = await StudentModel.findOne({ email: req.body.email });
    if (user) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      res.status(200).json({ message: 'Email does not exist' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'MongoDB not able to check email' });
  }
});

app.post("/contact-us", async function (req, res) {
  try {
    const model = await ContactModel.create(req.body);
    res.status(200).send({ msg: "Inserted to DB" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "mongo not able to insert contact" });
  }
});

app.post('/create-event', async (req, res) => {
  try {
    const event = await EventModel.create(req.body);
    res.status(201).json({ id: event._id, ...req.body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create event' });
  }
});

app.post('/register-event', async (req, res) => {
  try {
    const { firstName, lastName, email, comments } = req.body;
    const newParticipant = new Participants ({
      firstName,
      lastName,
      email,
      comments
    })
    await newParticipant.save();
    res.status(201).send('Form submitted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while submitting the form');
  }
  });

// app.post('/register-event', async (req, res) => {
//   try {
//     const { eventId, firstName, lastName, email, comments } = req.body;
//     const event = await EventModel.findById({eventId});
//     if (!event) {
//       return res.status(404).send('Event not found');
//     }
//     const newParticipant = new Participants({
//       firstName,
//       lastName,
//       email,
//       comments,
//       event: event._id
//     });
//     await newParticipant.save();
//     res.status(201).send('Form submitted successfully');
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('An error occurred while submitting the form');
//   }
// });




//Handling user logout 
// app.get("/logout", function (req, res) {
//     req.logout(function(err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//       });
// });
  
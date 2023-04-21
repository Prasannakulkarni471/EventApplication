// File which contains code for connecting to database
require('dotenv').config()
const mongoose = require('mongoose');

const mongoURI= process.env['DB_URI']
mongoose.set('strictQuery', true);
const connectToMongo = async() =>{
    await mongoose.connect(mongoURI,()=>{
     console.log("Connected to Database Successfully");
    })
}

module.exports = connectToMongo; //now this function will be exported which has the code of connecting to database which in our case is mongodb
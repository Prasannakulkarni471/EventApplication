require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.set('strictQuery',false)

function start(params) {
    mongoose.connect(process.env['DB_UI'], {
        useNewUrlParser: true,
    }).then(() => console.log("connected to DataBase"))
    
}

start()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect("mongodb+srv://ishansiddiqui123:12345@symbooth.ncgzyvk.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});
function checkDb(error) {
    if (error) 
    console.log("Error connecting to DB")
    else
    console.log("Successfully Connected to DB")
}


app.listen(9992);

function check(error) {
    if (error) 
    console.log("Error! 9992")
    else
    console.log("Started! 9992")
}


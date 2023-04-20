const mongoose = require("mongoose")

const studentModel = mongoose.Schema({
        name:{
            type:String,
            required: true,
            trim: true
        },
        email:{
            type:String,
            required: true,
            trim: true
        },
        password:{
            type:String,
            required: true,
            trim: false
        }
})

const StudentModel = mongoose.model('Student',studentModel)

module.exports = StudentModel
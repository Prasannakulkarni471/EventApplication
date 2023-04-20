const mongoose = require("mongoose")

const channelModel = mongoose.Schema({
        name:{
            type:String,
            required: true,
            trim: true
        },
        type:{
            type:String,
            required: true,
            trim: true
        }
})

const ChannelModel = mongoose.model('Channel',channelModel)

module.exports = ChannelModel
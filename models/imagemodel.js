const mongoose=require("mongoose")
const { buffer } = require("stream/consumers")


var ImageSchema=new mongoose.Schema({
    img:{
        data:Buffer,
        contentType:String,
    }
})

const imagemodel=new mongoose.model("imagemodel",ImageSchema)

module.exports=imagemodel
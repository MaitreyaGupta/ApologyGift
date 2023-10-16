const mongoose=require("mongoose")
const { required } = require("nodemon/lib/config")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true, 
        unique:true,
    },
    password:{
        type:Number,
        required:true,
        unique:true,
    },
    image:{
        name:String,
        desc:String,
        img:
        {
            data:Buffer,
            contentType:String,
        }
    }
})

const UserModel=new mongoose.model("UserModel",userSchema)

module.exports=UserModel

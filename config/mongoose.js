const mongoose=require("mongoose")
const UserModel=require("../models/model1") 
const imagemodel=require("../models/imagemodel")
const fs=require("fs")
const imagepath="\images"

mongoose.connect("mongodb+srv://maitreyaguptaa:killerman@devs.syeiknh.mongodb.net/ab",{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection


db.once("open",function(req,res){
    console.log("The connection to mongoose is established")
})

db.on("open",async function(req,res){
       var  a= new imagemodel();
        fs.readdirSync(imagepath,(files)=>{
        a.data=fs.readFileSync(files)
        a.contentType='img/jpeg';
       });
       await a.save();
  })

module.exports=db

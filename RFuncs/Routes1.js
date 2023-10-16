const mongoose=require("mongoose")
const UserModel=require("../models/model1")
function  getAllData(){
     const data1= UserModel.find({})
     res.status(200).json({data1}) 
}


module.exports=getAllData




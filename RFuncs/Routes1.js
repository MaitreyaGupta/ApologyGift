 const mongoose=require("mongoose")
const UserModel=require("../models/model1")
const express=require("express")
async function  getAllData(req,res){
     const data1= await UserModel.find({})
     res.status(200).json({app_id:"6513db506cabe444a2955a7f",
     data1})
}


module.exports=getAllData







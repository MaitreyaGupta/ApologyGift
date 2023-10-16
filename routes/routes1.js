const express=require("express")
app=express() 
const getAllProducts=require("../RFuncs/Routes1")

app.route("/").get(getAllProducts)


module.exports=app

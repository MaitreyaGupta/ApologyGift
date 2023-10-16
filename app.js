const express=require("express")
app=express()
const body_parser=require("body-parser")
app.use(body_parser.urlencoded({extended:true}))
const routes=require(".\/RFuncs/Routes1")
const db=require("./config/mongoose")
const mongoose=require("mongoose")
const UserModel = require("./models/model1")
app.set("view engine","ejs")
app.use(express.json())
app.use("/localhost/api",routes)
app.use(express.static("public"))
app.use(express.static("images"))
app.listen(5000,function(req,res){
    console.log("This is just the beginning")
})

app.get("/",function(req,res){
    res.render("home")
})
 
app.post("/",async function(req,res){
 const data={
    name:req.body.name,
    password:req.body.password,
    image:req.body.image
 }
    UserModel.insertMany([data])
    res.redirect("home")
})
app.get("/home",async function(req,res){
    const Starter=await UserModel.find({})
    if(Starter!=null)
    {
    res.render("home",{Starter})
    }
    else{
        res.render("home")
    }
})
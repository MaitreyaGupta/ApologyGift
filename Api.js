const routes=require("./routes/routes1")
const express=require("express")
app=express() 
const model=require("./models/model1")
const product=require("./product.json")
const MONGODB_URL="mongodb+srv://maitreyaguptaa:killerman@devs.syeiknh.mongodb.net/API"
model.create(product)

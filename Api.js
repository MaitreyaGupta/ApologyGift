const routes=require("./routes/routes1")
const express=require("express")
app=express() 
const model=require("./models/model1")

app.listen(3000,async function(req,res){
    await model.create("product").json()
})
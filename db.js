const mongoose = require("mongoose")
var mongoURL="mongodb+srv://khalidhareef2022:khalid123@cluster0.arslhza.mongodb.net/Fooder"
mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})
var db=mongoose.connection
db.on('connected', ()=>{
    console.log(" Mongo DB connection successfull");
})
db.on('error',()=>{
console.log("mongo db connection failed");
})

module.exports=mongoose
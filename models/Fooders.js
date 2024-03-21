const mongoose= require("mongoose")

const FoodersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const FoodersModel = mongoose.model("Fooders", FoodersSchema)

module.exports=FoodersModel
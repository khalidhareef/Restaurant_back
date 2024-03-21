const express = require("express")
const db=require("./db")
const cors = require('cors')
const FoodersModel = require('./models/Fooders')
const Food= require('./models/foodModel')
const app = express()
app.use(express.json())
app.use(cors())

const foodsRoute= require('./routes/foodsRoute')

app.use('/api/foods/', foodsRoute)

app.post('/login', (req, res) => {
    const { email, password } = req.body
        FoodersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                   
                } else {
                    res.json("the password incorrect")
           
                }
            } else {
                res.json("no user")
              
            }
        })
})
app.post('/register', (req,res)=>{
    FoodersModel.create(req.body)
    .then(Fooders=>res.json(Fooders))
    .catch(err=>res.json(err))
})

app.get("/",(req,res)=>{
    res.send("Server is running"+port);
})


const port = process.env.PORT || 8000;
app.listen(port,()=> "Server running on port")
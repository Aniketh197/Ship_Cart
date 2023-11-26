const { response } = require("express");
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Aniketh:gandigoo@cluster0.iqdylpa.mongodb.net/Ship?retryWrites=true&w=majority")

.then((response)=>{
    console.log("Connected to DataBase")
})
.catch((error)=>{
    console.log(error)
})
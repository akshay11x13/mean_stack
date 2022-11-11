const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/csec",(err)=>{
    if(!err)
        console.log("Db connected");
    else
        console.log("Db error");
});
const ns=new mongoose.Schema({
    name: String,
    age: Number,
    phno: Number
});
const nm =new mongoose.model("records",ns);
nm.insertMany([
    {
        name: "Tarun",
        age: 20,
        phno: 2345678901
    },
    {
        name: "satwik",
        age: 19,
        phno: 3456789012
    },
    {
        name: "Ghanta",
        age: 20,
        phno: 4567890123
    }
]).then(function(){
    console.log("Data inserted");
}).catch(function(error){
    console.log(error);
});
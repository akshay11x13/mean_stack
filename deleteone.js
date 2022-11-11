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
const nm =mongoose.model("records",ns);
nm.deleteOne({ name: "AK"},function(err,obj){
    if(!err)
        console.log(obj);
    else
        console.log(err);
});
var express= require('express');
var app=express();
app.get('/',function(req,res){
    res.sendFile('D:/20761A05I8/index.html');
});
app.get('/about',function(req,res){
    res.sendFile('D:/20761A05I8/about.html');
});
app.listen(5050,function(){
    console.log("Listening to port:5050...")
});
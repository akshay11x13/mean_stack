var express = require('express');
var app = express();
app.get('/', function (req, res) {
   res.send('<h1 style="text-align: center;">Welcome to LBRCE.</h1>')
});
app.get('/cse/',function(req,res){
    res.send('<h1 style="text-align: center;">Welcome to CSE.</h1>');
});
app.get('/it/',function(req,res){
    res.send('<h1 style="text-align: center;">Welcome to IT.</h1>');
});
app.get('/ece/',function(req,res){
    res.send('<h1 style="text-align: center;">Welcome to ECE.</h1>');
});
app.get('/eee/',function(req,res){
    res.send('<h1 style="text-align: center;">Welcome to EEE.</h1>');
});
app.get('/mech/',function(req,res){
    res.send('<h1 style="text-align: center;">Welcome to MECHANICAL.</h1>');
});
var server = app.listen(3030,function(){
    console.log("listening to port 3030...")
});


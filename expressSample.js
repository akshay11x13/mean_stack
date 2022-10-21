var express = require('express');
var app = express();
app.get('/', function (req, res) {
   res.send('This is an Example for Express.js ')
});
app.get('/sample/',function(req,res){
    res.send("This is a Sample Example for Express.js ");
});
var server = app.listen(8000,function(){
    console.log("listening to port 8000...")
});


var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send('<h1 style="text-align: center;">This is a sample expressnor.js progarm</h1>')
});
var server = app.listen(4040,function(){
    console.log("listening to port 4040...")
});
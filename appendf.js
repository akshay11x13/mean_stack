var fs= require('fs')
var prompt = require('prompt-sync')();

const data=prompt("Enter data to append in text file: ");
fs.appendFile("samplea.txt",data,(err)=>{
    if(err)
        throw err;
})
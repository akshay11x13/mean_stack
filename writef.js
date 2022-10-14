var fs= require('fs')
var prompt = require('prompt-sync')();

const data=prompt("Enter data to add in text file: ");
fs.writeFile("samplew.txt",data,(err)=>{
    if(err)
        throw err;
})
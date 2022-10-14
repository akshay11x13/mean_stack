var fs= require('fs');
var prompt= require("prompt-sync")();

const oldf = prompt("Enter Old FileName: ");
const newf = prompt("Enter New FileName: ");
fs.rename(oldf,newf,(err)=>{
    if(err)
        throw err;
});
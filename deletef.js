var fs= require('fs');
var prompt= require("prompt-sync")();

const fname = prompt("Enter FileName to delete: ");
fs.unlink(fname,(err)=>{
    if(err)
        throw err;
});
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	fs.readFile('demo.html',"utf-8",function(err,data){
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            res.end();
    });
	}).listen(3030);
console.log("Server 3030 started")
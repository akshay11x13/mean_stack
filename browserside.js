var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<body bgcolor='skyblue'>");
	res.write("<h1>hi hello</h1>");
    res.write("</body>");
	res.end();
	}).listen(2020);
console.log("Server 2020 started")
var http = require('http');
var url  = require('url');
function startServer(route){
	http.createServer(function(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log('request recieved for'+pathname);
		route(pathname);
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write("Hello World");
		res.end();
	}).listen(8000);
	console.log('Server started om localhost:8000');
}

exports.startServer = startServer;
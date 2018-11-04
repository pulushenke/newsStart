var http = require('http');
var url = require('url');
//var rou = require('../models/router');
var optfile = require('../models/optfile');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html;charset=utf-8'
	});
	if(req.url !== '/favicon.ico') {
		function callback(data){
			res.write(data);
			 res.end('ok');
		}
		
     var pathname = url.parse(req.url).pathname;
     pathname = pathname.replace(/\//,'');
    // optfile.readfile('../views/login.html',callback)
     optfile.writefile('../views/1.txt','node创建的第一个文件',callback)
     //rou[pathname](req,res);
     console.log(pathname);
    
	}
}).listen(8888);
console.log('http://127.0.0.1:88888/');
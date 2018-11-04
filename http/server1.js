var http = require('http');
var url = require('url');
var router = require('../models/router');
//var optfile = require('../models/optfile');

http.createServer(function(req, res) {

	if(req.url !== '/favicon.ico') {
	
     var pathname = url.parse(req.url).pathname;
     pathname = pathname.replace(/\//,'');
    
     router[pathname](req,res);
    // console.log(pathname);
    
	}
}).listen(8888);
console.log('http://127.0.0.1:88888/');
var express = require('express');

var app = express();

app.use (function(req,res,next){
	console.log('Time: ', Date.now());
	console.log('Request type: ', req.method);
	next();
});

app.get('/', function (req,res) {
	res.send('Hello World!');
});

app.listen(3000,function() { 
	console.log('Listening on port 3000');
});
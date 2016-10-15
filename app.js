var express = require('express');

var app = express();

app.set('port', (process.env.port || 5000));

app.get('/', function (req,res) {
	res.send('Hello World!');
});

app.listen(app.get('port'),function() { 
	console.log('Listening on port 3000');
});
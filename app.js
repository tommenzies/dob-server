var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var list = [ "this","that","the other" ];

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function (req,res) {
	res.render('pages/index', { 
		title: "Lol.",
		data: list
	});
});

app.post('/newdata', function (req,res) {
	console.log(req.body);
	list.push(req.body.todo);
	res.redirect('/');
});

app.listen(app.get('port'),function() { 
	console.log("Runing on", app.get('port'));
});
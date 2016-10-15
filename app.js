var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todo = require('./controllers/todo');

// Allow runtime environment to configure the port or default to 5000
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.use(function (req,res,next){
	console.log(req.method, req.url);
	next();
});

// Obfuscate separation of bootstrap from app assets
app.use('/public', express.static('node_modules/bootstrap/dist'));

// Serve static app assets
app.use('/public', express.static('public'))

// Parse requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// mount todo mini-app and pass route for self referential redirects
app.use('/todo', todo('/todo'));

app.get('/', function (req,res) {
	res.render('pages/index', { 
		title: "tommenzi.es",
	});
});

app.listen(app.get('port'),function() { 
	console.log("Runing on", app.get('port'));
});
var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');



app.get('/', function (req,res) {
	res.render('pages/index', { title: "Lol."} );
});

app.listen(app.get('port'),function() { 
	console.log("Runing on ", app.get('port'));
});
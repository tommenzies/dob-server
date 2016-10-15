module.exports = function(route) {
	var express = require('express');
	var module = express.Router();
	var list = [ "this","that","the other" ];

	module.get('/', function (req,res) {
		res.render('pages/todo', { 
			title: "To Do",
			data: list
		});
	});

	module.post('/newdata', function (req,res) {
		console.log(req.body);
		list.push(req.body.todo);
		res.redirect(route);
	});

	return module;

}
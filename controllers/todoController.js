const express = require('express');
const mongoose = require('mongoose');
const todo = mongoose.model('Todo');
var router = express.Router();

router.get('/',(req,res)=>{
	res.render('todo/addoredit.hbs',{
		viewTitle : "Insert Todo"
	});
})

router.get('/list',(req,res)=>{
	var x = todo.find({title: "homework"});
	console.log(x.title);
	console.log(x.description);
	console.log(typeof(x));
})

router.post('/add',(req,res)=>{
	var todovar = new todo();
	todovar.title = req.body.tasktitle;
	todovar.description = req.body.taskdescription;
	todovar.save((err,doc)=>{
		if(!err)
		{
			res.redirect('/todo/list');
		}
		else{
			console.log(err);
		}
	});
})
module.exports = router;
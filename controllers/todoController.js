const express = require('express');
const mongoose = require('mongoose');
const todo = mongoose.model('Todo');
var router = express.Router();

router.get('/',(req,res)=>{
	if(!err)
	{
		res.render('todo/addoredit.hbs',{
		viewTitle : "Insert Todo"
		});
	}
	else{
		console.log(err);
	}
	
})

router.get('/list',(req,res)=>{
	todo.find((err,docs)=>{
		if(!err)
		{
			res.render('todo/list.hbs',{
				list: docs,
				viewTitle: "Todo List"
			})
		}
		else{
			console.log(err);
		}
	})
	
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
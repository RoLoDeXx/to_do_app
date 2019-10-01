const express = require('express');
const mongoose = require('mongoose');
const todo = mongoose.model('todo');
var router = express.Router();
router.get('/',(req,res)=>{
	res.render('todo/addoredit.hbs',{
		viewTitle : "Insert Todo"
	});
})
router.post('/add',(req,res)=>{
	res.send(req.body);
})
module.exports = router;
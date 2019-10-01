const express = require('express');
var router = express.Router();
router.get('/',(req,res)=>{
	res.render('todo/addoredit.hbs',{
		viewTitle : "Insert Todo"
	});
})
module.exports = router;
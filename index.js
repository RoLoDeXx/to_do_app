const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_todo_app',{useNewUrlParser: true},(error)=>{
    if(!error)
    {
        console.log("MongoDB database connected successfully");
    }
    else{
        console.log("MongoDB connection unsuccessfull");
    }
});

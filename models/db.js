const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todos_db',{useNewUrlParser: true, useUnifiedTopology: true},(error)=>{
    if(!error)
    {
        console.log("MongoDB database connected successfully");
    }
    else{
        console.log("MongoDB connection unsuccessfull");
    }
});
require("./todo.model");
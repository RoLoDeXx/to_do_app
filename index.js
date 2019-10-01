require("./models/db");
const todoController = require("./controllers/todoController");
const express = require("express");
const path =require("path");
const app = express();
app.listen("3000",()=>{
    console.log("Server started on port 3000");
})
app.set("views",path.join(__dirname,'/views/'));
app.engine('hbs',exhbs({extname : 'hbs', defaultLayout : 'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('viewengine','hbs');
app.use("/todo",todoController);
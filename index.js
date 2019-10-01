require("./models/db");
const todoController = require("./controllers/todoController");
const express = require("express");
const path =require("path");
const exphbs = require("express-handlebars");
const app = express();
app.listen("3000",()=>{
    console.log("Server started on port 3000");
})
app.set('viewengine','hbs');
app.set("views",path.join(__dirname,'/views/'));
app.engine("hbs",exphbs({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts/"
}))


app.use("/todo",todoController);
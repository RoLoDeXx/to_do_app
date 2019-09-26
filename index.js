const connection = require("./model");
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.set('views',path.join(__dirname,"/views/"));

app.engine("hbs",expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}))

app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index.hbs",{});
})

app.listen("3000",()=>{
    console.log("Server started on port 3000");
})
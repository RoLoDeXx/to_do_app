const connection = require("./model");
const express = require("expess");
const path = require("path");
const bodyparser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get("/",(req,res)=>{
    res.send("Root");
})

app.listen("3000",()=>{
    console.log("Server started on port 3000");
})
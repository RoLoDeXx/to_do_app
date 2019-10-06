require("./models/db");
const todoController = require("./controllers/todoController");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const app = express();

app.listen("3000", () => {
  console.log("Server started on port 3000");
});

app.set("viewengine", "hbs");
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/"
  })
);

app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(bodyparser.json());

app.use("/todo", todoController);

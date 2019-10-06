const express = require("express");
const mongoose = require("mongoose");
const todo = mongoose.model("Todo");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("todo/addoredit.hbs", {
    viewTitle: "Insert Todo"
  });
});

router.get("/update/:id", (req, res) => {
  todo.findById(req.params.id, (err, doc) => {
    res.render("todo/addoredit.hbs", {
      viewTitle: "Update Todo",
      todo: doc
    });
  });
});

router.get("/list", (req, res) => {
  todo.find({}, (err, docs) => {
    if (!err) {
      res.render("todo/list.hbs", {
        list: docs,
        viewTitle: "Todo List"
      });
    } else {
      console.log(err);
    }
  });
});

router.post("/add", (req, res) => {
  console.log(req.body._id);
  if (req.body._id == "") {
    console.log("add");
    console.log(req.body._id);
    var todovar = new todo();
    todovar.title = req.body.tasktitle;
    todovar.description = req.body.taskdescription;
    todovar.save((err, doc) => {
      if (!err) {
        res.redirect("/todo/list");
      } else {
        console.log(err);
      }
    });
  } else {
    console.log("update");
    todo.findByIdAndUpdate(
      req.body._id,
      { title: req.body.tasktitle, description: req.body.taskdescription },
      (err, doc) => {
        res.redirect("/todo/list");
      }
    );
  }
});

router.get("/search", (req, res) => {
  res.render("todo/search.hbs", {
    viewTitle: "Search Todo"
  });
});

router.post("/search/query", (req, res) => {
  var query = req.body.query;
  console.log(query);
  todo.find({ title: { $regex: new RegExp(query) } }, (err, docs) => {
    res.render("todo/list.hbs", {
      list: docs,
      viewTitle: "Search Result"
    });
  });
});

router.get("/delete/:id", (req, res) => {
  todo.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/todo/list");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

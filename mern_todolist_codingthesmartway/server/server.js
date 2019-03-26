const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo_schema_model = require("./todoschema");

mongoose
  .connect("mongodb://localhost:27017/todos", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to the mongoDB server");
  });

app.use(cors());
app.use(bodyParser.json());

const port = 5000;

app.get("/todos", (req, res) => {
  //res.send("Hello world");
  Todo_schema_model.find((err, todoitem) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todoitem);
    }
  });
});
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  Todo_schema_model.findById(id, (err, todoItem) => {
    res.json(todoItem);
  });
});

app.post("/add", (req, res) => {
  console.log("We are in the /post-add endpoint");
  let todoitem = new Todo_schema_model(req.body);
  todoitem.save().then(
    todoitem => res.status(200).json({ todoitem })
    //console.log("IN the save method of -app Post ", todoitem);
  );
});

app.post("/update/:id", (req, res) => {
  Todo_schema_model.findById(req.params.id, (error, todoitem) => {
    if (!todoitem) {
      res.status(404);
    } else {
      todoitem.todo_description = req.body.todo_description;
      todoitem.todo_responsible = req.body.todo_responsible;
      (todoitem.todo_priority = req.body.todo_priority),
        (todoitem.todo_completed = req.body.todo_completed);
    }
    todoitem.save().then(() => {
      res.json("Todo updated").json({ todoitem });
    });
  });
});

app.put("/delete/:id", (req, res) => {
  console.log("We are in the delete endpoint", req.params.id);
  Todo_schema_model.findByIdAndRemove(req.params.id, (error, todoitem) => {
    if (!todoitem) {
      res.status(404);
    } else {
      res.json("Item has been deleted successfully");
      console.log("This has been deleted");
    }
  });
});

app.listen(port, () => {
  console.log("Listening to port number ", port);
});

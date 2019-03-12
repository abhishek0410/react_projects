//Defining the schema for todo  :

const { Schema } = require("mongoose");
const mongoose = require("mongoose");

//const Schema = mongoose.Schema;

let Todo = new Schema({
  todo_description: {
    type: String
  },
  todo_responsible: {
    type: String
  },
  todo_priority: {
    type: String
  },

  todo_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Todo", Todo);

//module.exports = Todo_schema_model;

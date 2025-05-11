const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb://localhost:27017/");
const todoschema = mongoose.Schema({
  title: String,
  description: String,
  // id: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoschema);

module.exports = {
  todo,
};

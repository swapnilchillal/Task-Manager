const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "field cannot be empty"],
    trim: true,
    maxLength: [20, "length cannot exceed 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);

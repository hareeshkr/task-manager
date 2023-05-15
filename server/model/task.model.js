const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, required: true, maxLength: 50, minLength: 3 },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  description: { type: String, default: "" },
});

module.exports = mongoose.model("Task", TaskSchema);

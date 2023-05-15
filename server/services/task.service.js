const Task = require("../model/task.model");

// get all tasks
const getAllTasks = async () => {
  const tasks = await Task.find({}, [], {
    sort: {
      createdAt: -1,
    },
  });
  return tasks;
};

// get a task with id
const getTaskById = async (id) => {
  const task = await Task.findById(id);
  if (!task) throw new Error("Task Not Found");
  return task;
};

// create a task
const createTask = async (body) => {
  const { title, description } = body;
  const duplicateTask = await Task.findOne({
    title,
    description,
  });
  if (duplicateTask) {
    throw new Error("Task already exists", 400);
  }
  const length = title.length;
  if (length < 3 || length > 50) {
    throw new Error("Title must be between 5 and 50 characters", 400);
  }
  const task = new Task({
    title,
    description,
  });
  const savedTask = await task.save();
  return savedTask;
};

// patch a task
const patchTask = async (id, body) => {
  const { title } = body;
  if (title) {
    const length = title.length;
    if (length < 3 || length > 50) {
      throw new Error("Title must be between 5 and 50 characters");
    }
  }
  const updatedTask = await Task.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) throw new Error("Task Not Found");
  return updatedTask;
};

// delete a task
const deleteTask = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) throw new Error("Task Not Found");
  return deletedTask;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  patchTask,
  deleteTask,
};

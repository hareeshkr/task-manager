const taskService = require("../services/task.service");

// get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a task with id
const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create a task
const createTask = async (req, res) => {
  try {
    const savedTask = await taskService.createTask(req.body);
    res.status(200).json({ savedTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// patch a task
const patchTask = async (req, res) => {
  try {
    const updatedTask = await taskService.patchTask(req.params.id, req.body);
    res.status(200).json({ updatedTask });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// delete a task
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await taskService.deleteTask(req.params.id);
    res.status(200).json({ deletedTask });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  patchTask,
  deleteTask,
};

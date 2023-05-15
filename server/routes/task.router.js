const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

// Get all tasks
router.get("/", taskController.getAllTasks);

// Get a task with id
router.get("/:id", taskController.getTaskById);

// create a task
router.post("/", taskController.createTask);

// patch a task
router.patch("/:id", taskController.patchTask);

// delete a task
router.delete("/:id", taskController.deleteTask);

module.exports = router;

// // Get all tasks
// router.get("/", async (req, res) => {
//   try {
//     const tasks = await Task.find({}, [], {
//       sort: {
//         createdAt: -1,
//       },
//     });
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

// // Get a task with id
// router.get("/:id", async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id);
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(404).json({ message: "Task Not Found" });
//   }
// });

// // create a task
// router.post("/", async (req, res) => {
//   // check duplicate title and description
//   try {
//     const duplicateTask = await Task.findOne({
//       title: req.body.title,
//       description: req.body.description,
//     });
//     if (duplicateTask) {
//       return res.status(400).json({ message: "Task already exists" });
//     }
//     const length = req.body.title.length;
//     if (length < 3 || length > 50) {
//       return res
//         .status(400)
//         .json({ message: "Title must be between 5 and 50 characters" });
//     }
//     const task = new Task({
//       title: req.body.title,
//       description: req.body.description,
//     });

//     const savedTask = await task.save();
//     res.status(200).json({ savedTask });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

// // patch a task
// router.patch("/:id", async (req, res) => {
//   try {
//     if (req.body.title) {
//       const length = req.body.title.length;
//       if (length < 3 || length > 50) {
//         return res
//           .status(400)
//           .json({ message: "Title must be between 5 and 50 characters" });
//       }
//     }
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({ task });
//   } catch (err) {
//     return res.status(404).json({ message: "Task not found" });
//   }
// });

// // delete a task
// router.delete("/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Task deleted" });
//   } catch (error) {
//     return res.status(404).json({ message: "Task not found" });
//   }
// });

// module.exports = router;

const express = require("express");
const Router = express.Router();
const {
  getTask,
  addTask,
  updateTask,
  getAllTask,
  deleteTask,
} = require("../controllers/taskLogic");

Router.get("/:Id", getTask);
Router.get("/day/:Day", getAllTask);
Router.post("/", addTask);
Router.patch("/:Id", updateTask);
Router.delete("/:Id", deleteTask);

module.exports = Router;

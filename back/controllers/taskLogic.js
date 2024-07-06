const taskModel = require("../models/Task");

const getAllTask = async (req, res) => {
  try {
    const day = req.params.Day;
    const allTasks = await taskModel.find({ day:day}, { __v: 0 });
    res.json(allTasks);
  } catch (err) {
    res.send(err.message);
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.Id;
    const oneTask = await taskModel.find({ id: id }, {  __v: 0 });
    res.status(200).json(oneTask);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const addTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(400);
  }
};

const updateTask = async (req, res) => {
  try {
    const { Id } = req.params;
    const { name } = req.body;
    const taskUpdate = await taskModel.findOneAndUpdate(
      { _id: Id },
      { name: name },
      { new: true, runValidators: true }
    );
    res.status(200).json(taskUpdate);
  } catch (err) {
    res.send(err.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { Id } = req.params;
    const taskDelete = await taskModel.findOneAndDelete(
      { _id: Id },
      { new: true }
    );
    res.status(200).json(taskDelete);
  } catch (err) {
    res.status(400)
  }
};

module.exports = {
  getTask,
  addTask,
  updateTask,
  getAllTask,
  deleteTask,
};

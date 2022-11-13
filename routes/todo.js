const express = require('express');
const { createTask, updateTask, deleteTask, findOneTask, findAllTasks } = require('../controller/todoController');
const router = express.Router();

router.route('/').get(findAllTasks);
router.route('/').post(createTask);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);
router.route('/:id').get(findOneTask);

module.exports = { router };
const mongoose = require('mongoose');
const asycnHandler = require('express-async-handler');
const { Todo } = require('../models/model');

exports.createTask = asycnHandler( async(req, res) => {
    const {task, active} = req.body;
    const todo = await Todo.create({task, active});
    res.status(201).json({
        success: true,
        data: todo,
        message: 'Task was created successfully'
    })
});

exports.updateTask = asycnHandler( async(req, res) => {
    const {task, active} = req.body;
    const existingTask = await Todo.findOne({ _id: req.params.id });
    if (existingTask){
        existingTask.task = task;
        existingTask.active = active;
        const updatedTask = await existingTask.save();
        res.status(200).json({
            success: true,
            data: updatedTask,
            message: 'Task was updated successfully'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task was not found'
        })
    }
});

exports.deleteTask = asycnHandler( async(req, res) => {
    const existingTask = await Todo.findOne({ _id: req.params.id });
    if (existingTask){
        existingTask.remove();
        res.status(200).json({
            success: true,
            message: 'Task was deleted successfully'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task was not found'
        })
    }
});

exports.findOneTask = asycnHandler( async(req, res) => {
    const existingTask = await Todo.findOne({ _id: req.params.id });
    if (existingTask){
        res.status(200).json({
            success: true,
            data: existingTask,
            message: 'Task was found successfully'
        })
    } else {
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task was not found'
        })
    }
});

exports.findAllTasks = asycnHandler( async(req, res) => {
    const allTasks = await Todo.find()
    res.status(200).json({
        success: true,
        data: allTasks,
        message: 'All tasks were found'
    })
});

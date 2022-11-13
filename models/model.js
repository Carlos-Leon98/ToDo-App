const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

const Todo = mongoose.model('Todo', schema);

module.exports = { Todo }
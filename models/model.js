const mongoose = require('mongoose');

const currentDate = () => {
    let date = new Date();

    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

const schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: currentDate()
    },
    dueDate: {
        type: Date,
        required: true
    }
});

const Todo = mongoose.model('Todo', schema);

module.exports = { Todo }
const mongoose = require('mongoose');

const ToDoListSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    isCompleted: {
        type: Boolean,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ToDoListSchema', ToDoListSchema);
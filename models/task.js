const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    }
});

const Tasks = mongoose.model('Tasks', taskSchema );

module.exports = Tasks;
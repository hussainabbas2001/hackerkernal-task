const mongoose = require('mongoose');
const task = mongoose.Schema({
    user : String,
    taskname : String,
    tasktype : String
});
module.exports = mongoose.model('task', task)
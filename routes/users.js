var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/traineeDB');

var user= mongoose.Schema({
  name : String,
  email : String,
  mobile : Number,
})

module.exports = mongoose.model("user", user)
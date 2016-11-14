var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
  number: Number,
  question: String,
  answer: String,
  meta: {
    subject: String,
  },
    created_at: Date,
});

var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;

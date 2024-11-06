const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  description: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

module.exports = mongoose.model('tbl_Quizs', quizSchema);

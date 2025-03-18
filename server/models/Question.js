
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswers: {
    type: [Number],
    required: true
  },
  type: {
    type: String,
    enum: ['single', 'multiple'],
    required: true
  },
  marks: {
    type: Number,
    enum: [1, 2],
    default: 1
  },
  negativeMarks: {
    type: Number,
    default: 0.25
  },
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam'
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

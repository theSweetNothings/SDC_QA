const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  "question_id": {
    type: Number,
    required: true
  },
  "question_body": {
    type: String,
    required: true
  },
  "question_date": {
    type: String,
    required: true
  },
  "asker_name": {
    type: String,
    required: true
  },
  "question_helpfulness": Number,
  "reported": Number,
  "answers": {}
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
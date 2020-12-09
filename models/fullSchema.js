const mongoose = require('mongoose');

const fullQuestionSchema = new mongoose.Schema({
  "product_id": {
    type: String,
    required: true
  },
  "results": [
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
    "answers": {

    }
  ]
});

const FullQuestion = mongoose.model('FullQuestion', questionSchema);

module.exports = FullQuestion;
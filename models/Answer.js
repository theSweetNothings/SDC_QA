const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  "id": {
    type: Number,
    required: true
  },
  "body": {
    type: String,
    required: true
  },
  "date": {
    type: String,
    required: true
  },
  "answerer_name": {
    type: String,
    required: true
  },
  "helpfulness": Number,
  "photos": [
    {
      "id": String,
      "url": String
    }
  ]
})

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
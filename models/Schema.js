const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  "id": {
    type: Number
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
  "reported": Number,
  "photos": [
    {
      "id": String,
      "url": String
    }
  ]
})

const Answer = mongoose.model('Answer', answerSchema);

const questionSchema = new mongoose.Schema({
  "question_id": {
    type: Number,
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
  "answers": [answerSchema]
});

const Question = mongoose.model('Question', questionSchema);

const productSchema = new mongoose.Schema({
  "product_id": {
    type: Number,
    required: true
  },
  "results": [questionSchema]
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product, Question, Answer
}
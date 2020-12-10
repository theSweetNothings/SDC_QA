import Question from './Question';
import Answer from './Answer';
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  "product_id": {
    type: Number,
    required: true
  },
  "results": [
    {
      "_id": Number,
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
      "answers": [
        {
          "_id": {
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
              "url": String
            }
          ]
        }
      ]
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  "product_id": {
    type: String,
    required: true
  },
  "results": [
    "product_id": {
      type: Number,
      required: true
    },
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
      Number: {
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
            "url": String
          }
        ]
      }
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
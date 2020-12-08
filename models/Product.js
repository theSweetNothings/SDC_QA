const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  "product_id": {
    type: String,
    required: true
  },
  "results": []
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
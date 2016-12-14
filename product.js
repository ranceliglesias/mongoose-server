const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  model: {type: String },
  color: {type: String },
  windows: {type: Number, max: 4},
  engine: {type: String },
  plate: {type: String }
});

// Virtual
 ProductSchema.virtual('modelView').get(function() {
   return `${this.color}${this.engine}`
 });


// Model
const Product = mongoose.model('product', ProductSchema);

// Model Exporting
module.exports = Product;

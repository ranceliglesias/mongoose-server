const mongoose = require('mongoose');

let Post;

const PostSchema = new mongoose.Schema({
  author: {type: String, require: true },
  content: {type: String },
  title: {type: String },
  date: {type: Date }
});

// Set Model
Post = mongoose.model('post', PostSchema);
 // Model Exporting
module.exports = Post;

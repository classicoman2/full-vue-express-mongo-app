const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (value == "") throw new Error("El camp text no pot estar buid");
    }
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
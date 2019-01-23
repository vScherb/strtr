const mongoose = require('mongoose');

const db = {
  BlogPost: mongoose.model('BlogPost', mongoose.Schema({
    id: Number,
    created: Date,
    title: String,
    content: String,
    tags: [String]
  }))
};

module.exports = db;
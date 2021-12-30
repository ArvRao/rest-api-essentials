const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: String,
    required: false,
  },
  topic: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Post', PostSchema)

const mongoose = require('mongoose')

// 发布文章模板
const post_message = new mongoose.Schema({
  id: Number,
  userName:String,
  email:String,
  content:String
})

module.exports = mongoose.model('PostMessage', post_message)

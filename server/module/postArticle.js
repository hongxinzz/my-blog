const mongoose = require('mongoose')

// 发布文章模板
const post_article = new mongoose.Schema({
  id: Number,
  title: String,
  cover: String,
  introduction:String,
  content: String,
  tags: String,
  time: String
})

module.exports = mongoose.model('PostArticle', post_article)

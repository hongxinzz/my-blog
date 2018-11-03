const mongoose = require('mongoose')
// 修改文章模板
const update_article = new mongoose.Schema({
  id: String,
  title: String,
  cover: String,
  content: String,
  tags: Array,
  time: String
})

module.exports = mongoose.model('UpdateArticle', update_article)

const mongoose = require('mongoose')




// 发布文章模板
const post_article = new mongoose.Schema({
  id: Number,
  title: String,
  cover: String,
  content: String,
  tags: Array,
  time: String
})




module.exports = mongoose.model('PostArticle', post_article)
const mongoose = require('mongoose')

/**
 * 文章页面的数据模型
 * @type {mongoose.Schema}
 */
const post_article = new mongoose.Schema({
  id: Number,
  title: String,
  cover: String,
  introduction:String,
  content: String,
  tags: Array,
  time: String
})
let postArticle = mongoose.model('postArticle', post_article)


/**
 *  读取标签对应的文章
 * @param tag
 */
module.exports.findArticleByTag = tag =>{
 return postArticle.find({tags:{$regex:tag}})
}

/**
 * 文章详情页面
 * @param id
 */
module.exports.findArticleOne = id =>{
  return postArticle.find({_id:id})
}

/**
 * 获取所有标签
 * @returns {number | * | BigInt | T}
 */
module.exports.findArticleAllTag = () =>{
  return postArticle.find({}, {tags:1,"_id":0})
}

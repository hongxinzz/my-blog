const mongoose = require('mongoose')

/**
 * 文章页面的数据模型
 * @type {mongoose.Schema}
 */
const article = new mongoose.Schema({
  id: Number,
  title: String,
  cover: String,
  introduction:String,
  content: String,
  tags: Array,
  time: String
})
let _Article = mongoose.model('postArticle', article)


/**
 *  读取标签对应的文章
 * @param tag
 */
module.exports.findArticleByTag = tag =>{
 return _Article.find({tags:{$regex:tag}})
}

/**
 * 文章详情页面
 * @param id
 */
module.exports.findArticleOne = id =>{
  return _Article.find({_id:id})
}

/**
 * 获取所有标签
 * @returns {number | * | BigInt | T}
 */
module.exports.findArticleAllTag = () =>{
  return _Article.find({}, {tags:1,"_id":0})
}

/**
 * 获取所有文章数
 * @returns {*}
 */
module.exports.getArticleCount = () =>{
  return _Article.count()
}

/**
 * 获取分页的个数
 * @param start
 * @param pageLimit
 * @returns {RegExpExecArray | * | null}
 */
module.exports.getArticlePage = (start,pageLimit) =>{
  return _Article.find({}).sort({time:-1}).skip(start).limit(pageLimit).exec();
}

module.exports.getArticleNew = pageLimit =>{
  return _Article.find({}).sort({time:-1}).limit(pageLimit).exec();
}

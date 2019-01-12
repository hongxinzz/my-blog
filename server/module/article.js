const mongoose = require('mongoose')
const moment = require('moment');

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

/**
 * 获取最新3个
 * @param pageLimit
 * @returns {RegExpExecArray | * | null}
 */
module.exports.getArticleNew = pageLimit =>{
  return _Article.find({}).sort({time:-1}).limit(pageLimit).exec();
}

/**
 * 发布文章
 * @param data
 */
module.exports.postArticle = data =>{
  let person = new _Article({
    title: data.title,
    tags: data.tags,
    cover: data.cover,
    introduction: data.introduction,
    content: data.content,
    time: moment().format()
  })
  return  person.save();
}

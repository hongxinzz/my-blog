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

let myMongoose = (err,data) =>{
  return new Promise((resolve ,reject)=>{
    if(data){
      resolve(data);
    }else{
      reject(err)
    }
  })
}

module.exports.findArticleBytag = tag =>{
 return postArticle.find({tags:{$regex:tag}}, function (err, comment) {
   return  myMongoose(err,comment);
  })
}

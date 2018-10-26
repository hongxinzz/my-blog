
const mongoose = require('mongoose');

// 注册模板
const user_reg = new mongoose.Schema({
    id:Number,
    userName:String,
    password:String
})

// 登录模板
const user_login = new mongoose.Schema({
    userName:String,
    password:String
})

// 发布文章模板
const post_article = new mongoose.Schema({
  id:Number,
  title:String,
  cover:String,
  content:String,
  tags:Array,
  time:String
})

// 修改文章模板
const update_article = new mongoose.Schema({
  id:String,
  title:String,
  cover:String,
  content:String,
  tags:Array,
  time:String
})
module.exports = mongoose.model("UserReg",user_reg);
module.exports = mongoose.model("UserLogin",user_login);
module.exports = mongoose.model("PostArticle",post_article);
module.exports = mongoose.model("UpdateArticle",update_article)

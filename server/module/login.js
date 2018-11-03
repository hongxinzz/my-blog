const mongoose = require('mongoose')
// 登录模板
const user_login = new mongoose.Schema({
  userName: String,
  password: String
})


module.exports = mongoose.model('UserLogin', user_login)

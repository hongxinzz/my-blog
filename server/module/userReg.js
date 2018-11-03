const mongoose = require('mongoose')


// 注册模板
const user_reg = new mongoose.Schema({
  id: Number,
  userName: String,
  password: String
})


module.exports = mongoose.model('UserReg', user_reg)

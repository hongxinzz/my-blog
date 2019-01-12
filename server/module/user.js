const mongoose = require('mongoose')


// 登录模板
const user = new mongoose.Schema({
  id: Number,
  userName: String,
  password: String
})

let _User = mongoose.model('UserReg', user)

/**
 * 用户登录
 * @param data
 * @returns {*}
 */
module.exports.userLogin = data=>{
  return  _User.findOne({userName: data.userName, password: data.password})
}

/**
 * 查询用户
 * @param data
 * @returns {*}
 */
module.exports.queryRegister =  data =>{
  return  _User.findOne({userName: data.userName})
}

/**
 * 注册用户
 * @param data
 * @returns {*}
 */
module.exports.userRegister =  data =>{
  let person = new _User({
      userName: data.userName,
      password: data.password
  })
  return  person.save();
}

const mongoose = require('mongoose')

/**
 * 发布留言模板(游客模式)
 * @type {mongoose.Schema}
 */
const message = new mongoose.Schema({
  id: Number,
  userName:String,
  email:String,
  content:String,
  pic:String
})

let _Message = mongoose.model('PostMessage', message)

/**
 * 保存留言
 * @param data
 */
module.exports.postMessage = (data) =>{
  let person = new _Message({
    userName: data.userName,
    email: data.password,
    content:data.content,
    pic:data.pic
  })
  return person.save();
}

/**
 * 获取留言
 * @returns {RegExpExecArray | * | null}
 */
module.exports.getMessage = () =>{
  return _Message.find({}).sort({_id:-1}).exec()
}

/**
 * 删除留言
 * @param id
 */
module.exports.deleteMessage = (id) =>{
  console.log(id)
  return _Message.remove({_id:id}).exec();
}

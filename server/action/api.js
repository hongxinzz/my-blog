const url = require('url')
const UserReg = require('../module/userReg')
const UserLogin = require('../module/login')
const updataArtcile = require('../module/updataArticle')
const postArticle = require('../module/postArticle')

const httpApi = function (req, res) {
  let method = req.method
  let urlObj = url.parse(req.url)
  let pathname = urlObj.pathname

  // 判断是否post接口并且是用户注册
  if (method === 'POST' && pathname === '/api/user_reg') {
    let body = ''
    // 获取body
    req.on('data', function (chunk) {
      body += chunk
    })
    req.on('end', function () {
      let data = JSON.parse(body)
      console.log(data)
      // 实例化Person
      let person = new UserReg({
        userName: data.userName,
        password: data.password
      })
      //    查询数据库
      UserReg.findOne({userName: data.userName}, function (err, result) {
        console.log(data.userName, result)
        if (res && res.userName === data.userName) {
          returnJSON(res, {
            code: -1,
            msg: '昵称已被注册'
          })
        } else {
          // 向数据库保存这条数据
          person.save((err, result) => {
            console.log(result._id)
            if (err) {
              returnJSON(res, {
                code: -1,
                msg: '注册失败'
              })
            } else {
              returnJSON(res, {
                code: 1,
                msg: `注册成功,您的ID为${result._id}`
              })
            }
          })
        }
      })
    })
  }
  // 登录
  if (method === 'POST' && pathname === '/api/login') {
    let body = ''
    // 获取body
    req.on('data', function (chunk) {
      body += chunk
    })
    req.on('end', function () {
      let data = JSON.parse(body)
      console.log(data.userName)
      // 实例化Person
      UserReg.findOne({userName: data.userName, password: data.password}, function (err, comment) {
        console.log(data.userName,comment,err)
        if (comment && comment.userName === data.userName && comment.password === data.password) {
          returnJSON(res, {
            code: 1,
            msg: '登陆成功'
          })
        } else {
          returnJSON(res, {
            code: -1,
            msg: '账号或密码错误'
          })
        }
      })
    })
  }
  // 提交文章
  if (method === 'POST' && pathname === '/api/post_article') {
    let body = ''
    // 获取body
    req.on('data', function (chunk) {
      body += chunk
    })
    req.on('end', function () {
      let data = JSON.parse(body)
      console.log(data)
      // 实例化Person
      let person = new postArticle({
        id: data.id,
        title: data.title,
        cover: data.cover,
        content: data.content,
        tags: data.tags,
        time: data.time
      })
      person.save(function (err, comment) {// eslint-disable-line
        if (comment) {
          returnJSON(res, {
            code: 1,
            msg: '增加文章成功' + comment._id
          })
        } else {
          returnJSON(res, {
            code: -1,
            msg: '增加文章失败'
          })
        }
      })
    })
  }
  //  修改文章
  if (method === 'POST' && pathname === '/api/update_article') {
    let body = ''
    // 获取body
    req.on('data', function (chunk) {
      body += chunk
    })
    req.on('end', function () {
      let data = JSON.parse(body)
      console.log(data)
      // 修改的数据
      let update = {
        $set: {
          title: data.title,
          cover: data.cover,
          content: data.content,
          ags: data.tags,
          time: data.time
        }
      }
      let option = {multi: true}
      updataArtcile.updateMany({_id: data.id}, update, option, function (err, comment) {// eslint-disable-line
        console.log(comment)
        if (comment.ok) {
          returnJSON(res, {
            code: 1,
            msg: '修改文章成功'
          })
        } else {
          console.log(err)
          returnJSON(res, {
            code: -1,
            msg: '修改文章失败'
          })
        }
      })
    })
  }
}
function returnJSON (res, json) {
  // 设置状态码为200
  res.statusCode = 200
  // 设置请求头
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(json))
}

module.exports = httpApi

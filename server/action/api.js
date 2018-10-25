const url = require('url');
const qs = require('querystring');
const UserReg = require('../module/person');

const httpApi = function(req,res){
    let method = req.method;
let urlObj = url.parse(req.url);
let pathname = urlObj.pathname;
//判断是否post接口并且是用户注册
if (method === 'POST' && pathname === "/api/user_reg") {
    let body = ''
    //获取body
    req.on('data', function (chunk) {
        body += chunk;
    })
    req.on('end', function () {
        let data = JSON.parse(body)
        console.log(data.userName)
        //实例化Person
        let person = new UserReg({
            userName: data.userName,
            password: data.password,
        })
        //    查询数据库
        UserReg.findOne({ userName: data.userName }, function (err, comment) {
            console.log(data.userName, comment)
            if (comment && comment.userName === data.userName) {
                returnJSON(res, {
                    code: -1,
                    msg: '昵称已被注册'
                })
            } else {
                //向数据库保存这条数据
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
//登录
if (method === 'POST' && pathname === "/api/login") {
    let body = ''
    //获取body
    req.on('data', function (chunk) {
        body += chunk;
    })
    req.on('end', function () {
        let data = JSON.parse(body)
        console.log(data.userName)
        //实例化Person
        let person = new UserReg({
            userName: data.userName,
            password: data.password,
        })
        UserReg.findOne({userName:data.userName,password:data.password},function(err,comment){
            if(comment && comment.userName === data.userName && comment.password === data.password){
                returnJSON(res,{
                    code:1,
                    msg:'登陆成功'
                })
            }else{
                returnJSON(res,{
                    code:-1,
                    msg:'账号或密码错误'
                })
            }
        })
    });
}
}




function returnJSON(res, json) {
    //设置状态码为200
    res.statusCode = 200;
    //设置请求头
    res.setHeader('Content-Type', 'application/json'); 
    res.end(JSON.stringify(json));
}

module.exports = httpApi;
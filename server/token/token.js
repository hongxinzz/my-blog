const jwt = require('jsonwebtoken');
//引入数据库模型
const user = require('../module/user')

module.exports.check = async ctx => {
    if(ctx.request.header.authorization){
      return  jwt.verify(ctx.request.header.authorization.split(' ')[1], 'token', (error, data) => {
            if (error && error.name === "TokenExpiredError") {
                ctx.body={
                    code:401,
                    errMessage:'token过期，重新登录'
                };
                return
            }
            let userName = {userName:data.user};
            return user.queryRegister(userName).then( async res=>{
                if (res) {
                    console.log(1)
                   return true;
                } else {
                    ctx.body={
                        code:'error',
                        errMessage:'用户名不存在'
                    };
                }
            });
        })
    }else{
        ctx.body = {
            code:401,
            message: '没有token'
        };
    }
};
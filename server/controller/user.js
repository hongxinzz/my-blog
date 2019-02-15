const userModal = require('../module/user');
//token中间件
const jwt = require('jsonwebtoken');
const serect = 'token';

/**
 * 用户登录
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.userLogin = async ctx =>{
  let data = ctx.request.body;
  // console.log(data);
  await userModal.userLogin(data)
    .then(res=>{
        const token = jwt.sign({
            user: res.userName,
        }, serect, {expiresIn: '1h'});
      if(res){
          res = {...res,token:token}
      }
      checkDataType(ctx,res)
    })
};

/**
 * 用户注册
 * @param ctx
 * @returns {Promise<void>}
 */
module.exports.userRegister = async ctx =>{
  let data = ctx.request.body;
  let isHasUser = false;
  await userModal.queryRegister(data)
    .then(res=>{
      //昵称被注册了
      if(res){
         isHasUser =  true
        res = null;
        checkDataType(ctx,res)
      }
    })
  if(!isHasUser){
    await userModal.userRegister(data)
      .then(res=>{
        checkDataType(ctx,res)
      })
  }
}

/**
 * 判断是否正确数据
 * @param ctx
 * @param data
 */
function checkDataType(ctx,data) {
  if (data) {
    ctx.body = data;
  } else {
    ctx.body = 'error'
  }
}

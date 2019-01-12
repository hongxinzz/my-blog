const router = require('koa-router')();
//引入用户模型
const user = require('../controller/user');


/******************** POST *****************/

//用户登录
router.post('/api/login',user.userLogin)

//用户注册
router.post('/api/user_reg',user.userRegister)


module.exports = router

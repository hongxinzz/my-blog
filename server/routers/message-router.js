const router = require('koa-router')();
//引入文章数据模型
const message = require('../controller/message');

/************************ GET ***************************/
//获取留言板信息
router.get('/api/get_blog_message', message.getMessage)

/************************ POST ***************************/

//提交留言信息
router.post('/api/post_message', message.postMessage)

//删除留言
router.post('/api/delete_blog_message',message.deleteMessage)





module.exports = router

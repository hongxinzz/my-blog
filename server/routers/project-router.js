const router = require('koa-router')();
//引入留言板数据模型
const project = require('../controller/project');

/************************ POST ***************************/

//保存demo页面
router.post('/api/post_project', project.postProject);




/************************ GET ***************************/

//获取demo页面
router.get('/api/get_blogs_project', project.getProject);


module.exports = router;
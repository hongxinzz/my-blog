const router = require('koa-router')();

const article = require('../controller/article');
// 读取blog 的标签对应文章
router.get('/api/get_blogs_by_tags', article.findArticleBytag)



module.exports = router

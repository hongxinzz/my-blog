const router = require('koa-router')();
//引入文章数据模型
const article = require('../controller/article');

// 读取标签对应文章(模糊搜索)
router.get('/api/get_blogs_by_tags', article.findArticleByTag)

// 读取文章详情页面
router.get('/api/get_blogs_one', article.findArticleOne)

// 读取所有文章的标签
router.get('/api/get_blogs_tags', article.findArticleAllTag)

// 分页操作
router.get('/api/get_blogs_page', article.getArticlePage)

// 查找最新的三个
router.get('/api/get_blogs_new', article.getArticleNew)



module.exports = router

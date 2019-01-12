const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 创建一个主机名
const hostname = '127.0.0.1'
// 创建一个服务端号
const port = 8080
// 连接数据库 本地需要启动
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

//使用bodyParser获取body(post方法)
app.use(bodyParser());
//引入数据库模型 并通过路由返回数据
app.use(require('./routers/article-router.js').routes())
app.use(require('./routers/message-router.js').routes())
app.use(require('./routers/user-router.js').routes())


app.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`)
})


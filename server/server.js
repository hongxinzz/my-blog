//引入 http
const http = require('http');
const url = require('url');
const mongoose = require('mongoose');


 //创建一个主机名
const hostname = '127.0.0.1';
 //创建一个服务端号
const port = 3000;
//连接数据库 本地需要启动
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
 //创建一个请求头 req为http请求res为http响应x
const server = http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;
    require('./router').router(req,res);
});
 //设置监听
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}/`);
})

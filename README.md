# Vue写的个人博客(原生node版)
## 一个通过markdown 转码为Html的博客小站(同时支持在线编写)
## 技术栈
- 前端
  - Vue
  - Vue-Router
  - Vuex
  - Sass
  - axios
- 后台
  - Node(原生下一个版本会采用koa) 
  - [x] 已完成使用koa (2019.01.12)
- 数据库
  - mongodb
- Ui
  - ElementUi(部分)
- 工具
  - markedown(用来转码markdown为html)
  - Highlight.js(代码高亮)
 

 完成页面如下：
#### 前台
- [x] 首页
- [x] 标签页
- [x] 留言板
- [ ] Demo页面
- [ ] 友情链接
- [ ] 音乐播放界面
#### 后台
- [ ] 博客在线编写
- [ ] 留言审批
- [ ] 友链审批


```js
  git clone  https://github.com/hongxinzz/my-blog.git
  npm install
  moongod(启动本地数据库)
  node server/server.js（启动node服务）
  node server/action/markHtml.js(将Markdown入库数据库)
  npm start
```

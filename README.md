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
  - ElementUi(部分)(弃用，独立封装UI 2019.01.12)
- 工具
  - markedown(用来转码markdown为html)
  - Highlight.js(代码高亮)
 

 完成页面如下：
#### 前台
- [x] 首页
- [x] 标签页
- [x] 留言板
- [x] Demo页面(2019.01.12)
- [ ] 友情链接
- [ ] 音乐播放界面
#### 后台
- [x] 博客在线编写(2019.01.12)
- [ ] 留言审批
- [ ] 友链审批


#### 页面截图
![首页](https://raw.githubusercontent.com/hongxinzz/blog-node/master/images/index.png)
- 
![文章列表](https://raw.githubusercontent.com/hongxinzz/blog-node/master/images/article.png)
-
![标签页](https://raw.githubusercontent.com/hongxinzz/blog-node/master/images/tag.png)
-
![留言](https://raw.githubusercontent.com/hongxinzz/blog-node/master/images/message.png)
-
![项目](https://raw.githubusercontent.com/hongxinzz/blog-node/master/images/project.png)

```js
  git clone  https://github.com/hongxinzz/my-blog.git
  npm install
  moongod(启动本地数据库)
  npm start
```

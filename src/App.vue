<template>
  <div id="app">
    <div class="blog-wrap">
      <!--header -->
      <blogHeader />
      <div class="blog-banner">
        <h2>卓鸿鑫,前端爱好者</h2>
        <h3>Just Do It !</h3>
      </div>
    </div>
    <blogArticle />
    <router-view/>
  </div>
</template>

<script>
import blogHeader from './components/blog-header/blogHeader'
import blogArticle from './components/blog-article/blog-article'
export default {
  name: 'App',
  components: {blogHeader,blogArticle}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
  .blog-wrap{
    .blog-banner{
      width: 100%;
      height:460px;
      text-align: center;
      color: #fff;
      background: linear-gradient(100deg,#ff6e7f,#bfe9ff);
      box-shadow: 0 4px 20px rgba(0,38,55,.16);
      h2{padding-top: 190px;
        font-size: 42px;
        font-family: Arial,'Hiragino Sans GB','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 52px;
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
      }
      h3{
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 10px;
        margin-top: 8px;
      }
    }
  }
</style>

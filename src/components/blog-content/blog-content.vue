<template>
  <!--博客主体-->
  <main>
    <div class="blog-content">
      <!--文章部分-->
      <blogArticle />
      <!--右边卡片-->
      <blogSider />
    </div>
  </main>
</template>

<script>
import blogArticle from '../blog-article/blog-article'
import blogSider from '../blog-sider/blogSider'
export default {
  name: 'blog-content',
  components: {blogArticle, blogSider}
}
</script>

<style scoped>
  .blog-content{
    width: 1000px;
    margin: 40px auto 60px;
    overflow: hidden;
    clear: both;
  }
</style>

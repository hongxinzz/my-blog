<template>
  <!--博客主体-->
  <main>
    <div class="blog-content">
      <!--选项卡卡片-->
      <blogSider />
      <!--新文章-->
      <blogNewList />
      <!--文章部分-->
      <blogArticle />
    </div>
  </main>
</template>

<script>
// import blogNewList from '../blog-newList/blog-newList'
import blogArticle from '../blog-article/blog-article.vue'
import blogSider from '../blog-sider/blog-sider.vue'
import blogNewList from  '../blog-newList/blog-newList.vue'
export default {
  name: 'blog-content',
  components: {blogArticle, blogSider,blogNewList}
}
</script>

<style scoped>
  .blog-content{
    width: 750px;
    margin: 40px auto 60px;
    overflow: hidden;
    clear: both;
  }
</style>

<template>
  <div class="blog-sider-wrap">
    <h2><i class="iconfont blog-laba"></i>Announcement</h2>
    <div class="blog-sider">
      如果你想看本博客源码，可以点这里 👉👉&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/hongxinzz/my-blog" target="_blank"><i class="iconfont blog-GitHub"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogSider',
  data () {
    return {
    }
  },
  computed: {
  },
  created: function () {
    // this.getBlogTags()
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .blog-sider-wrap{
    margin-bottom: 40px;
    h2{
      padding: 6px;
      font-size: 18px;
      margin-bottom: 30px;
      color:#666;
      border-bottom: 1px dashed #ececec;
      i{
        margin-right: 15px;
        color: #4479d4;
      }
    }
    .blog-sider{
      margin-bottom: 15px;
      border: 1px dashed #e6e6e6;
      color: #969696;
      padding: 16px;
      border-radius: 10px;
      font-size: 14px;
      background: #fbfbfb;
    }
  }
</style>

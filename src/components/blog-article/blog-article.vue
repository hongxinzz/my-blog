<template lang="ejs">
  <div class="article-list" v-if="blogList">
    <article class="article-item" v-for=" blog in blogList">
      <div class="post-cover">
        <a> <router-link  :to="{name:'details',params: {id:blog._id}}"></router-link></a>
        <img :src="blog.cover" alt="">
      </div>
      <section class="post-preview">
        <a><router-link  :to="{name:'details',params: {id:blog._id}}"></router-link></a>
        <h2>{{blog.title}}</h2>
        <h3>{{blog.introduction}}</h3>
      </section>
      <footer class="post-meta">
        <div class="post-tags">
          <router-link to="/tags" v-for="tags in getTags(blog.tags)">{{tags}}</router-link>
        </div>
        <time class="post-date" >
         <i class="iconfont blog-time"></i>{{blog.time}}
        </time>
      </footer>
    </article>
  </div>

</template>

<script>
export default {
  name: 'blog-article',
  data () {
    return {
      blogList: []
    }
  },
  created: function () {
    this.getBlogList()
  },
  methods: {
    getBlogList () {
      this.axios.get('/api/get_blogs').then(data => {
        console.log(data.data)
        console.log(data.data.data[0].time)
        this.blogList = data.data.data
      })
    },
    getTags (list) {
      let newList = list.split(' ')
      return newList
    }
  }
}
</script>

<style lang="scss">
  .article-list {
    float: left;
    width: 695px;
    .article-item {
      width: 100%;
      margin-bottom: 16px;
      padding: 30px 20px;
      background-color: #fff;
      border: 1px solid #e7eaf1;
      border-radius: 3px;
      box-sizing: border-box;
      transition: all .3s;
      box-shadow: 0 1px 3px rgba(0, 37, 55, .1);
      .post-cover {
        position: relative;
        width: 100%;
        max-height: 300px;
        margin-bottom: 14px;
        overflow: hidden;
        a {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 33;
        }
        img {
          width: 100%;
          transition: all .3s;
          vertical-align: middle;
        }
      }
      .post-preview {
        position: relative;
        a {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        h2 {
          color: #4e4e4e;
          font-size: 24px;
          line-height: 32px;
        }
        h3 {
          margin-top: 3px;
          font-size: 18px;
          font-weight: 400;
          color: #b8bdc3;
          line-height: 26px;
        }
      }
      .post-meta {
        height: 22px;
        margin-top: 16px;
        .post-tags {
          float: left;
          display: inline-block;
          a {
            display: inline-block;
            width: auto;
            height: 22px;
            padding: 0 8px;
            margin-right: 8px;
            font-size: 14px;
            color: #a6abb2;
            line-height: 22px;
            box-sizing: border-box;
            box-shadow: 0 0 0.6px #d5dae1;
            border-radius: 2px;
            background-color: #fafafa;
            cursor: pointer;
            &:last-child {
              margin-right: 0;
            }
            &:hover{
              color: #83888f;
            }
          }
        }
      }
      .post-date {
        float: right;
        color: #a9b0bc;
        display: inline-block;
        font-size: 14px;
        letter-spacing: .6px;
        line-height: 22px;
        i{
          margin-right: 10px;
          margin-top: 2px;
        }
      }
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 4px 3px rgba(0, 37, 55, .3);
        .post-cover{
          img{
            transform: scale(1.1);
          }
        }
      }
    }
  }
</style>

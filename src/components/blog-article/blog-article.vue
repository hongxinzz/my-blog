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
          <a href="" v-for="tags in getTags(blog.tags)">{{tags}}</a>
        </div>
        <time class="post-date" >
          {{blog.time}}
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
    .article-list{
      float: left;
      width: 695px;
      .article-item{
        width: 100%;
        margin-bottom: 16px;
        padding: 30px 20px;
        background-color: #fff;
        border: 1px solid #e7eaf1;
        border-radius: 3px;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0,37,55,.06);
        .post-cover{
          position: relative;
          width: 100%;
          max-height: 300px;
          margin-bottom: 14px;
          overflow: hidden;
          a{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          img{
            width: 100%;
            vertical-align: middle;
          }
        }
        .post-preview{
          position: relative;
          a{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          h2{
            color: #4e4e4e;
            font-size: 24px;
            line-height: 32px;
          }
          h3{
            margin-top: 3px;
            font-size: 18px;
            font-weight: 400;
            color: #b8bdc3;
            line-height: 26px;
          }
        }
        .post-meta{
          height: 22px;
          margin-top: 16px;
          .post-tags{
            float: left;
            display: inline-block;
            a{
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
              &:last-child{
                margin-right: 0;
              }
            }
          }
        }
        .post-date{
          float: right;
          color: #a9b0bc;
          display: inline-block;
          font-size: 14px;
          letter-spacing: .6px;
          line-height: 22px;
          &::before{
            position: relative;
            top: 2px;
            left: -6px;
            content: '';
            float: left;
            display: inline-block;
            width: 18px;
            height: 18px;
            /*background: url(../icons/date.svg"") no-repeat center;*/
            background-size: 100%;
          }
          }
        }
      }
</style>

<template>
  <div class="article-list" v-if="blogList">
  <h1><i class="iconfont blog-remen"></i>Hot</h1>
    <article class="article-item" v-for=" (blog,index) in blogList" :key="index">
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
      <div class="author"><i class="iconfont blog-zuozhe"></i>FreddyZhuo</div>
        <div class="post-tags">
          <router-link :to="{name:'tags',params: {type:tags}}" v-for="(tags,index) in blog.tags" :key="index"><i class="iconfont blog-biaoqian1"></i>{{tags}}</router-link>
        </div>
        <time class="post-date" >
         <i class="iconfont blog-time"></i>{{blog.time}}
        </time>
      </footer>
    </article>
    <div class="article-page" v-if="pageCount >= 2">
        <button @click="getBlogList(pageNum-1)">&lt;</button>
        <button  :class="pageNum-1== index?'active':''" v-for="(num,index) in pageCount" :key="index" @click="getBlogList(index+1)">{{num}}</button>
        <button @click="getBlogList(pageNum+1)">&gt;</button>
    </div>
  </div>

</template>

<script>
  import {getBlogsPage} from '../../../api/api.js';
export default {
  name: 'blog-article',
  data () {
    return {
      blogList: [], // 博客总数量
      pageCount: 0, // 翻页总数
      pageLimit: 5, // 每页数量
      pageNum: 1 // 当前页码
    }
  },
  created: function () {
    this.getBlogList(this.pageNum)
  },
  methods: {
    getBlogList (page) {
      if (page < 1) {
        return
      }
      if (this.pageCount) {
        if (page > this.pageCount) {
          return
        }
      }
      this.pageNum = page
        getBlogsPage({ page: page, pageLimit:this.pageLimit})
            .then(data => {
                this.blogList = data.data;
                this.pageCount = Math.ceil(data.count / this.pageLimit)
            })
    },
    // getBlogPage () {
    //   this.axios.get('/api/get_blogs_page', {
    //     params: {
    //       id: this.blog_id
    //     }
    //   }).then(data => {
    //     this.blogData = data.data.data[0]
    //   }).then(err => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>

<style lang="scss">
  .article-list {
    padding-top: 10px;
    padding-bottom: 30px;
    h1 {
      padding: 6px;
      font-size: 18px;
      margin-bottom: 30px;
      color: #666;
      border-bottom: 1px dashed #ececec;
      i {
        font-size: 18px;
        margin-right: 15px;
        color: #ff4940;
      }
    }
    .article-item {
      width: 100%;
      margin-bottom: 30px;
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
        height: 284px;
        margin-bottom: 22px;
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
          color: #48494d;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;
        }
        h3 {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          color: #566573;
          /*font-family: Arial;*/
        }
      }
      .post-meta {
        height: 22px;
        margin-top: 16px;
        .author{
          line-height: 22px;
          display: inline-block;
          color: #a6abb2;
          i{
            font-size: 17px;
            margin-right: 5px;
          }
        }
        .post-tags {
          /*float: left;*/
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
            cursor: pointer;
            &:last-child {
              margin-right: 0;
            }
            i{
              font-size: 17px;
              margin-right: 5px;
            }
            &:hover{
              color: #83888f;
            }
          }
        }
      }
      .post-date {
        /*float: right;*/
        color: #a9b0bc;
        display: inline-block;
        font-size: 14px;
        letter-spacing: .6px;
        line-height: 22px;
        i{
          margin-right: 5px;
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
    .article-page {
      height: 34px;
      line-height: 34px;
      text-align: center;
      button{
        display: inline-block;
        padding: 10px 12px;
        color:#c0c4cc ;
        font-size: 14px;
        border: none;
        outline: none;
        border-radius: 4px;
        margin-right: 6px;
        background-color: #fafafa;
        cursor: pointer;
        /*hover f4f4f5 */
        &:hover{
          background-color: #f4f4f5;
        }
      }
      button.active{
        background-color:#409eff;
        color:#fff;
      }
    }
  }
</style>

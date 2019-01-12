<template>
    <div class="tags-wrap">
      <div class="tags">
        <h1>TAGS</h1>
      </div>
      <main class="tags-content">
          <ul class="tags-list">
            <li>
              <span  v-for="tags in tagsList" v-if="tags" @click="blogByTags(tags)">{{tags}}</span>
            </li>
            <li>
              <h3 class="tag-name" v-if="tagsTitle">{{tagsTitle}}</h3>
             <router-link v-if="blogsList" class="tag-post" v-for="(blog,index) in blogsList" :key="index" :to="{name:'details',params: {id:blog._id}}">{{blog.title}}</router-link>
              <a v-if="blogsList.length < 1" class="tag-post" href="javascript:;">没有找到符合的文章</a>
            </li>
          </ul>
      </main>
      <!--<blogFooter />-->
    </div>
</template>

<script>
import blogFooter from '../blog-footer/blog-footer'
export default {
  name: 'blogTags',
  components: {blogFooter},
  data () {
    return {
      tagsList: [],
      blogsList: [],
      tagsTitle: 'javaScript'
    }
  },
  created: function () {
    this.getBlogTags()
    this.blogByTags(this.tagsTitle)
  },
  methods: {
    blogByTags (tags) {
      this.tagsTitle = tags
      this.axios.get('/api/get_blogs_by_tags', {
        params: {
          tags: tags
        }
      }).then(data => {
        this.blogsList = data.data
        console.log(data)
      }).then(err => {
        console.log(err)
      })
    },
    getBlogTags(){
      this.axios.get('api/get_blogs_tags').then(data=>{
        console.log(Array.from(new Set(data.data.data)))
        this.tagsList = data.data;
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .tags-wrap{
      .tags{
        height: 300px;
        text-align: center;
        background: linear-gradient(to right, #009fff, #ec2f4b);
        h1{
          font-size: 36px;
          line-height: 300px;
          color: #fff;
          animation:  .8s fadeInUp;
        }
      }
      .tags-content{
        width: 695px;
        margin: -100px auto 0;
        .tags-list{
          padding: 40px 0;
          li{
            padding: 30px 20px;
            background-color: #fff;
            border: 1px solid #e7eaf1;
            border-radius: 3px;
            box-sizing: border-box;
            box-shadow: 0 1px 3px rgba(0,37,55,.06);
            list-style: none;
            animation: 2s fadeInUp;
            .tag-name{
              display: block;
              font-size: 20px;
              color: #333;
              text-align: center;
              margin-bottom: 20px;
            }
            .tag-post{
              display: block;
              font-size: 16px;
              color: #666;
              text-align: center;
              margin: 16px auto;
            }
          }
          li:first-child{
            margin-bottom: 24px;
            cursor: default;
            list-style: none;
            animation:  1s fadeInUp;
            span{
              display: inline-block;
              width: auto;
              height: 22px;
              padding: 0 8px;
              font-size: 14px;
              color: #a6abb2;
              line-height: 22px;
              box-sizing: border-box;
              box-shadow: 0 0 0.6px #d5dae1;
              border-radius: 2px;
              background-color: #fafafa;
              cursor: pointer;
              margin-right: 10px;
            }
          }
        }
      }
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translate3d(0,100%,0);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
</style>

<template>
    <div class="tags-wrap">
      <blogHeader />
      <div class="tags">
        <h1>TAGS</h1>
      </div>
      <main class="tags-content">
          <ul class="tags-list">
            <li>
              <span  v-for="(tags,index) in tagsList" v-if="tags" @click="blogByTags(index)">{{tags}}</span>
            </li>
            <li>
              <h3 class="tag-name" v-if="tagsTitle">{{tagsTitle}}</h3>
             <router-link v-if="blogsList" class="tag-post" v-for="blog in blogsList" :to="{name:'details',params: {id:blog._id}}">{{blog.title}}</router-link>
              <a v-if="blogsList.length < 1" class="tag-post" href="javascript:;">没有找到符合的文章</a>
            </li>
          </ul>
      </main>
    </div>
</template>

<script>
import blogHeader from '../blog-header/blogHeader'
export default {
  name: 'blogTags',
  components: {blogHeader},
  data () {
    return {
      tagsList: this.$store.state.tags,
      blogsList: [],
      tagsTitle: ''
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
        this.blogsList = data.data.data
      })
    },
    blogByTags (index) {
      this.tagsTitle = this.tagsList[index]
      this.axios.get('/api/get_blogs_by_tags', {
        params: {
          tags: this.tagsTitle
        }
      }).then(data => {
        this.blogsList = data.data.data
        console.log(this.blogsList)
      }).then(err => {
        console.log(err)
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
</style>

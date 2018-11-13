<template>
    <div class="blog-sider-wrap">
          <div class="sider-bar">
              <section class="sider-card">
                <div class="card-img">
                  <img src="" alt="">
                </div>
                <div class="card-name">卓鸿鑫</div>
                <div class="bio">
                  <p>前端开发者，热爱技术&热爱生活，简单乐观爱创造</p>
                </div>
                <ul class="sns-links">
                  <li>
                    <a href="https://github.com/hongxinzz"> <i class="iconfont blog-GitHub"></i></a>
                  </li>
                </ul>
              </section>
            <section class="tags-card">
              <router-link v-if="tags"  :to="{name:'tags',params: {type:tags}}" class="tag" v-for="tags in tagList">{{tags}}</router-link>
            </section>
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
    tagList () {
      return this.$store.state.tags
    }
  },
  created: function () {
    this.getBlogTags()
  },
  methods: {
    getBlogTags () {
      this.axios.get('/api/get_blogs_tags').then(data => {
        this.$store.commit('getTagsFrist', data.data.data)
        console.log(this.$store.state.tags, '>>>>>>>>>storetags')
      })
    }
  }
}
</script>

<style lang="scss">
  .blog-sider-wrap{
    float: right;
    width: 240px;
    .sider-bar{
      padding: 30px 20px;
      background-color: #fff;
      border: 1px solid #e7eaf1;
      border-radius: 3px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(0,37,55,.06);
      .sider-bar{
        padding: 30px 0;
        border-bottom: 1px solid #e7eaf1;
        .card-img{
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 0 auto;
          overflow: hidden;
          box-shadow: 0 1px 4px rgba(100,110,120,.53);
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .card-name{
        width: 100%;
        font-size: 16px;
        color: #4e4e4e;
        font-weight: 500;
        text-align: center;
        margin: 12px 0 6px;
      }
      .bio{
        p{
          text-align: center;
          font-size: 14px;
          line-height: 20px;
          color: #656565;
        }
      }
      .sns-links{
        margin-top: 14px;
        text-align: center;
        li{
          position: relative;
          display: inline-block;
          width: 26px;
          height: 26px;
          a{
            display: inline-block;
            text-decoration: none;
            cursor: pointer;
            transition: .2s;
            i{
              color: #b8bdc3;
            }
            &:hover{
              i{
                color: #4e4e4e;
              }
            }
          }
        }
      }
    }
    .tags-card{
      padding: 30px 0;
      .tag{
        display: inline-block;
        width: auto;
        height: 22px;
        padding: 0 8px;
        font-size: 14px;
        color: #a6abb2;
        font-family: -apple-system,Verdana,"PingFang SC","Helvetica Neue",Arial,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        line-height: 22px;
        box-sizing: border-box;
        box-shadow: 0 0 0.6px #d5dae1;
        border-radius: 2px;
        background-color: #fafafa;
        cursor: pointer;
        margin-right: 8px;
        margin-bottom: 8px;
        /*#83888f*/
        &:last-child{
          margin-right: 0;
        }
        &:hover{
          color:#83888f;
        }
      }
    }
    section{
      padding: 30px 0;
      border-bottom: 1px solid #e7eaf1;
    }
    section:last-child{
      border-bottom: none;
    }
  }
</style>

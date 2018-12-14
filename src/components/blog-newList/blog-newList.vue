<template>
    <div class="newList-wrap">
        <h2>New Article</h2>
      <div class="article-wrap">
        <div :class="itemIndex === index ? 'article isRotate':'article' " v-for="(item,index) in blogList" v-if="blogList" @mouseover="rotate(index)" @mouseout="rotate(-1)">
          <div class="showImg">
            <!--{{index}}-->
            <img :src="item.cover" alt="">
          </div>
          <div class="showText">
            <h3>{{item.title}}</h3>
            <time>{{item.time}}</time>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'blog-newList',
    data (){
      return {
          blogList: [], // 博客
          pageLimit: 3, // 每页数量
          isHover:false,
          itemIndex:-1
      }
    },
    created:function(){
      this.getBlog()
    },
    methods:{
      getBlog(){
        this.axios.get('/api/get_blogs_new', {
          params: {
            pageLimit: this.pageLimit
          }
        }).then(data => {
          console.log(data.data.data)
          this.blogList = data.data.data
        })
      },
      rotate(index){
        console.log(index)
        this.itemIndex = index
      }
      }
    }
</script>

<style scoped lang="scss">
  .newList-wrap{
    margin-bottom: 40px;
    h2{
      padding: 6px;
      font-size: 18px;
      margin-bottom: 30px;
      color:#666;
      border-bottom: 1px dashed #ececec;
    }
    .article-wrap{
      display: flex;
      transition:0.6s;
      height: 130px;
      perspective:1000;
      transform-style:preserve-3d;
      .article{
        flex: 1;
        height: 130px;
        margin: 0 4px;
        position:relative;transition:0.6s;transform-style:preserve-3d;
        .showImg,.showText{
          position:absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          backface-visibility:hidden;
        }
        .showImg{
          width: 100%;
          height: 100%;
          z-index: 2;
          img{
            width: 100%;
            height: 100%;
            display: inline-block;
          }
        }
        .showText{
          height: 100%;
          width: 100%;
          padding: 4px;
          background: rgba(0,0,0,.2);
          h3{
            text-align: center;
            font-size:16px;
          }
          transform:rotateY(-180deg);
        }
      }
        .isRotate{
          transform:rotateY(180deg);
        }
    }
  }
</style>

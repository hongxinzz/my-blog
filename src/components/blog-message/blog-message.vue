<template>
    <div class="message-wrap">
      <BlogHeader />
      <div class="message-header">
        <h1>MESSAGES</h1>
      </div>
      <main class="message-content">
       <div class="message-left">
         <div class="message-tip">
           <h2>留言</h2>
           <p>目前会默认所有留言默认通过</p>
           <p>言语自由，还请大家文明沟通</p>
           <p>如果您对本站有什么优化或者Bug，也可以发表您的建议哦！</p>
         </div>
         <div class="message-board">

         </div>
       </div>
        <div class="message-right" @mouseover="checkHover(true)" @mouseout="checkHover(false)">
          <div class="message-card">
            <h2 :class=" isHover ? 'hover' : ''">随机文章</h2>
            <ul>
              <li :class="index === 0? 'first-item':'list-item'" v-for="(item,index) in blogList" @click="goDetail(item._id)">
                <div class="overlay" v-show="index === 0"></div>
                <img :src="item.cover" alt="">
                <div class="text">
                  <h3>{{item.introduction}}</h3>
                  <time>{{item.time}}</time>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
  import BlogHeader from '../blog-header/blogHeader'
  export default {
    name: 'blog-message',
    components:{ BlogHeader },
    data(){
      return{
        isHover:false,
        page:1,
        blogList:[]
      }
    },
    created:function(){
      this.getBlogData()
    },
    methods:{
      checkHover(bool){
        this.isHover = bool;
      },
      getBlogData(){
        this.axios.get('/api/get_blogs_page', {
          params: {
            page: this.page,
          }
        }).then(data => {
          this.checkDatas(data.data.data.data)
        })
      },
      goDetail(id){
        this.$router.push({ name: 'details', params: { id: id }})
      },
      checkDatas(data){
        let datas  = []
        for(let i = 0; i < 3; i++){
          let  num = Math.floor(Math.random() * data.length)
          datas.push(data[num])
        }
        datas = Array.from(new Set(datas)) ;
        if(datas.length != 3){
          this.checkDatas(data)
        }else{
          this.blogList = datas;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.message-wrap{
  width: 100%;
  height: auto;
  .message-header{
    height: 300px;
    text-align: center;
    background-image: linear-gradient( to right, #97ABFF , #123597 );
    h1{
      font-size: 36px;
      line-height: 300px;
      color: #fff;
    }
  }
  .message-content{
    display: flex;
    width: 1170px;
    margin: 0 auto;
    padding: 20px 0 ;
    .message-left{
      margin-right: 30px;
      .message-tip{
        width: 780px;
        padding: 50px 38px;
        border: 1px solid #e7eaf1;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0, 37, 55, 0.06);
        h2{
          font-size: 26px;
          font-weight: 600;
          padding-bottom:10px ;
          margin-bottom: 20px;
          border-bottom: 1px solid #e7e7e7;
        }
        p{
          line-height: 1.8;
          font-size: 16px;
        }
      }
    }
    .message-right{
      width: 360px;
      padding: 35px 30px;
      border: 1px solid #e7eaf1;
      border-radius: 3px;
      box-shadow: 0 1px 3px rgba(0, 37, 55, 0.06);
      h2{
        position: relative;
        font-size: 18px;
        color: #282828;
        font-weight: 600;
        margin: 0;
        text-transform: uppercase;
        padding-bottom: 15px;
        margin-bottom: 25px;
        &::after{
          content: "";
          background-color: #282828;
          left: 1px;
          width: 50px;
          height: 2px;
          bottom: -2px;
          position: absolute;
          transition: 0.5s;
        }
      }
      .hover{
          &::after{
            width: 70px;
          }
      }
      .list-item{
        display: flex;
        height: 75px;
        list-style: none;
        margin-bottom: 15px;
        img{
          display: inline-block;
          width: 100px;
          height: 75px;
          margin-right:15px;
        }
        .text{
          display: flex;
          flex-direction: column;
          h3{
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            color: #48494d;
          }
          time{
            font-size: 12px;
            color: #9A9A9A;
            margin-top: auto;
          }
        }
      }
      .first-item{
        position: relative;
        width: 300px;
        height: 170px;
        margin-bottom: 15px;
        list-style: none;
        .overlay{
          width: 100%;
          height: 100%;
          background: #000;
          transition: opacity .4s ease-in-out;
          position: absolute;
          opacity: .5;
        }
        img{
          width: 100%;
          height: 100%;
        }
        .text{
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          time{
            font-size: 12px;
            color: #CCC;
            margin-bottom: 5px;
            display: block;
          }
          h3{
            color: #fff;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
          }
        }
        &:hover{
          .overlay{
            opacity: .3;
          }
        }
      }
      li{
        cursor: pointer;
      }
    }
  }
}
</style>

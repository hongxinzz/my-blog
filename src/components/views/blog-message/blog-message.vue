<template>
    <div class="message-wrap">
      <!--<BlogHeader />-->
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
            <h3>全部评论:{{messageList.length}}条</h3>
           <ul>
             <li v-show="messageList.length === 0 "> <p style="font-size: 15px">还没有留言..</p></li>
             <li v-for="item in messageList">
               <!--item.pic!=''?item.pic:''-->
               <!--:src="item.pic !=='' ? item.pic:'../../assets/images/avatar.png'"-->
               <img :src="item.pic ==='' ? 'http://t.cn/EUdyFtA' :item.pic" alt="">
               <div class="body">
                 <p>{{item.userName}}<time>{{item.time}}</time></p>
                 <p>{{item.content}}</p>
                 <div class="delete">
                   <span @click="deleteMessage(item._id)">删除</span>
                 </div>
               </div>
             </li>
           </ul>
         </div>
         <div class="message-post"  @mouseover="checkHover(true,'message')" @mouseout="checkHover(false)">
           <h3 :class="isHoverMessage ? 'hover' : ''">发表评论</h3>
           <form action="" class="form">
             <div class="input">
               <div>
                 <label>昵称
                   <span>*</span>
                 </label>
                 <input type="text" placeholder="刻上您的大名" v-model="userName" >
               </div>
               <div>
                 <label>邮箱
                   <span>*</span>
                 </label>
                 <input type="text" placeholder="写上您的邮箱" v-model="email">
               </div>
               <div>
                 <label>头像网址</label>
                 <input type="text" placeholder="这个随意哦！" v-model="pic">
               </div>
             </div>
            <div class="textarea">
              <textarea type="textarea" placeholder="说点什么吧..." v-model="content"></textarea>
            </div>
             <div class="button">
               <button @click="postMessages()">发表评论</button>
             </div>
           </form>
         </div>
       </div>
        <div class="message-right" @mouseover="checkHover(true,'article')" @mouseout="checkHover(false)">
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
  import BlogHeader from '../blog-header/blog-header.vue'
  export default {
    name: 'blog-message',
    components:{ BlogHeader },
    data(){
      return{
        isHover:false,
        isHoverMessage:false,
        page:1,
        blogList:[],
        email: '',
        userName: '',
        content:'',
        pic:'',
        messageList:[],
      }
    },
    created:function(){
      this.getBlogData();
      this.getBlogMessage();
    },
    methods:{
      checkHover(bool,type){
        if(type === 'message'){
          this.isHoverMessage = bool;
          return
        }else if(type === 'article'){
          this.isHover = bool;
          return
        }
        this.isHoverMessage = false ;
        this.isHover = false;
      },
      getBlogData(){
        this.axios.get('/api/get_blogs_page', {
          params: {
            page: this.page,
          }
        }).then(data => {
          this.checkDatas(data.data.data)
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
      },
      postMessages(){
        let that = this
        console.log( this.userName,
          this.email,
          this.content,this.pic)
        if(this.userName === ""){
          // Message.error('要输入大名才能认识你哦！')
          return false
        }else if(this.email === ""){
          // Message.error('要输入邮箱才能跟您联系！')
          return false
        }else if(this.content === ""){
          // Message.error('要输入内容才知道问题哦！')
          return false
        }
        this.axios.post('/api/post_message', {
          userName: this.userName,
          email: this.email,
          content:this.content,
          pic:this.pic
        }).then(function (data) {
          if(data){
            Message.success('您的留言发表成功！')
            that.getBlogMessage()
          }
        })
      },
      getBlogMessage(){
        this.axios.get('/api/get_blog_message').then(data=>{
          this.messageList = data.data
        })
      },
      deleteMessage(messageId){
        let that = this;
        let userRoot = JSON.parse(window.localStorage.getItem('USER_LOGIN'));
        console.log(userRoot)
        if(userRoot !== true){
          Message.error('当前只有管理员可以操作！')
          return
        }
        this.axios.post('/api/delete_blog_message', {
          id:messageId
        }).then(function (data) {
         if(data.n !== 1){
           Message.success('删除成功');
           that.getBlogMessage();
         }
        })
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
        animation: fadeInUp .8s;
        box-shadow: 0 1px 3px rgba(0, 37, 55, 0.06);
        h2{
          font-size: 20px;
          font-weight: 600;
          padding-bottom:10px ;
          margin-bottom: 20px;
          color: #282828;
          border-bottom: 1px solid #e7e7e7;
        }
        p{
          line-height: 1.8;
          font-size: 16px;
        }
      }
      .message-board{
        width: 780px;
        padding: 50px 38px;
        border: 1px solid #e7eaf1;
        border-radius: 3px;
        margin-top: 30px;
        animation: fadeInUp 1s;
        box-shadow: 0 1px 3px rgba(0, 37, 55, 0.06);
        h3{
          font-size: 20px;
          font-weight: 600;
          padding-bottom:10px ;
          margin-bottom: 20px;
          color: #282828;
          border-bottom: 1px solid #e7e7e7;
        }
        ul{
          li{
            display: flex;
            margin-bottom: 10px;
            img{
              width: 50px;
              height: 50px;
              border-radius: 3px;
              margin-right: 15px;
            }
            .body{
              flex: 1;
              padding-bottom: 3px;
              border-bottom: 1px solid #eee;
              p{
                font-size: 15px;
                time{
                  margin-left: 10px;
                }
              }
              p:nth-child(2){
                padding: 4px 0 ;
              }
              .delete{
                float: right;
                cursor: pointer;
              }
            }
          }
        }
      }
      .message-post{
        overflow: hidden;
        clear: both;
        width: 780px;
        padding: 50px 38px;
        border: 1px solid #e7eaf1;
        border-radius: 3px;
        margin-top: 30px;
        animation: fadeInUp 1.2s;
        box-shadow: 0 1px 3px rgba(0, 37, 55, 0.06);
        h3{
          font-size: 20px;
          color: #282828;
          font-weight: 600;
          margin-bottom: 30px;
          text-transform: uppercase;
          padding-bottom: 20px;
          position: relative;
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
        .form{
          .error{
            color: red;
          }
          .input{
            display: flex;
            div{
              flex: 1;
              margin-right:15px;
              label{
                display: inline-block;
                max-width: 100%;
                margin-bottom: 5px;
                font-weight: 700;
                color: #888;
                font-size: 14px;
                span{
                  color: #ff4b33;
                  font-weight: 700;
                  margin-left: 3px;
                }
              }
              input{
                width: 88%;
                margin-bottom: 20px;
                margin-top: 5px;
                padding: 10px 14px;
                outline: none;
                border: 1px solid #eaeaea;
              }
              &:last-child{
                margin-right: 0;
              }
            }
          }
          .textarea{
            textarea{
              display: block;
              color: #ccc;
              width: 100%;
              height: 100px;
              max-height: 150px;
              padding: 10px 14px;
              line-height: 1.5;
              outline: none;
              border-color: #efefef;
              &:focus{
                color: #000;
              }
            }
          }
          .button{
            margin-top: 15px;
            button{
              float: right;
              border-radius: 2px;
              background: #19B5FE;
              color: #fff;
              padding: 14px 0;
              border: 0;
              font-size: 16px;
              font-weight: bold;
              width: 120px;
              line-height: 1;
              height: auto;
              letter-spacing: .1em;
              outline: none;
              cursor: pointer;
              &:hover{
                background: #1c1f21;
              }
            }
          }
        }
        .hover{
          &::after{
            width: 70px;
          }
        }
      }
    }
    .message-right{
      width: 360px;
      height: 496px;
      padding: 35px 30px;
      border: 1px solid #e7eaf1;
      border-radius: 3px;
      animation: fadeInUp 1s;
      box-shadow: 0 1px 3px rgba(0, 37, 55, 0.06);
      h2{
        position: relative;
        font-size: 18px;
        color: #282828;
        font-weight: 600;
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
          min-width: 100px;
          max-width: 100px;
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
      ul{
        padding: 0;
        li{
          cursor: pointer;
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

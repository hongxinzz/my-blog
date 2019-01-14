<template>
    <div class="post-article">
        <div class="post-article-header">
          <h1>WRITE</h1>
        </div>
    <div class="content-wrap">
      <div class="write-article">
        <div class="from-group">
          <input type="text" placeholder="请输入文章标题" v-model="title">
        </div>
        <div class="from-group">
          <input type="text" placeholder="请输入文章详情" v-model="introduction">
        </div>
        <div class="from-group">
          <input type="text" placeholder="请添加文章封面" v-model="cover">
        </div>
        <div class="from-group tags-list">
          <span v-if="!showTags&&tagsList.length === 0" @click="showAddTags()">点击我添加标签</span>
          <span v-else-if="tagsList.length > 0" v-for="(tags,index) in tagsList" class="tags" @click="deleteTags(index)">{{tags}}</span>
          <div class="add-tags" v-show="showTags">
            <input type="text" placeholder="输入标签名字" v-model="tagsName">
            <button @click="addTagList()">添加</button>
            <button @click="showAddTags()">取消</button>
          </div>
        </div>
        <div class="post">
          <button @click="postNewArticle()">发布文章</button>
        </div>
      </div>
      <div class="show-article">
        <div class="from-group">
          <textarea v-model="content"></textarea>
        </div>
        <div class="markdown" v-highlight v-html="markedToHtml()"></div>
      </div>
    </div>
    </div>
</template>

<script>
  import { Message } from 'element-ui';
  import marked from 'marked'
  export default {
    name: 'blog-post-article',
    data(){
      return{
        showTags:false,
        tagsList:[],
        title:'',
        introduction:'',
        tagsName:'',
        content:'',
        cover:''
      }
    },
    methods:{
      showAddTags(){
        this.showTags = !this.showTags
      },
      addTagList(){
        if(this.tagsName === ""){
          this.Message.error('标签不能为空');
          return false
        }else if(this.tagsList.length >= 3){
          this.Message.error('最多为3个标签');
          return false
        }
        this.tagsList.push(this.tagsName);
        this.tagsName = '';
      },
      deleteTags(index){
        this.tagsList.splice(index,1)
      },
      markedToHtml(){
       return  marked(this.content)
      },
      postNewArticle(){
        if(this.title === ""){
          Message.error('标题不能为空');
          return false
        }else if(this.introduction === ""){
          Message.error('说明不能为空');
          return false
        }else if(this.cover === ""){
          Message.error('文章封面不能为空');
          return false
        }else if(this.tags === ""){
          Message.error('tags不能为空');
          return false
        }else if(this.content === ""){
          Message.error('文章内容不能为空');
          return false
        }
        this.axios.post('/api/post_article', {
          title: this.title,
          introduction: this.introduction,
          cover:this.cover,
          tags:this.tagsList,
          content:this.content
        }).then(function (data) {
          console.log(data)
        })
      }
    }
  }
</script>

<style  lang="scss">
  .post-article {
    .post-article-header {
      padding: 20px;
      text-align: center;
      background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
      h1 {
        font-size: 36px;
        color: #fff;
      }
    }
    .content-wrap{
      /*display: flex;*/
    }
    .write-article{
      /*flex: 1;*/
      padding: 10px;
      margin-bottom: 30px;
      background: #fff;
      box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);
      .from-group {
        position: relative;
        border-bottom: 2px solid #e5e7ec;
        input {
          width: 100%;
          border: 0;
          font-size: 18px;
          height: auto;
          padding: 10px 0;
          margin-bottom: 4px;
          outline: none;
          text-align: center;
        }
        span{
          display: inline-block;
          font-size: 14px;
          line-height: 1;
          padding: 10px 20px;
          margin: 10px 10px 0 0;
          border: 1px solid #DDD;
          border-radius: 4px;
          cursor: pointer;
          &:hover{
            border-color: #000;
          }
        }
        .tags{
          position: relative;
          transition: all .4s linear;
          &::after{
            opacity: 0;
            position: absolute;
            content: '删除';
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #fff;
            background: #000;
            text-align: center;
            transition: all .4s linear;
            line-height: 2.4 ;
          }
          &:hover{
            &::after{
              opacity: 1;
            }
          }
        }
        .add-tags{
          margin-bottom: 10px;
          text-align: center;
          button{
            display: inline-block;
            font-size: 14px;
            line-height: 1;
            padding: 4px 6px;
            border: 1px solid #DDD;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            &:hover{
              border-color: #000;
            }
          }

        }
      }
      .tags-list{
        margin-bottom: 15px;
        padding: 10px 0;
        text-align: center;
      }
      .post{
        text-align: center;
        button{
          display: inline-block;
          font-size: 14px;
          line-height: 1;
          padding: 10px 20px;
          border: 1px solid #DDD;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          &:hover{
            border-color: #000;
          }
        }
      }
    }
    .show-article{
      display: flex;
      .from-group,.markdown{
        flex: 1;
        padding: 10px 20px 41px !important;
        height:calc(100vh - 80px);
      }
      .from-group{
        background-color: #f5f5f5;
        textarea{
          width: 100%;
          height: 300px;
          resize:none;
          outline: none;
          line-height: 1.67;
          font-weight: 400;
          transition: all .4s linear;
          font-size: 18px;
          background-color: #f5f5f5;
          border: none;
        }
      }

      .markdown{
        width: 860px;
        box-sizing: border-box;
        padding: 0 0 32px;
        margin: 0 auto;
        * {
          font-size: 14px;
        }
        p{
          font-size: 14px  ;
          line-height: 1.8  ;
          text-align: justify  ;
        }
        .hljs{
          padding: 1em;
          margin: .5em 0;
          overflow: auto;
          border-radius: 0.3em;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          font-size: 14px;
          line-height: 1.5;
        }
        h2{
          font-size: 24px;
          line-height: 32px;
        }
        h3{
          font-size: 20px;
          line-height: 28px;
        }
        ul{
          margin: 0 0 24px  ;
          padding: 0  ;
          li{
            list-style-type: disc  ;
            margin: 8px 0 0 32px  ;
            font-size: 16px;
          }
        }
        code{
          border-radius: 2px  ;
          padding: 2px 4px;
        }
        p{
          code{
            color: #c7254e  ;
            background-color: #f9f2f4  ;
          }
        }
        blockquote{
          display: block  ;
          padding: 16px  ;
          margin: 0 0 24px  ;
          border-left: 8px solid #dddfe4  ;
          background: #eef0f4  ;
          overflow: auto  ;
          p{
            font-size: 14px;
            line-height: 22px;
            color: #999;
            font-weight: 400;
            margin-bottom: 0;
          }
          &::before,&::after{
            content: '';
          }
        }
      }
    }
  }
</style>

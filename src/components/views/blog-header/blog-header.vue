<!--suppress ALL -->
<template>
  <div  :class="searchBarFixed  ? 'header header-fix' :'header'" id="header">
    <div class="logo"></div>
    <nav class="r-nav">
      <ul>
        <li><router-link to="/"> <i class="iconfont blog-shouye"></i>HOME</router-link></li>
        <li><router-link :to="{name:'tags',params: {type:'html'}}"> <i class="iconfont blog-biaoqian"></i>TAGS</router-link></li>
        <li><router-link to="/message"><i class="iconfont blog-liuyanban"></i> Message</router-link></li>
      </ul>
    </nav>
    <div class="claerfix"></div>
    <div class="gotop" v-show="searchBarFixed" @click="goToTop()">{{goTopNum}}%</div>
  </div>
</template>

<script>
export default {
  name: 'blogHeader',
  data(){
    return{
      searchBarFixed:false,
      nowScroll:0,
      goTopNum:'',
      isScrollNum:0
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let dHeight = document.documentElement.scrollHeight
      let clientH = window.innerHeight || document.documentElement.clientHeight
      this.isScrollNum = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.isScrollNum > 0) {
        let validH = dHeight - clientH
        this.goTopNum =  Math.floor(this.isScrollNum / validH * 100)
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
    goToTop(){
      let timer = setInterval(()=>{
        this.isScrollNum -= this.isScrollNum / 10
        document.documentElement.scrollTop = this.isScrollNum;
        if(this.isScrollNum <=15){
          document.documentElement.scrollTop = 0
          clearInterval(timer);
        }
      },10)
      // document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss">
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 26px;*/
    padding: 16px 0;
    background-color: transparent;
    transition: all 1s;
    z-index: 1000;
    .r-nav{
      float: right;
      margin-right: 2%;
      li{
        float: left;
        height: 26px;
        line-height: 26px;
        margin-right: 18px;
        list-style: none;
        a{
          display: inline-block;
          font-size: 14px;
          letter-spacing: 1px;
          color: #fff;
          padding: 0 12px;
          opacity: .7;
          i{
            margin-right: 5px;
          }
          &:hover{
            opacity: 1;
          }
        }
      }
    }
    .claerfix{
      clear: both;
    }
    .gotop{
      position: fixed;
      right: 30px;
      bottom: 130px;
      width: 56px;
      height: 24px;
      background: #222;
      color: #fff;
      line-height: 24px;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      z-index: 10000;
    }
  }
  .header-fix{
    background: #fff;
    border: 1px solid #e7eaf1;
    .r-nav{
      li{
        a{
          color: rgb(102, 102, 102);
        }
      }
    }
  }
</style>

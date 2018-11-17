<template>
    <div class="footer">
      <div class="footer-content">
        <div class="footer-link">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link :to="{name:'tags',params: {type:'html'}}">标签页</router-link></li>
        </div>
        <p>Copyright © 2018 freddyhx All Rights Reserved | 闽ICP备18026258号-1</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'blog-footer'
  }
</script>

<style scoped lang="scss">
    .footer{
      background: #1c1f21;
      border-top: 1px solid #e2e4e6;
      font-size: 12px;
      color: #787d82;
      padding: 27px 0;
      min-width: 620px;
      margin-top: 60px;
      .footer-content{
        width: 1152px;
        margin: 0 auto;
        .footer-link{
          overflow: hidden;
          clear: both;
          margin-bottom: 4px;
          line-height: 1.8;
          li{
            margin-right: 30px;
            text-align: center;
            float: left;
            a{
              color:#b8bdc3;
            }
          }
        }
      }
    }
</style>

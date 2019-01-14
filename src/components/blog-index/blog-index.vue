<template>
    <div class="blog-wrap">
      <!--大图部分-->
      <div class="blog-banner">
        <h2>卓鸿鑫,前端爱好者</h2>
        <h3>Code Games Chicken</h3>
      </div>
      <!--中间主体-->
      <blogContent />
      <!--底部-->
      <blogFooter />
    </div>
</template>

<script>
import blogContent from '../blog-content/blog-content.vue'
import blogFooter from '../blog-footer/blog-footer.vue'
export default {
  name: 'blog-index',
  components: {blogContent, blogFooter}
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  .blog-wrap{
    .blog-banner{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height:100vh;
      color: #fff;
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544783876718&di=7b3ab3f35fa847539af70b31d6436b85&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013ae556ebae476ac7257d2024e82c.png%402o.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      h2{
        font-size: 42px;
        font-family: Arial,sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 52px;
        animation: 2s fadeInUp;
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
      }
      h3{
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 10px;
        animation: 3s fadeInUp;
        margin-top: 8px;
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

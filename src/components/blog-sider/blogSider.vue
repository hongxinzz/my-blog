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
              </section>
            <section class="tags-card">
              <a href="" class="tag">JavaScript</a>
              <a href="" class="tag">React</a>
              <a href="" class="tag">Vue</a>
              <a href="" class="tag">Node</a>
            </section>
          </div>
    </div>
</template>

<script>
export default {
  name: 'blogSider'
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
        margin-right: 2px;
        margin-bottom: 8px;
        &:last-child{
          margin-bottom: 0;
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

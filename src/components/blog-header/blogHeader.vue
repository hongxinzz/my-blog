<template>
  <div class="header">
    <div class="logo"></div>
    <nav class="r-nav">
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/tags">TAGS</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'blogHeader'
}
</script>

<style lang="scss">
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 26px;
    padding: 16px 0;
    background-color: transparent;
    transition: all .6s;
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
          &:hover{
            opacity: 1;
          }
        }
      }
    }
  }
</style>

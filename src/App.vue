<template>
  <div id="app" class="app">
    <!--header -->
    <blogHeader />
    <!--路由展示-->
    <transition name="left">
      <router-view class="app-view"></router-view>
    </transition>
  </div>
</template>

<script>import blogHeader from './components/blog-header/blogHeader'
export default {
  name: 'App',
  components: {blogHeader}
}
</script>

<style>
  .app,html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .app-view{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position:absolute;
  }
  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-to{
    transform: translateX(0);
  }
  .left-enter-active{
    transition: 0.5s;
  }
  .left-leave{
    transform: translateX(0);
  }
  .left-leave-to{
    transform: translateX(-100%);
  }
  .left-leave-active{
    transition: 0.5s;
  }
</style>

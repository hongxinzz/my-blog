<template>
    <div class="music-wrap">
        <div class="music">
            <MusicTab></MusicTab>
           <div class="music-content">
               <router-view></router-view>
           </div>
        </div>
    </div>
</template>

<script>
    import MusicTab from './blog-music-tab/blog-music-tab.vue'
    export default {
        name: "blog-music",
        components: {MusicTab},
    }
</script>

<style scoped lang="scss">
    .music-wrap{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        background: linear-gradient(to top, #bdc3c7, #2c3e50);
        .music{
            position: relative;
            width: 1460px;
            margin:  0 auto;
            display: flex;
            background: #fff;
            .music-tab{
            border-right: 2px solid #f2f2f2;
            }
            .music-content{
                flex: 1;
                overflow: hidden;
                max-width: 1200px;
                height: 780px;
            }
        }
    }

</style>
<template>
    <div class="music-tab">
        <div class="local">
            <h2>Local</h2>
            <router-link tag="div" class="tab-item" to="/recommend">
                <span class="tab-link">推荐</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/singer">
                <span class="tab-link">歌手</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/rank">
                <span class="tab-link">排行</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/search">
                <span class="tab-link">搜索</span>
            </router-link>
        </div>
        <div class="list">
            <h2>List</h2>
            <router-link tag="div" class="tab-item" to="/myFavorite">
                <span class="tab-link">我喜欢的</span>
            </router-link>
            <router-link tag="div" class="tab-item" to="/latePlay">
                <span class="tab-link">最近播放</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogMusicTab",
    }
</script>

<style scoped lang="scss">
    .music-tab {
        width: 260px;
        box-sizing: border-box;
        padding: 0 5px 165px;
        display: flex;
        flex-direction: column;
        background: #fff;
        h2 {
            font-size: 24px;
            color: #1b1b1b;
            font-weight: 200;
            margin-bottom: 24px;
            padding-left: 26px;
        }
        .local {
            padding: 40px 0;
        }
        .tab-item {
            padding-left: 26px;
            padding-top: 10px;
            padding-bottom: 10px;
            .tab-link {
                font-weight: 100;
            }
        }
    }

</style>
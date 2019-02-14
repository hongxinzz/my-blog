<template>
    <div class="admin-home">
        <div class="slider">
            <AdminSlider />
        </div>
        <div class="child-router">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import  AdminSlider from '../admin-slider/admin-slider.vue'
    export default {
        name: "admin-home",
        components:{AdminSlider}
    }
</script>

<style scoped lang="scss">
.admin-home{
    display: flex;
    .slider{
        width: 260px;
        z-index: 99999;
    }
    .child-router{
        flex: 1;
        padding: 20px;
    }
}
</style>
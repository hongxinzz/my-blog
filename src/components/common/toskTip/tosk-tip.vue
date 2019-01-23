<template>
    <transition name="drop">
        <div class="top-tip" v-show="showFlag" @click.stop="hide">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "tosk-tip",
        props: {
            delay: {
                type: Number,
                default: 2500
            }
        },
        data() {
            return {
                showFlag: false
            }
        },
        methods: {
            show() {
                this.showFlag = true
                this.timer = setTimeout(() => {
                    this.hide()
                }, this.delay)
            },
            hide() {
                this.showFlag = false
                clearTimeout(this.timer)
            }
        }
    }
</script>

<style scoped lang="scss">
    .top-tip{
        position: fixed;
        top: 100px;
        left: 50%;
        width: 400px;
        margin-left: -200px;
        z-index: 500;
        padding: 8px 16px;
        background-color: #f4f4f5;
        border-radius: 4px;
        color: #909399;
        &.drop-enter-active, &.drop-leave-active{
            transition: all 0.5s
        }
        &.drop-enter, &.drop-leave-to{
            transform: translate3d(0, -100px, 0)
        }
        span{
            color: #909399;
            font-size: 14px;
            line-height: 18px;
        }
    }
</style>
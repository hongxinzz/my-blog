<template>
    <div class="edit-article-wrap">
       <div class="edit-modal" :style="mainStyles">
           <div class="edit-header">
               <div class="title">{{this.title}}</div>
           </div>
           <div class="edit-content">
             <slot></slot>
           </div>
           <div class="edit-footer">
               <button @click="close()">{{this.cancelText}}</button>
               <button class="save" @click="modalOk()">{{this.okText}}</button>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "editTosk",
        props: {
            width:{
                type:[Number,String],//类型检测
                default:520 //父组件没传width时的默认值
            },
            title:{
                type:[String],
                default: 'Modal'
            },
            cancelText:{
                type:[String],
                default:'cancel'
            },
            okText:{
                type:[String],
                default:'ok'
            }
        },
        data(){
            return{
                // showTosk:false
            }
        },
        computed:{
            //计算属性来响应width属性，实时绑定到相应DOM元素的style上
            mainStyles() {
                let style = {};
                style.width = `${parseInt(this.width)}px`;
                return style;
            }
        },
        methods:{
            close() {
                this.$emit('cancel');
            },
            modalOk(){
                this.$emit('modalOk')
            }
        }
    }
</script>

<style scoped lang="scss">
.edit-article-wrap{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999999;
    .edit-modal{
        background: #fff;
        border-radius: 4px;
        .edit-header{
            padding: 16px 24px;
            border-radius: 4px 4px 0 0;
            background: #fff;
            color: rgba(0,0,0,.65);
            border-bottom: 1px solid #e8e8e8;
            .title{
                margin: 0;
                font-size: 16px;
                line-height: 22px;
                font-weight: 500;
                color: rgba(0,0,0,.85);
            }
        }
        .edit-content{
            padding: 24px;
            font-size: 14px;
            line-height: 1.5;
            word-wrap: break-word;
        }
        .edit-footer{
            border-top: 1px solid #e8e8e8;
            padding: 10px 16px;
            text-align: right;
            border-radius: 0 0 4px 4px;
            button{
                line-height: 1.499;
                display: inline-block;
                font-weight: 400;
                text-align: center;
                touch-action: manipulation;
                cursor: pointer;
                background-image: none;
                border: 1px solid #d9d9d9;
                white-space: nowrap;
                padding: 0 15px;
                font-size: 14px;
                border-radius: 4px;
                height: 32px;
            }
            button.save{
                margin-left: 8px;
                color: #fff;
                background-color: #1890ff;
                border-color: #1890ff;
            }
        }
    }
}
</style>
<template>
    <div class="admin-slider">
        <div class="user-card">
            <img src="http://t.cn/EUdyFtA" alt="" class="user-pic">
            <p class="user-name">欢迎回来<br>测试啊</p>
        </div>
        <nav class="nav">
            <ul>
                <li class="nav-item" @click="changeCollapse('collapse1')">
                    <div :class="[collapse.collapse1 ? 'menu-submenu collapse' :'menu-submenu']" >
                        <p>
                            <i></i>控制台
                        </p>
                        <ul>
                            <li @click.stop="goChildPath('/admin-home')"><i></i>概览</li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item" @click="changeCollapse('collapse2')">
                    <div :class="[collapse.collapse2 ? 'menu-submenu collapse' :'menu-submenu']">
                        <p>
                            <i></i>撰写
                        </p>
                        <ul>
                            <li  @click.stop="goChildPath('/admin-home/article-edit')">管理</li>
                            <li @click.stop="goChildPath('/admin-home/article-write')">撰写</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "admin-slider",
        data(){
            return{
                articleId:'',
                collapse:{
                    collapse1:true,
                    collapse2:true,
                    collapse3:false
                }
            }
        },
        methods:{
            deleteArticle(){
                this.axios.post('/api/delete_article', {
                   id:this.articleId
                }).then(function (data) {
                    console.log(data)
                })
            },
            changeCollapse(bool){
                // console.log(e)
                // e.stopPropagation();
                this.collapse[bool]  = !this.collapse[bool];
            },
            goChildPath(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped lang="scss">
.admin-slider{
    width: 260px;
    height: 100vh;
    background: #001529;
    z-index: 99999999;
    .user-card{
        height: 142px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #001529;
        img{
            display: inline-block;
            width: 88px;
            height: 88px;
            margin-right: 26px;
            border-radius: 50%;
        }
        p{
            font-size: 18px;
            text-align: center;
            color: #fff;
        }
    }
    .nav{
        background: #001529;
        .nav-item{
            padding: 0  15px;
            cursor: pointer;
            .menu-submenu{
                p{
                    position: relative;
                    font-size:18px ;
                    height: 52px;
                    line-height: 52px;
                    color: #fff;
                    i{
                        margin-right: 15px;
                    }
                    &:after{
                        position: absolute;
                        right: 15px;
                        top:13px;
                        content: '';
                        width:0;
                        height:0;
                        border:6px solid #fff;
                        transform: rotate(90deg);
                        border-color: transparent transparent #fff transparent;
                    }
                }
                ul{
                    height: 0;
                    overflow: hidden;
                    li{
                        height: 50px;
                        padding-left: 30px;
                        line-height: 50px;
                        transition: all .3s linear;
                        cursor: pointer;
                        color: rgba(255,255,255,.6);
                        i{
                            margin-right: 15px;
                        }
                        &:hover{
                            color: rgba(255,255,255,1);
                        }
                    }
                }
            }
            .collapse{
                ul{
                    height: auto;
                    z-index: 99;
                }
                p{
                    &:after{
                        margin-top: -4px;
                        transform: rotate(0deg)
                    }
                }
            }
        }
    }
}
</style>
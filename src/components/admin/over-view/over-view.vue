<template>
    <div class="wrap">
       <div class="overview-left">

           <div class="info-card">
                <h1>网站统计</h1>
               <div class="info-wrap">
                   <div class="info">
                       <p>文章<span>36</span></p>
                       <p>留言<span>10</span></p>
                       <p>分类<span>5</span></p>
                       <p>访问<span>1</span></p>
                       <p>待审核评论<span>2</span></p>
                       <p>主题<span>Flex</span></p>
                   </div>
                   <div class="version">
                   <p>FreddyZhuo</p>
                   <p>由Vue+Node 大力驱动</p>
                    <p>版本:v1.0</p>
                   </div>
               </div>
           </div>

           <div class="card-wrap">

               <div class="article-card">
                    <h2>最近文章</h2>
                   <div class="item">
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>测试测试测试测试测试测试测试测试</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                   </div>
               </div>

               <div class="message-card">
                    <h2>最新留言</h2>
                   <div class="item">
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>测试测试测试测试测试测试测试测试</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                       <p><span>2018.1.1</span>123</p>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "overview"
    }
</script>

<style scoped lang="scss">
    $bg:#fff;
    $color:#1467cc;
.wrap{
    /*width: 100%;*/
    height: calc(100% - 60px);
    padding: 30px;
    background: #f0f2f5;
    .overview-left{
        display: flex;
        flex-direction: column;
        .info-card{
            width: 614px;
            height: 242px;
            padding: 30px;
            background: $bg;
            h1{
                font-size: 30px;
                color: $color;
            }
            .info-wrap{
                display: flex;
                margin-top:30px;
                .info{
                    width: 353px;
                    display: flex;
                    flex-wrap: wrap;
                    border-right: 1px solid #e0e0e0;
                    p{
                        width: calc(353px / 2);
                        margin-bottom: 30px;
                        font-size: 18px;
                        color: #545454;
                        span{
                            display: inline-block;
                            margin-left: 15px;
                            padding: 4px 10px;
                            font-size: 16px;
                            color: #fff;
                            border-radius: 8px;
                            background:#9e9e9e ;
                        }
                        &:nth-child(5),&:nth-child(6){
                            margin-bottom: 0;
                        }
                    }
                }
                .version{
                    padding-left: 35px;
                    p{
                        font-size: 18px;
                        color:#5e5e5e;
                        margin-bottom: 30px;
                    }
                }
            }
        }
        .card-wrap{
            display: flex;
            margin-top: 15px;
            .article-card,.message-card{
                width: 260px;
                /*height: 360px;*/
                padding: 30px;
                background: $bg;
                h2{
                    color:$color;
                    font-size: 18px;
                    margin-bottom: 30px;
                }
                .item{
                    p{
                        font-size: 14px;
                        color: #616161;
                        margin-bottom: 15px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        span{
                            margin-right: 30px;
                        }
                    }
                }
            }
            .message-card{
                margin-left: 30px;
            }
        }
    }
}
</style>
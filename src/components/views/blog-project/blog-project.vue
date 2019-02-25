<template>
    <div class="project-wrap">
       <div class="project">
           <div class="project-item">
               <img src="http://www.sumitpaul.com/wp-content/uploads/2017/12/hh-thumb.jpg" alt="">
               <p class="project-name">demo</p>
               <div class="project-des">
                        demo
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "blog-project"
    }
</script>

<style scoped lang="scss">
.project-wrap{
    width: 100%;
    min-height: 100vh;
    /*margin-top: 58px;*/
    background: #000;
    .project{
        display: flex;
        flex-wrap: wrap;
        width:1000px;
        margin: 70px auto;
        .project-item{
            position: relative;
            width:465px;
            height: 289px;
            margin-right:20px;
            margin-bottom: 30px;
            cursor: pointer;
            img{
                display: inline-block;
                width: 100%;
                height: 100%;
                transition: all .3s linear;
            }
            .project-name{
                margin-top: 10px;
                font-size: 18px;
                color: #999;
            }
            .project-des{
                box-sizing: border-box;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                line-height: 1.6;
                font-size: 20px;
                color: #fff;
                padding: 20px;
                transition: all .1s linear;
                background: #666;
                opacity: 0;
            }
            &:hover{
                img{
                    transform: rotateZ(7deg);
                }
                .project-des{
                    opacity: .9;
                }
                .project-name{
                    color: #fff;
                }
            }
        }
    }
}
</style>
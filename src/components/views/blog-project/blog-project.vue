<template>
    <div class="project-wrap">
       <div class="project" v-if="projectList">
           <div class="project-item" v-for="(item,index)  in  projectList">
               <img :src="item.imgUrl" alt="">
               <p class="project-name">{{item.des}}</p>
               <div class="project-des"  @click="openNewUrl(index)">
                        {{item.title}}
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "blog-project",
        data(){
            return{
                projectList:[]
            }
        },
        created(){
            this.getProjectList()
        },
        methods:{
            getProjectList(){
                this.axios.get('/api/get_blogs_project').then(data=>{
                   if(data.data){
                       this.projectList = data.data;
                       console.log(this.projectList)
                   }
                })
            },
            openNewUrl(i){
                console.log(1)
               window.open(this.projectList[i].openUrl,'_blank');
            }
        }
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
            height: 314px;
            margin-right:20px;
            margin-bottom: 30px;
            cursor: pointer;
            img{
                display: inline-block;
                width: 100%;
                height:289px;
                transition: all .3s linear;
            }
            .project-name{
                position: absolute;
                left: 0;
                bottom: 0;
                margin-top: 10px;
                font-size: 18px;
                color: #999;
            }
            .project-des{
                box-sizing: border-box;
                position: absolute;
                top: 0;
                left: 0;
                height: 289px;
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
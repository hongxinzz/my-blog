<template>
    <div class="project-wrap">
        <ul class="project-list" v-if="projectList && projectList.length > 0">
           <div class="button-wrap">
               <button class="add-project" @click="handelProject('save')">添加项目</button>
           </div>
            <li class="project-head">
                <p>文章id</p>
                <p>Demo名称</p>
                <p>内容</p>
                <p>背景</p>
                <p>链接</p>
                <p>操作</p>
            </li>
            <li v-for="(item,index) in projectList" :key="index">
                <p>{{item._id}}</p>
                <p>{{item.title}}</p>
                <p>{{item.des}}</p>
                <p>{{item.imgUrl}}</p>
                <p>{{item.openUrl}}</p>
                <p>
                    <button class="edit" @click="showEditModal(index,'edit')">编辑</button>
                    <button class="delete " @click="deleteProject(index)">删除</button>
                </p>
            </li>
        </ul>
        <div class="no-data" v-if="projectList && projectList.length <= 0">
            <p>还没有任何数据，快去添加吧</p>
            <button class="add-project" @click="handelProject('save')">添加项目</button>
        </div>
        <EditModal
                v-show="showModal"
                class="editModal"
                :title="title"
                cancel-text="关闭"
                ok-text="保存"
                width="600"
                @cancel="cancel"
                @modalOk="saveProject(type)"
        >
            <div>
                <label>标题:</label>
                <input type="text" v-model="projectObj.title">
            </div>
            <div>
                <label>描述:</label>
                <input type="text" v-model="projectObj.des">
            </div>
            <div>
                <label>封面:</label>
                <input type="text" v-model="projectObj.imgUrl">
            </div>
            <div>
                <label>链接:</label>
                <input type="text" v-model="projectObj.openUrl">
            </div>
        </EditModal>
    </div>
</template>

<script>
    import EditModal from '../../common/editTosk/editTosk.vue'
    export default {
        name: "admin-project",
        components:{
            EditModal
        },
        data() {
            return {
                projectList: [],
                page: 1,
                pageLimit: 999,
                showModal:false,
                projectObj:{},
                title:'',
                type:''
            }
        },
        created: function () {
            this.getAllArticleList()
        },
        methods: {
            addProject(){
                this.title = '添加项目';
                this.showModal = true;
            },
            getAllArticleList() {
                this.axios.get('/api/get_blogs_project', {
                    params: {
                        page: this.page,
                        pageLimit: this.pageLimit
                    }
                }).then(data => {
                    this.projectList = data.data;
                    console.log(this.projectList)
                })
            },
            deleteArticle(index){
                let that = this;
                this.axios.post('/api/delete_article', {
                    id:this.projectList[index]._id
                }).then(function (data) {
                    console.log(data);
                    that.getAllArticleList();
                })
            },
            showEditModal(i,type){
                this.type = type;
                this.showModal = true;
                this.title = '编辑项目';
                this.projectObj = this.projectList[i];
            },
            handelProject(type){
                this.showModal = true;
                this.type = type;
            },
            saveProject(){
                let that = this;
                if(this.type === 'edit'){

                }else if(this.type === 'save'){
                    this.axios.post('/api/post_project', {
                        title: this.projectObj.title,
                        imgUrl:this.projectObj.imgUrl,
                        des:this.projectObj.des,
                        openUrl:this.projectObj.openUrl
                    }).then(function (data) {
                        console.log(data);
                        if(data.data._id){ //修改成功
                            that.showModal = false;
                            that.getAllArticleList();
                        }
                    })
                }
            },
            cancel() {
                this.tags = [];
                this.showModal = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .project-wrap {
        height: 100%;
        overflow: hidden;
        background: #fff;
        .button-wrap{
            padding-bottom: 15px;
            text-align: right;
        }
        button{
            line-height: 1.499;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            cursor: pointer;
            background-image: none;
            border: 1px solid #d9d9d9;
            white-space: nowrap;
            padding: 0 15px;
            font-size: 14px;
            border-radius: 4px;
            height: 32px;
            position: relative;
            box-shadow: 0 2px 0 rgba(0,0,0,.015);
            color: rgba(0,0,0,.65);
            outline: none;
            background-color: #fff;
            &:hover{
                color: #40a9ff;
                border-color: #40a9ff;
            }
        }
        .no-data{
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: #f0f0f0;
            p{
                margin-bottom: 15px;
            }
        }
        .project-head{
            background: #fafafa;
            color: rgba(0,0,0,.85);
            font-weight: 500;
        }
        .project-head, li {
            display: flex;
            p {
                flex: 1;
                max-width: 267px;
                padding: 16px;
                text-align: center;
                font-size: 14px;
                color:rgba(0, 0, 0, 0.65);
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                span{
                    padding: 10px;
                    margin: 0 5px;
                    color:#59aaff;
                    background: #ebf5ff;
                    border-radius: 6px;
                }
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
                    color: rgba(0,0,0,.65);
                }
                button.edit{
                    border: 1px solid #b7eb8f;
                    background-color: #f6ffed;
                }
                button.delete{
                    border: 1px solid #91d5ff;
                    background-color: #e6f7ff;
                }
            }
        }
        .editModal{
            div{
                display: flex;
                margin: 4px 0;
                label{
                    line-height: 34px;
                    margin-right: 15px;
                }
                input{
                    flex: 1;
                    display: inline-block;
                    width: 100%;
                    height: 32px;
                    font-size: 14px;
                    line-height: 1.5;
                    color: rgba(0,0,0,.65);
                    background-color: #fff;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    box-sizing: border-box;
                    margin: 0;
                    padding: 4px 11px;
                }
                textarea{
                    display: inline-block;
                    box-sizing: border-box;
                    margin: 0;
                    padding: 4px 11px;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    height: 100px;
                    flex: 1;
                    color: rgba(0,0,0,.65);
                    font-size: 14px;
                    line-height: 1.5;
                    background-color: #fff;
                }
                span{
                    margin-right: 8px;
                    padding: 4px 11px;
                    border: 1px solid #d9d9d9;
                    color: rgba(0,0,0,.65);
                    font-size: 14px;
                    line-height: 1.5;
                    background-color: #fff;
                }
            }
            .tags{
                input{
                    margin-right: 20px;
                }
                button{
                    background-color: #fff;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    box-sizing: border-box;
                    margin: 0;
                    padding: 4px 11px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
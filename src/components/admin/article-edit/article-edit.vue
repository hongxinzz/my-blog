<template>
    <div class="article-edit-wrap">
        <ul class="article-list">
            <li class="article-head">
                <p>文章id</p>
                <p>标题</p>
                <p>发布时间</p>
                <p>修改时间</p>
                <p>标签</p>
                <p>操作</p>
            </li>
            <li v-for="(item,index) in articleList" :key="index">
                <p>{{item._id}}</p>
                <p>{{item.title}}</p>
                <p>{{item.time}}</p>
                <p>{{item.lastChangeTime || '无更改'}}</p>
                <p>
                    <span v-for="(tags,index) in item.tags" :key="index">{{tags}}</span>
                </p>
                <p>
                    <button class="edit" @click="showEditModal(index)">编辑</button>
                    <button class="delete " @click="deleteArticle(index)">删除</button>
                </p>
            </li>
        </ul>
        <EditModal
                v-show="showModal"
                class="editModal"
                title="编辑文章"
                cancel-text="关闭"
                ok-text="保存"
                width="600"
                @cancel="cancel"
                @modalOk="saveArticle"
        >
            <div>
                <label>标题:</label>
                <input type="text" v-model="editArticle.title">
            </div>
            <div>
                <label>描述:</label>
                <input type="text" v-model="editArticle.introduction">
            </div>
            <div>
                <label>封面:</label>
                <input type="text" v-model="editArticle.cover">
            </div>
            <div>
                <label>内容:</label>
                <textarea v-model="editArticle.content"></textarea>
            </div>
            <div>
                <label>标签:</label>
                <span v-for="(item,index) in editArticle.tags" :key="index">{{item}}</span>
            </div>
        </EditModal>
    </div>
</template>

<script>
    import EditModal from '../../common/editTosk/editTosk.vue'
    export default {
        name: "article-edit",
        components:{
            EditModal
        },
        data() {
            return {
                articleList: [],
                page: 1,
                pageLimit: 999,
                showModal:false,
                editArticle:{}
            }
        },
        created: function () {
            this.getAllArticleList()
        },
        methods: {
            getAllArticleList() {
                this.axios.get('/api/get_blogs_page', {
                    params: {
                        page: this.page,
                        pageLimit: this.pageLimit
                    }
                }).then(data => {
                    this.articleList = data.data.data
                })
            },
            deleteArticle(index){
                let that = this;
                this.axios.post('/api/delete_article', {
                    id:this.articleList[index]._id
                }).then(function (data) {
                    console.log(data);
                    that.getAllArticleList();
                })
            },
            showEditModal(i){
               this.showModal = true;
               this.editArticle = this.articleList[i];
            },
            saveArticle(){
                let that = this;
                this.axios.post('/api/edit_article', {
                    _id:this.editArticle._id,
                    title: this.editArticle.title,
                    introduction: this.editArticle.introduction,
                    cover:this.editArticle.cover,
                    tags:this.editArticle.tagsList,
                    content:this.editArticle.content
                }).then(function (data) {
                    console.log(data)
                    if(data.data.ok){ //修改成功
                        that.showModal = false;
                        that.getAllArticleList();
                    }
                })
            },
            cancel() {
                this.showModal = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .article-edit-wrap {
        height: 100%;
        overflow: hidden;
        background: #fff;
        .article-head{
            background: #fafafa;
            color: rgba(0,0,0,.85);
            font-weight: 500;
        }
        .article-head, li {
            display: flex;
            p {
                flex: 1;
                padding: 16px;
                text-align: center;
                font-size: 14px;
                color:rgba(0, 0, 0, 0.65);
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
                    height: 413px;
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
        }
    }
</style>
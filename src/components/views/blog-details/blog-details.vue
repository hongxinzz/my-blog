<template>
    <div class="details-wrap">
        <blogHeader/>
        <div class="details-banner" v-if="blogData">
            <div class="details-header">
                <div class="header-tags">
                    <router-link v-for="(tags,index) in blogData.tags" :key="index"
                                 :to="{name:'tags',params: {type:tags}}">{{tags}}
                    </router-link>
                </div>
                <h1>{{blogData.title}}</h1>
                <div class="header-time">
                    <span><i class="iconfont blog-peopel"></i>卓鸿鑫</span>
                    <span><i class="iconfont blog-time"></i>{{blogData.time}}</span>
                </div>
            </div>
        </div>
        <section class="markdown-wrap">
            <article class="markdown" v-highlight v-html="blogData.content"></article>
        </section>
    </div>
</template>

<script>
    import {getBlogDetails} from '../../../api/api.js'
    import blogHeader from '../blog-header/blog-header.vue'

    export default {
        name: 'blog-details',
        components: {blogHeader},
        data() {
            return {
                blog_id: '',
                blogData: ''
            }
        },
        created: function () {
            this.blog_id = this.$route.params.id
            console.log(this.$route.params.id)
            this.getBlogDetails()
        },
        methods: {
            getBlogDetails() {
                getBlogDetails({id: this.blog_id})
                    .then(data => {
                        this.blogData = data[0]
                    })
            }
        }
    }
</script>

<style lang="scss">
    .details-wrap {
        animation: .4s fadeInUp;
    }

    .details-banner {
        position: relative;
        height: 460px;
        padding: 0;
        margin: 0;
        color: #fff;
        overflow: hidden;
        background: linear-gradient(to right, #e55d87, #5fc3e4);
        z-index: 0;
        .details-header {
            width: 720px;
            margin: 0 auto;
            .header-tags {
                margin: 150px 0 16px;
                a {
                    display: inline-block;
                    width: auto;
                    height: 22px;
                    padding: 0 8px;
                    font-size: 14px;
                    line-height: 22px;
                    box-sizing: border-box;
                    border-radius: 2px;
                    background-color: #fafafa;
                    cursor: pointer;
                    margin-right: 8px;
                    color: #fff;
                    background-color: rgba(255, 255, 255, .26);
                    transition: all .3s;
                    box-shadow: none;
                    margin-bottom: 8px;
                    &:hover {
                        background: rgba(255, 255, 255, .5);
                    }
                }
            }
            h1 {
                font-size: 32px;
                line-height: 42px;
                margin-bottom: 12px;
            }
            .header-time {
                margin-top: 32px;
                span {
                    display: inline-block;
                    font-size: 16px;
                    color: #fff;
                    margin-right: 10px;
                    opacity: .8;
                    i {
                        margin-right: 4px;
                    }
                }
            }
        }
    }

    .markdown-wrap {
        position: relative;
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        padding: 40px 0 80px;
        .markdown {
            width: 860px;
            box-sizing: border-box;
            padding: 0 0 32px;
            margin: 0 auto;
            * {
                font-size: 14px;
            }
            p {
                font-size: 14px;
                line-height: 1.8;
                text-align: justify;
            }
            .hljs {
                padding: 1em;
                margin: .5em 0;
                overflow: auto;
                border-radius: 0.3em;
                text-align: left;
                white-space: pre;
                word-spacing: normal;
                word-break: normal;
                word-wrap: normal;
                font-size: 14px;
                line-height: 1.5;
            }
            h1 ~ h6 {
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
            }
            h2 {
                font-size: 24px;
                line-height: 32px;
            }
            h3 {
                font-size: 20px;
                line-height: 28px;
            }
            ul {
                margin: 0 0 24px;
                padding: 0;
                li {
                    list-style-type: disc;
                    margin: 8px 0 0 32px;
                    font-size: 16px;
                }
            }
            code {
                border-radius: 2px;
                padding: 2px 4px;
            }
            p {
                code {
                    color: #c7254e;
                    background-color: #f9f2f4;
                }
            }
            blockquote {
                display: block;
                padding: 16px;
                margin: 0 0 24px;
                border-left: 8px solid #dddfe4;
                background: #eef0f4;
                overflow: auto;
                p {
                    font-size: 14px;
                    line-height: 22px;
                    color: #999;
                    font-weight: 400;
                    margin-bottom: 0;
                }
                &::before, &::after {
                    content: '';
                }
            }
        }
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
</style>

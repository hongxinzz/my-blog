<template>
    <div class="details-wrap" v-if="blogData">
        <blogHeader/>
        <div class="details-banner">
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
                blogData: '',
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
        box-sizing: border-box;
        padding-top: 90px;
        background-color: #fcfcfc;
        .markdown {
            position: relative;
            max-width: 850px;
            margin: 0 auto;
            padding: 20px 60px 40px;
            box-shadow: 1px 1px 8px rgba(0,0,0,.15);
            background-color: #fff;
            border-radius: 2px;
            box-sizing: border-box;
            * {
                font-size: 14px;
            }
           pre{
               position: relative;
               line-height: 1.75;
               code{
                   padding: 18px 15px 12px;
                   overflow-x: auto;
                   overflow-scrolling: touch;
                   margin: 0;
                   word-break: normal;
                   display: block;
                   color: #333;
                   background: #f8f8f8;
               }
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
                color: #333;
                line-height: 1.5;
                margin-top: 35px;
                margin-bottom: 10px;
                padding-bottom: 5px;
            }
            h1{
                font-size: 30px;
                margin-bottom: 5px;
            }
            h2 {
                padding-bottom: 12px;
                font-size: 24px;
                border-bottom: 1px solid #ececec;
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
                background-color: #fff5f5;
                color: #ff502c;
                font-size: .87em;
                padding: .065em .4em;
                word-break: break-word;
                border-radius: 2px;
                overflow-x: auto;
            }
            p {
                line-height: inherit;
                margin-top: 22px;
                margin-bottom: 22px;
                code {
                    color: #c7254e;
                    background-color: #f9f2f4;
                }
            }
            blockquote {
                display: block;
                color: #666;
                padding: 1px 23px;
                margin: 22px 0;
                border-left: 4px solid #cbcbcb;
                background-color: #f8f8f8;
                p {
                    margin: 10px 0;
                }
                &::before, &::after {
                    content: '';
                }
            }
            a{
                color: #0269c8;
                border-bottom: 1px solid #d1e9ff;
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

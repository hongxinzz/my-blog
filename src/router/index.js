import Vue from 'vue'
import Router from 'vue-router'
import BlogAdmin from '../components/views/blog-admin/blog-admin.vue'
import BlogIndex from '../components/views/blog-index/blog-index.vue'
import BlogDetails from '../components/views/blog-details/blog-details.vue'
import BlogTags from '../components/views/blog-tags/blog-tags.vue'
import BlogMessage from '../components/views/blog-message/blog-message.vue'
import BlogPostArticle from '../components/views/blog-post-article/blog-post-article.vue'

/************************博客后台**************************/
import AdminSlider from '../components/admin/admin-slider/admin-slider.vue'
import AdminHome from '../components/admin/admin-home/admin-home.vue'
import OverView from '../components/admin/over-view/over-view.vue'
import ArticleEdit from '../components/admin/article-edit/article-edit.vue'
import TagsEdit from '../components/admin/tags-edit/tags-edit.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'blog-index',
            component: BlogIndex,
            meta: {
                navShow: true, // true显示，false隐藏
            },
        },
        {
            path: '/admin',
            name: 'blog-admin',
            component: BlogAdmin
        },
        {
            path: '/details/:id',
            name: 'details',
            component: BlogDetails,
            meta: {
                navShow: true, // true显示，false隐藏
            },
        },
        {
            path: '/tags/:type',
            name: 'tags',
            component: BlogTags,
            meta: {
                navShow: true, // true显示，false隐藏
            },
        },
        {
            path: '/message',
            name: 'message',
            component: BlogMessage,
            meta: {
                navShow: true, // true显示，false隐藏
            },
        },
        {
            path: '/post-article',
            name: 'post-article',
            component: BlogPostArticle,
            meta: {
                navShow: true, // true显示，false隐藏
            },
        },
        {
            path: '/admin-home',
            name: 'admin-home',
            component: AdminHome,
            meta: {
                navShow: false, // true显示，false隐藏
            },
            children: [
                {
                    path: '',
                    component: OverView,
                    name: 'overview',
                },
                {
                    path: 'article-edit',
                    component: ArticleEdit,
                    name: 'article-edit',
                },
                {
                    path: 'tags-edit',
                    component: TagsEdit,
                    name: 'tags-edit',
                }
            ]
        }
    ],
    /**
     *  每一次点击页面回到顶部
     * @param to
     * @param from
     * @param savedPosition
     * @returns {*}
     */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})

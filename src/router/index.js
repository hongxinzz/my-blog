import Vue from 'vue'
import Router from 'vue-router'
import BlogAdmin from '../components/admin/blog-admin/blog-admin.vue'
import BlogIndex from '../components/views/blog-index/blog-index.vue'
import BlogDetails from '../components/views/blog-details/blog-details.vue'
import BlogTags from '../components/views/blog-tags/blog-tags.vue'
import BlogMessage from '../components/views/blog-message/blog-message.vue'
import BlogProject from '../components/views/blog-project/blog-project.vue'

/************************博客后台**************************/
import AdminProject from '../components/admin/admin-project/admin-project.vue'
import AdminHome from '../components/admin/admin-home/admin-home.vue'
import OverView from '../components/admin/over-view/over-view.vue'
import ArticleEdit from '../components/admin/article-edit/article-edit.vue'
import ArticleWrite from '../components/admin/article-write/article-write.vue'


Vue.use(Router);

const router = new Router({
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
            path: '/project',
            name: 'project',
            component: BlogProject,
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
                    meta: {
                        requiresAuth: true //必须登录
                    }
                },
                {
                    path: 'article-edit',
                    component: ArticleEdit,
                    name: 'article-edit',
                    meta: {
                        requiresAuth: true //必须登录
                    }
                },
                {
                    path: 'article-write',
                    component: ArticleWrite,
                    name: 'article-write',
                    meta: {
                        requiresAuth: true //必须登录
                    }
                },
                {
                    path:'admin-project',
                    component:AdminProject,
                    name:'admin-project',
                    meta: {
                        requiresAuth: true //必须登录
                    }
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

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
    console.log(1, to);
    let token = localStorage.getItem('USER_LOGIN_TOKEN');
    //判断要去的路由有没有requiresAuth
    if (to.meta.requiresAuth) {
        console.log(2);
        if (token) {
            //设置请求头 给后台验证
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            next();
        } else {
            next({
                path: '/admin',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        }
    } else {
        next();//无需token
    }
});


export default router;
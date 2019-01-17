import Vue from 'vue'
import Router from 'vue-router'
import BlogAdmin from '../components/views/blog-admin/blog-admin.vue'
import BlogIndex from '../components/views/blog-index/blog-index.vue'
import bloogDetails from '../components/views/blog-details/blog-details.vue'
import blogTags from '../components/views/blog-tags/blog-tags.vue'
import BlogMessage from '../components/views/blog-message/blog-message.vue'
import BlogPostArticle from '../components/views/blog-post-article/blog-post-article.vue'

/************************博客后台**************************/
import AdminSlider from  '../components/admin/admin-slider/admin-slider.vue'
import AdminHome from  '../components/admin/admin-home/admin-home.vue'
import OverView from '../components/admin/over-view/over-view.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'blog-index',
      component: BlogIndex
    },
    {
      path: '/admin',
      name: 'blog-admin',
      component: BlogAdmin
    },
    {
      path: '/details/:id',
      name: 'details',
      component: bloogDetails
    },
    {
      path: '/tags/:type',
      name: 'tags',
      component: blogTags
    },
    {
      path:'/message',
      name: 'message',
      component:BlogMessage
    },
    {
      path:'/post-article',
      name:'post-article',
      component:BlogPostArticle
    },
    {
      path:'/admin-home',
      name:'admin-home',
      component:AdminHome,
        children: [
            {
                path: '',
                component: OverView,
                name: 'overview',
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

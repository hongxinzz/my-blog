import Vue from 'vue'
import Router from 'vue-router'
import BlogAdmin from '../components/blog-admin/blog-admin.vue'
import BlogIndex from '../components/blog-index/blog-index.vue'
import bloogDetails from '../components/blog-details/blog-details.vue'
import blogTags from '../components/blog-tags/blog-tags.vue'
import BlogMessage from '../components/blog-message/blog-message.vue'
import BlogPostArticle from '../components/blog-post-article/blog-post-article.vue'

Vue.use(Router)

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

import Vue from 'vue'
import Router from 'vue-router'
import BlogAdmin from '../components/blog-admin/blog-admin'
import BlogIndex from '../components/blog-index/blog-index'
import bloogDetails from '../components/blog-details/blog-details'
import blogTags from '../components/blog-tags/blogTags'
import BlogMessage from '../components/blog-message/blog-message'

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

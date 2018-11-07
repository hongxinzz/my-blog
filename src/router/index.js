import Vue from 'vue'
import Router from 'vue-router'
import BlogAdmin from '../components/blog-admin/blog-admin'
import BlogIndex from '../components/blog-index/blog-index'
import bloogDetails from '../components/blog-details/blog-details'

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
    }
  ]
})

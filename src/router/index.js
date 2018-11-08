import Vue from 'vue'
import Router from 'vue-router'
import BlogAdmin from '../components/blog-admin/blog-admin'
import BlogIndex from '../components/blog-index/blog-index'
import bloogDetails from '../components/blog-details/blog-details'
import blogTags from '../components/blog-tags/blogTags'

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
      path: '/tags',
      name: 'blog-tags',
      component: blogTags
    }
  ]
})

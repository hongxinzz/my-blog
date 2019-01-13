
export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'blog-index',
      component: resolve => require(['../components/blog-index/blog-index'], resolve)
    },
    {
      path: '/admin',
      name: 'blog-admin',
      component: resolve => require(['../components/blog-admin/blog-admin'], resolve)
    },
    {
      path: '/details/:id',
      name: 'details',
      component: resolve => require(['../components/blog-details/blog-details'], resolve)
    },
    {
      path: '/tags/:type',
      name: 'tags',
      component: resolve => require(['../components/blog-tags/blogTags'], resolve)
    },
    {
      path:'/message',
      name: 'message',
      component:resolve => require(['../components/blog-message/blog-message'], resolve)
    },
    {
      path:'/post-article',
      name:'post-article',
      component:resolve => require(['../components/blog-post-article/blog-post-article'], resolve)
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

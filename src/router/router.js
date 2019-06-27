import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index/index.vue')
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/list/list.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../pages/detail/index.vue')
    },
    {
      path: '/contact/:sfzh',
      name: 'contact',
      component: () => import('../pages/detail/contact.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about/index.vue')
    },
    {
      path: '/version',
      name: 'version',
      component: () => import('../pages/about/version.vue')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('../pages/about/contactUs.vue')
    }
  ]
})

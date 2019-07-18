import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/layout'
import ErrorPage from '@/views/error-page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/main',
      children: [
        {
          path: 'main',
          component: () => import('@/views/main'),
          name: 'Main'
        }
      ]
    },
    { path: '*', component: ErrorPage }
  ]
})

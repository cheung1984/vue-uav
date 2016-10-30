import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import indexView from '../views/indexView.vue'

export default new Router({
  model: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/index', component: indexView},
    {path: '*', redirect: 'index'}
  ]
})

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/*',
    name: RouteNames.Home,
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router

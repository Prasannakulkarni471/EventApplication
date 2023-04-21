import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/eventspage',
    name: 'eventspage',
    component: () => import('../views/EventsPage.vue')
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/testpage',
    name: 'testpage',
    component: () => import('../views/TestPage.vue')
  },
  {
    path: '/dashtest',
    name: 'dashtest',
    component: () => import('../views/DashTest.vue')
  },
  {
    path: '/eventspage/:id',
    name: 'eventdesc',
    component: () => import('../views/EventDesc.vue')
  },
  {
    path: '/servicespage',
    name: 'servicespage',
    component: () => import('../views/ServicesPage.vue')
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: () => import('../views/UserPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

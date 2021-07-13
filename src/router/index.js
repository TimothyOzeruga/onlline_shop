import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collections',
    name: 'Collections',
    component: () => import('@/views/Collections.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/blog/list.vue'),
   
  },
  {
    path: '/blog/:id',
    name: 'BlogDeteil',
    component: () => import('@/views/blog/detail.vue'),
   
  },
  {
    path: '/collectionCategory/mens',
    name: 'MensCategory',
    component: () => import('@/views/collectionCategory/mens.vue'),
   
  },
  {
    path: '/collectionCategory/women',
    name: 'WomensCategory',
    component: () => import('@/views/collectionCategory/women.vue'),
  },
  {
    path: '/collectionCategory/kids',
    name: 'KidsCategory',
    component: () => import('@/views/collectionCategory/kids.vue'),
  },
]

const router = new VueRouter({
  base:'/',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router

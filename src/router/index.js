import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/New.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  // {
  //   path: '/products',
  //   name: 'Product',
  //   component: Product
  // },
  // {
  //   path: '/car',
  //   name: 'Car',
  //   component: Cars
  // },
  // {
  //   path: '/contacts',
  //   name: 'Contact',
  //   component: Contacts
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

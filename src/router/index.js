import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/New.vue'
import Product from '../views/product/product.vue'
import ProductId from '../views/product/productdetail.vue'
import Cart from '../views/Cart.vue'

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
  {
    path: '/products',
    name: 'Product',
    component: Product
  },
  {
    path: '/products/:id',
    name: 'ProductId',
    component: ProductId
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
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

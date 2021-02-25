import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/New.vue'
import Product from '../views/product/product.vue'
// import ProductDetail from '../views/product/productDetail.vue'
import ProductDetails from '../views/product/ProductDetails.vue'
import Cart from '../views/Cart.vue'
import Contact from '../views/Contact.vue'
import Sign from '../views/Sign.vue'

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
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  //redirect
  // {
  //   path: '/all-products',
  //   redirect: '/products'
  // },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/contacts',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Sign',
    name: 'Sing',
    component: Sign
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

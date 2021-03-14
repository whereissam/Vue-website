import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import News from '../views/New.vue'
// import Product from '../components/products.vue'
// import ProductDetails from '../views/product/ProductDetails.vue'
// import Cart from '../views/Cart.vue'
// import Contact from '../views/Contact.vue'
// import Sign from '../views/Sign.vue'
// import Create from '../views/Create.vue'
// import Vuecanvas from '../components/P5-canvas.vue'

//lazy load to prevent initial loading is too long
const Home = () => import('../views/Home.vue')
const About =() => import('../views/About.vue')
const News = () => import('../views/New.vue')
const Product = () => import( '../components/products.vue')
const ProductDetails = () => import( '../views/product/ProductDetails.vue')
const Cart = () => import( '../views/Cart.vue')
const Contact = () => import( '../views/Contact.vue')
const Sign = () => import( '../views/Sign.vue')
const Create = () => import( '../views/Create.vue')
const Vuecanvas = () => import( '../components/P5-canvas.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    // redirect: '/home',
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
  //   path: '',
  //   redirect: '/home'
  // },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Sign',
    name: 'Sing',
    component: Sign
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  {
    path: '/display',
    // name: 'Display',
    component: Vuecanvas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:'active' //預設router的變化綁定
})

export default router

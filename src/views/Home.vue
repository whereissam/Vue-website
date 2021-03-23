<template>

  <div class="home">
    
    <Carousel msg="home"/>
    <!-- <router-link to='/home/products'> Shop</router-link>
    <router-link to='/home/officechair'>Office chair</router-link> -->
    <Product msg="home"/>

     <!-- 保持不被一直銷毀又創建 -->
    <keep-alive exclude="Sign"> 
      <router-view></router-view>
    </keep-alive>
  </div>
  
  


</template>

<script>

import Carousel from '@/components/carousel.vue'
import Product from '../components/products.vue'

export default { 
  name: 'Home',
  components:{ Carousel,Product}
}
</script>

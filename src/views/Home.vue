<template>

  <div class="home">
    
    <Carousel msg="home"/>
    <Product msg="home"/>
   
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

<template>
  <div class="home">
    <!-- <Navbar msg="home"/> -->
    <Carousel msg="home"/>
  </div>
</template>

<script>

import Carousel from '@/components/carousel.vue'

 
export default { 
  name: 'Home',
  components: {
    Carousel,
  }
}
</script>

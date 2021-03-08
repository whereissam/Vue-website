<template>
<div class="flex flex-col h-screen justify-between">
  <div class="fixed z-20 w-full">
    <Navbar />
  </div>
  <router-view/>

  <Footer />
  
</div>

</template>

<script>
import Navbar from './components/navbar.vue'

import Footer from './components/footer.vue'
import VueCanvas from './components/P5-canvas.vue'


export default {
  name: 'App',
  components:{ Navbar, Footer, VueCanvas}, 
}
</script>
<style>
</style>

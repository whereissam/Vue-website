<template>
<div class="flex flex-col h-screen justify-between">
  <Navbar />
  <router-view/>
  <Footer />
</div>

</template>

<script>
import Navbar from './components/navbar.vue'

import Footer from './components/footer.vue'



export default {
  name: 'App',
  components:{ Navbar, Footer}, 
}
</script>
<style>
</style>

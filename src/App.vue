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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-right: 30px;
}

ul li {
  font-weight: bold;
  color: #2c3e50;
}

ul li.router-link-exact-active {
  color: #42b983;
}
</style>

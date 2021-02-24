<template>
<div class="w-full h-10 bg-yellow-300 m-0 flex justify-between justify-items-center">
  <p class="block">@copyright 2021</p>
  <ul class="flex"> 
    <li class="mr-2">
      <a href="#">
        <img class='w-7 h-7' src="../assets/facebook-square-brands.svg" alt="">
      </a>
    </li>
    <li class="mr-2">
      <a href="#">
        <img class='w-7 h-7' src="../assets/instagram-brands.svg" alt="">
      </a>
    </li>
    <li class="mr-2">
      <a href="#">
        <img class='w-6 h-6' src="../assets/shopee.svg" alt="">
      </a>
    </li>
  </ul>
</div>
  
</template>

<script>

export default {
  name: 'Footer',
  props: {    
    msg: String
  }
}
</script>
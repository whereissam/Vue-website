<template>
<div class="w-full h-10 bg-yellow-300 m-0">
  <p class="block align-middle">@copyright 2021</p>
  <ul> 
    <li>
      <a href="#">
        <i class="fab fa-facebook-square"></i>
      </a>
    </li>
  </ul>
</div>
  
</template>
<script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>
<script>
export default {
  name: 'Footer',
  props: {    
    msg: String
  }
}
</script>
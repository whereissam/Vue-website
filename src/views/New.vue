<template>
  <!-- <div class="news">
    <h1>This is an news page</h1>
  </div> -->
  <div>
        <h1>News</h1>
        <div v-for='newss in news' :key='newss.id' class="new">
          <h2>{{ newss.name}}</h2>
        </div>
    </div>
</template>
 
 <script>
 export default {
   data(){
      return{
          news:[]
      }
  },
  mounted(){ //get data
  fetch('http://localhost:3000/news')
    .then((res) => res.json())
    .then(data => this.news = data)
    .catch(err => console.log(err.message))
  }
 }
 </script>
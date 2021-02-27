<template>
  <!-- 半透明遮罩
1. one main(background) one is front content
2. build front be a component to insert to main
3. click cart pic to insert front component
4. click anyplace to go back to original page

cart sidebar
1. insert shopping data into  -->
    <div  class="backdrop top-0 fixed bg-black bg-opacity-50 w-full h-full" @click="closeModal">
        <div v-if="products" 
            class="modal w-2/4 p-10 my-auto mx-auto bg-white rounded-lg" 
            :class="{ car : theme == 'car'}"
            >
            <!-- use binding and props to custumize and deliever the part of component -->

            <div v-for='product in products' :key='product.id'>
                <h1>{{product.name}}</h1>
                <p>{{product.price}}</p>
                <img class="w-10 h-10" :src="product.img">
                <!-- <h1 class="text-yellow-200">Modal Title</h1>
                <p>modal content</p> -->
            </div>
        </div>
        <div v-else>
            <h1>Still loading</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CartSideBar',
  props: {
    msg: String,
    theme: String
  },
   data(){
      return{
          products:[]
      }
  },
  methods:{
      closeModal(){
          this.$emit('close') //
      }
  },
    mounted(){ //get data
    fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then(data => this.products = data)
        .catch(err => console.log(err.message))
  }

}
</script>
<style>
.backdrop{
    z-index: 12;
}
.modal.car{
    background-color: crison;
    color: aquamarine;
}
</style>
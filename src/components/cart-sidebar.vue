<template>
  <!-- 半透明遮罩
1. one main(background) one is front content
2. build front be a component to insert to main
3. click cart pic to insert front component
4. click anyplace to go back to original page

cart sidebar
1. insert shopping data into  -->
    <div  class="backdrop top-0 fixed bg-black bg-opacity-50 w-full h-full flex justify-end" > 
        <!-- @click="closeModal" -->
        <div class="modal flex flex-wrap sm:w-20 md:w-1/3 lg:w-1/4 h-full p-10 bg-gray-900 rounded-lg" 
            :class="{ car : theme == 'car'}"
            >
            <!-- use binding and props to custumize and deliever the part of component -->
            <div class="w-full" >
                <button class="w-full text-right" @click="closeModal">close</button>
                <!-- https://stackoverflow.com/questions/38562170/vuejs-v-if-directive-for-event -->
                <!-- need to update click and hide -->
                <div v-if="carts">
                    <div class='w-full flex h-24 mt-5 border-t-2 pt-5 border-gray-700 relative' v-for='product in carts' :key='product.id'>
                    <img class="w-20 h-20 " :src="product.img">
                    <button class="detail" @click="deletes(product.id)"></button>
                    <div class="w-full p-2">
                        <h1 class=" mb-3 text-left ml-2">{{product.name}}</h1>
                        <div class="flex ml-2 w-full justify-between">
                            <div class="flex ">
                                <p class="text-sm mr-2">Qty</p>
                                <button @click='inc1(product.id,product.number)' class="text-xs mx-1">◀</button>
                                <input class="w-6 text-sm bg-gray-900 text-center" 
                                        type="text"
                                        v-model.number="value" 
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        @change="quantity"
                                >
                                <button @click='add1(product.id,product.number)' class="text-xs mx-1">▶</button>
                                <router-link to="/cart">Cart</router-link>
                            </div>
                            <p class="text-sm">{{product.number * product.price}}</p>
                        </div>

                        </div>
                    </div>
                    
                </div>
              
                <div v-else>
                    <hr class="my-5">
                    <div class='border-gray-200 w-full text-center flex flex-wrap flex-col h-full justify-between'>
                        <div class="h-1/3 my-5 w-full">
                            <div class='text-center self-start mt-10 mb-5'>X</div>
                            <div>No products in the cart.</div>
                        </div>
                        <div>
                             <p class='border-2 border-gray-500 border-opacity-50 w-full text-center h-14 align-middle m-5 md:h-7 self-end cursor-pointer'>Continue shopping</p>
                        </div>
                       
                    </div>
                </div>
                <div class="flex border-2 h-full">
                    <p>Subtotal: </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import productsVue from './products.vue'
export default {
  name: 'CartSideBar',
  props: {
    msg: String,
    theme: String,
    id: Number
  },
   data(){
      return{
          carts:null,
          value: 1,
          newPrice: ''
      }
  },
  methods:{
      closeModal(){
          this.$emit('close') //
      },
      add1(id,number){
      this.value = this.value +1
    //   console.log(id,number,this.value)
    //   fetch('http://localhost:3000/carts/' + id,{
    //       method: 'PATCH',
    //       body: JSON.stringify({
    //           number : this.value
    //       }),
    //       headers:{ "Content-Type" : 'application/json'}  
    //   })
    //     .then((res) => res.json())
    //     .then(data => this.carts = data)
    //     .catch(err => console.log(err.message))
      },
      inc1(){
      this.value = this.value -1
      },
      deletes(id){
          fetch('http://localhost:3000/carts/' + id,{
              method: 'DELETE'
    })
    //   console.log(id)
    }
  },
    mounted(){ //get data
    fetch('http://localhost:3000/carts')
        .then((res) => res.json())
        .then(data => this.carts = data)
        .catch(err => console.log(err.message))
  }

}
</script>
<style>
.backdrop{
    z-index: 14;
}
.modal.car{
    /* background-color: crison; */
    color:#EEEEEE;
}
.detail::before{
  content: "x";
  color:#EEEEEE;
  position: absolute;
  right: 10px;
    top: 15px
}
</style>
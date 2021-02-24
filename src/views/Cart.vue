<template>
 <div class='w-full h-screen flex flex-nowrap bg-gray-600 bg-opacity-25'>

  <div class='darks bg-gray-600 w-9/12' @click="$router.go(-1)"></div>

  <div class='w-1/4 flex flex-wrap bg-gray-800' >
    <h2 class='text-white w-full text-right mr-5 mt-5 ml-5 h-10 border-b-2 cursor-pointer' @click="$router.go(-1)">close</h2>
    <div class='border-gray-800 w-full text-center'>
      <div class='text-center self-start'>X</div>
      No products in the cart.</div>
    <p class='border-2 border-gray-500 border-opacity-50 w-full text-center h-14 align-middle m-5 md:h-7 self-end cursor-pointer' @click="$router.go(-1)">Continue shopping</p>
  </div>
</div>
  
</template>

<template>
    <div class='card w-1/4 m-auto flex flex-col flex-wrap border-2 justify-center mt-28'>
  <h1 class='flex justify-center mt-5'>Sign in</h1>
  <form action="" class='p-5 mt-5'>
    <label for="user" class='text-xs self-start'>Username or email address*</label><br />
    <input type="text" id='user' class='border-2 w-full mt-1 mb-5'><br />
    <label for="password" class='text-xs'>Password*</label><br />
    <input type="text" id='password' class='border-2 w-full mt-1 mb-5'><br />
    
    <div class='flex justify-between items-center w-full flex-wrap xl:flex-nowrap'>
      <div class='w-2/3'>
        <input type="checkbox" id='remember'>
        <label for="remember" class='text-xs'>Remember me</label>
      </div>
      <div>
         <a href="#" class='text-xs w-full self-end'>Lost your password?</a>
      </div>
     <br />
    </div>
    
    <button class='w-full text-sm border-2 mt-3 mb-3 p-1 singin'>Sign in</button>
    <div class='w-full text-xs text-center'>-------------- or --------------</div>
    <button class='border-2 w-full mt-3 p-1 text-sm'>Create an account</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Sign',
  props: {
    msg: String
  }
}
</script>
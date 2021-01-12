<template>
  <header class="relative flex bg-gray-100 sm:flex sm:justify-between sm:px-4 sm:items-center sm:py-4">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Brett Schneider</h1>
      </div>
      
      <div class="">
        <button @click="isOpen=!isOpen" class="sm:hidden text-grey-500 hover:text-buffGold focus:text-blue focus:outline-none" onClick={openMenu}>
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
    </div>
      
    <div :class="isOpen ? 'block' : 'hidden' " class="px-2 text-left sm:flex" >
      <router-link to="/" class="block px-2 py-1 font-medium text-gray-800 rounded hover:text-gray-300 sm:ml-2">Home</router-link>
      <router-link to="/about" class="block px-2 py-1 mt-1 font-medium text-gray-800 rounded hover:text-gray-300 sm:mt-0 sm:ml-2">Projects</router-link>
      <a href="#" class="block px-2 py-1 mt-1 font-medium text-gray-800 rounded hover:text-gray-300 sm:mt-0 sm:ml-2"> Photography </a>
      <a href="#" class="block px-2 py-1 mt-1 mb-2 font-medium text-gray-800 rounded hover:text-gray-300 sm:mt-0 sm:ml-2"> Contact Me </a>
    </div>  

  </header>
  
<router-view/>

<footer class="py-20 bg-gray-900">
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
  <p>test</p>
</footer>

</template>

<script>
export default {
  name: 'NavBar',
  props: {

  },
  data () {
    return {
        isOpen: false,
    }
  }
}
</script>
<template>
  <Navbar></Navbar>

  <div class="bg-gray-100">

    <!-- START OF HOME -->
    <div class="container mx-auto">
    <div class="items-center mx-3 text-center bg-local bg-center bg-cover rounded shadow-lg sm:mx-auto py-44 bg-home-img">

      <p class="text-4xl font-bold text-white ">Available for Hire</p>
      <p class="mt-3 text-xl text-white">Get to know me!</p>

      <button @click="$router.push('/contact')" class="px-6 py-2 mt-3 font-medium bg-white rounded-lg">CONTACT ME</button>
    </div>
    </div>

    <!-- START OF SCHOOL -->
    <div class="container mx-auto text-center">
      <div class="mx-3 mt-3 text-gray-800 bg-fixed rounded shadow-lg sm:mx-auto py-14 bg-buffGold bg-topo-img ">
        
        <p class="items-center text-2xl font-semibold text-center bg-center sm:text-4xl">Computer Science Major at <br> University of Colorado Boulder</p>
      
      </div>
    </div>


    <!-- BANNERS -->
    <div class="container mx-auto mb-10 text-gray-800">

      <div class="flex flex-col justify-between mt-3 sm:flex-row">
       
       <!-- START OF ABOUT ME -->
        <div class="flex-auto px-4 py-4 mx-3 mb-3 bg-white rounded shadow-lg sm:w-1/3 sm:mx-0 lg:mb-0">
          <div>
            <p class="text-2xl font-bold">About Me</p>
          </div>
            <p class="">
              My name is Brett, I am currently a full time student and plan on graduating in May of 2021. I am a progressive, 
              energetic problem solver with project management, salesforce, and marketing experience on top of my already growing 
              knowledge of the computer science field!
            </p>
          <div>
            
          </div>
          
        </div>


        <!-- START OF SKILLS -->
        <div class="flex-auto px-4 py-4 mx-3 mb-3 bg-white rounded shadow-lg sm:w-1/3 sm:mx-3 lg:mb-0">
           
          <div>
            <p class="mb-2 text-2xl font-bold">Skills</p> 
          </div>

          <div class="flex flex-row flex-wrap gap-3">
            
            <a href="https://www.cprogramming.com/" target="_blank"> 
              <img src="../assets/skills/c.svg" alt="c" width="40" height="40" class=""/> 
            </a> 
            
            <a href="https://www.cplusplus.com" target="_blank"> 
              <img src="../assets/skills/cplusplus.svg" alt="cplusplus" width="40" height="40"/> 
            </a> 

            <a href="https://www.java.com" target="_blank"> 
              <img src="../assets/skills/java.svg" alt="java" width="40" height="40"/> 
            </a> 

            <a href="https://www.python.org" target="_blank"> 
              <img src="../assets/skills/python.svg" alt="python" width="40" height="40"/> 
            </a> 

            <a href="https://www.w3.org/html/" target="_blank"> 
              <img src="../assets/skills/html5.svg" alt="html5" width="40" height="40"/> 
            </a> 

            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
              <img src="../assets/skills/javascript.svg" alt="javascript" width="40" height="40"/> 
            </a> 

            <a href="https://getbootstrap.com" target="_blank"> 
              <img src="../assets/skills/bootstrap.svg" alt="bootstrap" width="40" height="40"/> 
            </a>

            <a href="https://vuejs.org" target="_blank"> 
              <img src="../assets/skills/vue.svg" alt="vue" width="40" height="40"/> 
            </a> 

          </div>
          
        </div>


        <!-- START OF WEBSITE -->
        <div class="flex-auto px-4 py-4 mx-3 mb-3 bg-white rounded shadow-lg sm:w-1/3 sm:mx-0 lg:mb-0">
          
          <div>
            <p class="text-2xl font-bold">This Website</p>  
          </div>

          <div>

            <a href="https://github.com/br-schneider">
              <img src="https://simpleicons.org/icons/github.svg" alt="github" width="40" height="40">
            </a>

            <p>
              I created this website using Vuejs and Tailwind CSS

            </p>


          </div>
        </div>

      </div>
    
    </div>

    
  </div>

  
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}

</script>

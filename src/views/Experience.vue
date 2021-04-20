<template>
  <Navbar></Navbar>

  <div class="px-4 mb-10 sm:px-6 lg:px-8">
    <div class="container mx-auto">
      
      <div class="mt-2 text-center mb-7">
        <h2 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          My Work Experience
        </h2>
        <!-- <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          My recent employment history
        </p> -->
      </div>


      <dl class="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-3 md:gap-y-3 lg:px-7">

        <div class="flex p-5 bg-white rounded-lg shadow-2xl">

          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 text-white rounded-md">
              <a href="https://www.kensingtonanalytics.com" target="_blank"> 
                <img src="../assets/kensington.png" alt="kensington_analytics_logo" width="50" height="50" class=""/> 
              </a> 
            </div>
          </div>

          <div class="ml-4">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              Software Engineer Intern at Kensington Analytics
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Wrote VBA code to automate the sales reporting processes and extracted underlying patterns in time series using regression analysis
              <br><br>Wrote Apex code to automate their commission fee allocations and structures in the local Salesforce environment 
            </dd>
          </div>

        </div>

        <div class="flex p-5 bg-white rounded-lg shadow-2xl">

          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 text-white rounded-md">
              <a href="https://www.aspyr.com" target="_blank"> 
                <img src="../assets/aspyr.png" alt="aspyr_logo" width="50" height="50" class=""/> 
              </a> 
            </div>
          </div>

          <div class="ml-4">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              Quality Assurance Tester at Aspyr Media
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Tested their multitude of titles to ensure functionality and quality of each game 
            </dd>
          </div>

        </div>

        <div class="flex p-5 bg-white rounded-lg shadow-2xl">

          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 text-white rounded-md">  
              <a href="https://www.kensingtonanalytics.com" target="_blank"> 
                <img src="../assets/ascendant.png" alt="aspyr_logo" width="50" height="50" class=""/> 
              </a>
            </div>
          </div>

          <div class="ml-4">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              Internal Sales Intern at Ascendant Capital
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Made 60 plus calls a day to establish relationships with financial advisors and build out the eastern United States territory
            </dd>
          </div>

        </div>

        <div class="flex p-5 bg-white rounded-lg shadow-2xl">
          
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 text-white rounded-md">
              <a href="" target="_blank"> 
                <img src="../assets/laxelements.png" alt="aspyr_logo" width="50" height="50" class=""/> 
              </a> 
            </div>
          </div>

          <div class="ml-4">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              Founding Partner at Lax Elements LLC
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Created LLC for start-up including filing articles of organization, creating an operating agreement and complying with tax and regulatory requirements
              <br><br>Led marketing, social media, and accounting functions along with order and inventory management
            </dd>
          </div>
          
        </div>

      </dl>






      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-10 lg:pb-28 lg:px-7">
        <div class="absolute inset-0">
          <div class=" h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              My Projects
            </h2>
            <!-- <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p> -->
          </div>
          <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="object-cover w-full h-48" src="../assets/dogsilly.png" alt="">
              </div>
              <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <!-- <a href="#" class="hover:underline"> -->
                      Website
                    <!-- </a> -->
                  </p>
                  <a href="https://dogsilly.com" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      Dogsilly
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      This company is a clothing brand that I am currently building a website for.  I am also using Vue.js combined with tailwindCSS to created this website.
                      It is currently being deployed via netlify and is soon to be integrated with stripe.
                    </p>
                  </a>
                </div>

              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="object-cover w-full h-48" src="../assets/snake.png" alt="">
              </div>
              <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <!-- <a href="#" class="hover:underline"> -->
                      Game
                    <!-- </a> -->
                  </p>
                  <a href="https://bschneider99.github.io" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      Accessible Snake Game
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      This is a game I created for a computer accesibility class. It is intended to be used with a wide variety of accesibility tools, the main
                      tools being the commonly used head pointer or eye gaze utilities.
                    </p>
                  </a>
                </div>

                

              </div>
            </div>

            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="object-cover w-full h-48" src="../assets/obd.png" alt="">
              </div>
              <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <!-- <a href="#" class="hover:underline"> -->
                      Hardware
                    <!-- </a> -->
                  </p>
                  <a href="https://github.com/codetrav/3308project" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      SmartOBD
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      The SmartOBD is an open-source, customizable, and accessible OBD scanner and user interface, targeted towards individuals who aren't mechanics 
                      but want an easy way of reading their car's on board diagnostics (OBD) system. It is comprised of the physical OBD scanner as well as a supplementary 
                      user interface that presents over 200 pieces of data from the OBD in an understandable manner for the user.
                    </p>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Experience',
  components: {
    Navbar
  }
}
</script>
<template>



  <div class="px-4 mb-10 sm:px-6 lg:px-8">

    <div class="container mx-auto">

        <div class="mt-2 mb-5 lg:text-center">
            <!-- <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">Transactions</h2> -->
            <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                My Work Experience
            </p>

        </div>


      <dl class="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-3 md:gap-y-3">

        <div class="flex p-5 bg-white rounded shadow-2xl">
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

        <div class="flex p-5 bg-white rounded shadow-2xl">
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

        <div class="flex p-5 bg-white rounded shadow-2xl">
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

        <div class="flex p-5 bg-white rounded shadow-2xl">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 text-white rounded-md">
              
            <a href="" target="_blank"> 
              <img src="../assets/laxelements.png" alt="aspyr_logo" width="50" height="50" class=""/> 
            </a> 

            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              Founding Partner at Lax Elements LLC, Austin TX
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Created LLC for start-up including filing articles of organization, creating an operating agreement and complying with tax and regulatory requirements.
              <br><br>Led marketing, social media, and accounting functions along with order and inventory management.
            </dd>
          </div>
        </div>


      </dl>
    </div>
</div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Experience',
  components: {
    // HelloWorld
  }
}
</script>
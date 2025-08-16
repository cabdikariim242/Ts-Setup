<template>
  <div class="bg-gray-300 dark:bg-[rgb(17,15,15)] w-full max-w-[280px] h-screen hidden lg:flex md:flex">
    <div class="flex flex-col gap-2 w-full mt-2 mx-3">
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'forms' }"
        >input group</router-link
      >


       <div class="w-full">
        <router-link
        :to="{ name: 'Buttons' }"
        class="flex mx-2 rounded-lg mt-4 hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)] 
        " @click="showrouter = !showrouter">
         <div class="ml-5 my-4 gap-3 mx-6 flex justify-start items-center">
          <i class="fa-brands fa-elementor text-[#4b93b1] text-[20px] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#000000] font-[500] dark:text-white"
          >
            FORM ELEMENTS
          </p>
          <p v-if="toggle" class="text-[#000000] text-[15px] font-[500">
            FORM ELEMENTS
          </p>
        
        </div>
          
         </router-link>


        <div v-if="showrouter" class="border-2 m-5 mr-2 border-[#e2e8f0]">
          <router-link 
        :to="{ name: 'Buttons' }"
        exact-active-class="dropdown-active"
        class="rounded-lg  hover:shadow-[0_4px_6px_rgba(0,0,0,0.6)] "
      >
        <div class=" gap-3 m-3 flex justify-start items-center">
          <i class="fa-solid fa-circle-down text-[#ffffff] text-[18px] dark:text-white"></i>
          <p
            v-if="!toggle"
            class="group-hover:flex text-[15px] hidden text-[#465569] font-[500] link-text dark:text-white "
          >
            Buttons
          </p>
          <p v-if="toggle" class="text-[#465569] text-[15px] font-[500] link-text dark:text-white ">
            Buttons
          </p>
        </div>
      </router-link>

     
       
        </div>
      </div>
    
    </div>
  </div>

  <!-- Sidebar for phones -->
  <div
    v-if="isopen"
    class="flex lg:hidden md:hidden bg-gray-300 w-full max-w-[200px] h-screen"
  >
       <div class="flex flex-col gap-2 w-full mt-2 mx-3">
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'forms' }"
        >input group</router-link
      >
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
   props: ["isopen"],
  data() {
    return {
      toggle: false,
      hover: false,
      showrouter: false,
      hideTimer: null,
      type: Boolean,
      default: false,
    };
  }
 
});
</script>

<style scoped>
.router-link-active {
  background-color: blue;
}
.router-link-exact-active {
  background-color: rgba(0, 0, 255, 0.411);
  color: white;
}
</style>

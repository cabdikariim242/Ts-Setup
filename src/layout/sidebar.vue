<template>
  <div class="overflow-y-auto bg-gray-300 dark:bg-[rgb(17,15,15)] w-full max-w-[280px] fixed bottom-0 top-20 hidden lg:flex md:flex">
    <div class="flex flex-col gap-2 w-full mt-2 mx-3">
      <router-link
        class="shadow-2xl bg-white dark:bg-black dark:text-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'forms' }"
        >Form</router-link
      >
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'inputGroup' }"
        >input Element</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'buttons' }"
        >Buttons</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'RegularForm' }"
        >Regular Form</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'accordingView' }"
        >According View</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'DatePickerView' }"
        >DatePickerView</router-link>
    

         <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'alert' }"
        >Alerts</router-link>

         <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'SliderView' }"
        >Slider</router-link>

         <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'TableView' }"
        >Table View</router-link>
         <router-link
        class="shadow-2xl bg-white dark:bg-black dark:text-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'typography' }"
        >Typography</router-link>

         <router-link
        class="shadow-2xl bg-white dark:bg-black dark:text-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'ProgressBar' }"
        >Progress</router-link>
         
        
    
    </div>
  </div>

  <!-- Sidebar for phones -->
  <div
    v-if="open"
    class="flex lg:hidden fixed bottom-0 top-20 md:hidden bg-[#414040ea] w-full max-w-[260px] h-screen z-[10]"
  >
       <div class="flex flex-col gap-2 w-full mt-2 mx-3">
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'forms' }"
        >Form</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'inputGroup' }"
        >input Element</router-link>
     
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'buttons' }"
        >Buttons</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'accordingView' }"
        >According</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'DatePickerView' }"
        >DatePicker</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'RegularForm' }"
        >Regular Form</router-link>

        <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'alert' }"
        >Alerts</router-link>
        <router-link
        class="shadow-2xl bg-white p-2 font-[500] dark:bg-black dark:text-white text-[17px] rounded-xl"
        :to="{ name: 'typography' }"
        >typography</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
   props: ["open"],
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
.dark .router-link-exact-active {
  background-color: rgba(0, 0, 255, 0.377);
  color: white;
}
.router-link-exact-active {
  background-color:#63bcf4;

  color: white;
}
</style>

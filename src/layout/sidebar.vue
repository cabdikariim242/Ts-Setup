<template>
  <div class="bg-gray-300 dark:bg-[rgb(17,15,15)] w-full max-w-[280px] fixed bottom-0 top-20 hidden lg:flex md:flex">
    <div class="flex flex-col gap-2 w-full mt-2 mx-3">
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'forms' }"
        >Form</router-link
      >
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'inputGroup' }"
        >input Element</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'buttons' }"
        >Buttons</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'RegularForm' }"
        >Regular Form</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'accordingView' }"
        >According View</router-link>
    

         <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'alert' }"
        >Alerts</router-link>
         <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'TableView' }"
        >Table View</router-link>
    
    </div>
  </div>

  <!-- Sidebar for phones -->
  <div
    v-if="open"
    class="flex lg:hidden fixed bottom-0 top-20 md:hidden bg-[#414040ea] w-full max-w-[200px] h-screen"
  >
       <div class="flex flex-col gap-2 w-full mt-2 mx-3">
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'forms' }"
        >Form</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'inputGroup' }"
        >input Element</router-link>
     
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'buttons' }"
        >Buttons</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'accordingView' }"
        >according</router-link>
      <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'RegularForm' }"
        >Regular Form</router-link>

        <router-link
        class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl"
        :to="{ name: 'alert' }"
        >Alerts</router-link>
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
.router-link-active {
  background-color: blue;
}
.router-link-exact-active {
  background-color: rgba(0, 0, 255, 0.411);
  color: white;
}
</style>

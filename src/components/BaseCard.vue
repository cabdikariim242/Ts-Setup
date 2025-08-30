<template>
 <div class="w-full mt-[40px]  ">
    <div class="p-10 bg-white dark:bg-[#0f0f0f] dark:text-white w-full  
    rounded-2xl shadow-md  hover:shadow-lg transition-shadow duration-300">
    <slot></slot>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
export default defineComponent({
  components: {
    DarkModeToggle
  },
  data() {
    return {};
  }
})
</script>

<style>

</style>
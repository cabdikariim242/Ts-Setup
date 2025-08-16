<template>
<div class="bg-[#63bcf4] w-full h-20 flex items-center justify-between fixed">
    <div class="flex items-center justify-center h-full ml-3">
        <img class="w-10 hidden lg:flex md:flex " src="@/assets/logo.png" alt="">
        <h1 class="text-white hidden lg:flex md:flex  dark:text-[rgb(36,32,32)] text-[30px] font-bold ml-2">vue Logo</h1>
        <i @click="$emit('toggleSidebar')" class="fa-solid fa-bars flex lg:hidden md:hidden text-[#fffdfd] dark:[gray] text-[30px]"></i>
    </div>
    <div class="flex items-center justify-center gap-5 text-[20px] dark:text-[rgb(36,32,32)] text-[#fffdfd]">
    <i class="fa-solid fa-magnifying-glass"></i>
    <DarkModeToggle />
    <i class="fa-solid fa-bell"></i>
    <img src="@/assets/yiksi.png" class="w-10 mr-5 rounded-full  " alt="User Avatar">

    </div>
</div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DarkModeToggle from '@/components/DarkModeToggle.vue'

export default defineComponent({
  components: {
    DarkModeToggle
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  }
})
</script>

<style>

</style>
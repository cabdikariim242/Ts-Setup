<template>
<div class="bg-[#63bcf4] w-full h-20 flex items-center justify-between">
    <div class="flex items-center h-full ml-3">
        <img class="w-10 hidden lg:flex md:flex " src="@/assets/logo.png" alt="">
        <h1 class="text-white hidden lg:flex md:flex  dark:text-[gray] text-[24px] font-bold ml-2">vue Logo</h1>
        <i @click="$emit('toggleSidebar')" class="fa-solid fa-bars flex lg:hidden md:hidden text-[#fffdfd] dark:[gray] text-[30px]"></i>
    </div>
    <div class="flex items-center gap-5  dark:text-[gray] text-[#fffdfd]">
    <i class="fa-solid fa-magnifying-glass text-[18px]"></i>
    <DarkModeToggle />
    <i class="fa-solid fa-bell text-[18px]"></i>
    <img src="@/assets/yiksi.png" class="w-9 mr-5 rounded-full  " alt="User Avatar">

    </div>
</div>  
</template>

<script>
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
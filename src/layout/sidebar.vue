<template>

    <div class="bg-green-500 w-full max-w-[300px] h-screen hidden lg:flex md:flex ">
      <div class="flex items-start w-full  justify-center ml-3">
        <img class="w-10 mt-3" src="@/assets/logo.png" alt="">
        <h1 class="text-white dark:text-[gray] text-[30px] font-bold ml-2">vue Logo</h1>
      </div>
    </div>  

    <!-- Sidebar for phones -->
    <div v-if="open" class="flex lg:hidden md:hidden bg-red-500 w-full max-w-[200px] h-screen">
      <div class="flex  items-start justify-center ml-3">
        <img class="w-10 mt-3" src="@/assets/logo.png" alt="">
        <h1 class="text-white dark:text-[gray] text-[30px] font-bold ml-2">phone sidebar</h1>
      </div>
    </div>  

</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>
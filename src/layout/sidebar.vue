<template>

    <div class="bg-gray-300 w-full max-w-[300px] h-screen hidden lg:flex md:flex  ">
      <div class="flex flex-col gap-2 w-full mt-2 mx-3">
        <router-link class="shadow-2xl bg-white p-2 font-[500] text-[17px]  rounded-xl" :to="{name:'About'}">input group</router-link>
        <router-link class="shadow-2xl bg-white p-2 font-[500] text-[17px] rounded-xl" :to="{name:'Home'}">home  group</router-link>
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

<style scoped>
.router-link-active {
    background-color: blue;
}
.router-link-exact-active{
    background-color:rgba(0, 0, 255, 0.411);
    color:white;
}
</style>
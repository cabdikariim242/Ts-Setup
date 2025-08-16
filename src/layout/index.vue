<template>
  <navbar @toggleSidebar="toggleSidebar" :open="open"/>

  <div class="flex h-full gap-5 justify-between z-[10]" >
    <sidebar @toggleSidebar="toggleSidebar" :open="open"/>
    <router-view
      class="flex-1  mt-32 ml-3 lg:ml-[320px] md:ml-[320px] mx-2 lg:mr-[100px] md:mr-[50px] mr-[10px]"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./navbar.vue";
import Sidebar from "./sidebar.vue";
export default defineComponent({
  name: "Layout",
  components: { Navbar, Sidebar },

data() {
  return {
    open: false,
  };
},
methods: {
  toggleSidebar() {
    this.open = !this.open;
  }
}});
</script>

<style></style>
<template>
  <navbar @toggleSidebar="toggleSidebar" :open="open"/>

  <div class="flex  gap-5 justify-between " >
    <sidebar @toggleSidebar="toggleSidebar" :open="open"/>
    <router-view
      class="flex-1  mt-3 mx-2"
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
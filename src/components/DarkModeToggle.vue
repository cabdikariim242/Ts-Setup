<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-full transition"
    aria-label="Toggle Dark Mode"
  >
    <span v-if="isDark">
        <i class="fa-solid fa-moon text-[25px] text-[gray]"></i>
    </span>
    <span v-else>
        <i class="fa-solid fa-sun text-[25px] text-[#fffdfd]"></i>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDark: localStorage.theme === 'dark'
    }
  },
  mounted() {
    document.documentElement.classList.toggle('dark', this.isDark)
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      localStorage.theme = this.isDark ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', this.isDark)
    }
  }
}
</script>

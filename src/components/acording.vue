<template>
  <div :class="[bordered ? 'border rounded-md' : '']">
    <button
      @click="toggle"
      class="text-left px-4 py-3 font-medium flex justify-between items-center"
    >
      <span>{{ title }}</span>
      <svg
        :class="open ? 'rotate-180' : ''"
        class="h-4 w-4 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-show="open" class="px-4 py-2 text-sm text-gray-700 border-t">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "According",
  props: {
    title: {
      type: String,
      required: true,
    },

      bordered: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
});
</script>
    
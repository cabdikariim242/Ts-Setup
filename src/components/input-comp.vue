<template>
  <input
    :id="id"
    :type="type"
    :class="customClass"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseInput',
  props: {
    id: { type: String, default: '' },
    type: { type: String, default: 'text' },
    customClass: { type: String, default: '' },
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(e: Event) {
      this.$emit('update:modelValue', (e.target as HTMLInputElement).value);
    },
  },
});
</script>

<template>
  <label :for="id" :class="labelClass">
    {{ label }} <span v-if="required">*</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'label',
  props: {
    label: { type: String, required: true },
    labelClass: { type: String, default: '' },
    id: { type: String, default: '' },
    required: { type: Boolean, default: false },
  },
});
</script>

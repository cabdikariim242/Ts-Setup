<template>
  <forms />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import forms from './views/forms.vue';

export default defineComponent({
  name: 'App',
  components: { forms },
});
</script>

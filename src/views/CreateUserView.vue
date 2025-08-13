<template>
  <div style="padding:24px">
    <Form @created="goList" />
  </div>
</template>

<script lang="ts" setup>
import Form from '../components/Form.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function goList() {
  // navigate somewhere after creation, e.g. dashboard
  router.push('/dashboard');
}
</script>

<template>
  <div class="page">
    <h1>Register</h1>
    <form @submit.prevent="submit">
      <label>Name
        <input v-model="name" required />
      </label>
      <label>Email
        <input v-model="email" type="email" required />
      </label>
      <label>Password
        <input v-model="password" type="password" minlength="6" required />
      </label>
      <button :disabled="auth.loading">Create account</button>
      <p v-if="auth.error" class="err">{{ auth.error }}</p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
const auth = useAuthStore();

async function submit() {
  try {
    await auth.register({ name: name.value, email: email.value, password: password.value });
    await auth.login({ email: email.value, password: password.value });
    router.push('/dashboard');
  } catch {}
}
</script>
<style scoped>
.page { max-width: 420px; margin: 40px auto; display: grid; gap: 12px; }
label { display: grid; gap: 6px; }
.err { color: crimson; }
</style>
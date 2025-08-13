<template>
  <form class="card" @submit.prevent="submit">
    <h2>Create User</h2>

    <label>
      <span>Name</span>
      <input v-model.trim="form.name" type="text" required minlength="2" />
    </label>

    <label>
      <span>Email</span>
      <input v-model.trim="form.email" type="email" required />
    </label>

    <label>
      <span>Password</span>
      <input v-model="form.password" type="password" required minlength="6" />
    </label>

    <label>
      <span>Confirm Password</span>
      <input v-model="confirmPassword" type="password" required minlength="6" />
    </label>

    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="success" class="success">✅ User created: {{ success.email }}</p>

    <button :disabled="!isValid || loading">
      <span v-if="loading">Creating…</span>
      <span v-else>Create</span>
    </button>
  </form>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import api from '../services/api';
import type { User } from '../types/user';

type CreateUserPayload = { name: string; email: string; password: string };

const emit = defineEmits<{
  (e: 'created', user: User): void
}>();

const form = reactive<CreateUserPayload>({
  name: '',
  email: '',
  password: '',
});

const confirmPassword = ref('');
const loading = ref(false);
const error = ref<string | null>(null);
const success = ref<User | null>(null);

const isValid = computed(() => {
  const hasName = form.name.trim().length >= 2;
  const hasEmail = /\S+@\S+\.\S+/.test(form.email);
  const hasPassword = form.password.length >= 6;
  const matches = form.password === confirmPassword.value;
  return hasName && hasEmail && hasPassword && matches;
});

async function submit() {
  if (!isValid.value || loading.value) return;
  loading.value = true;
  error.value = null;
  success.value = null;

  try {
    const { data } = await api.post<User>('/api/auth/register', form);
    success.value = data;
    emit('created', data);
    // reset fields
    form.name = '';
    form.email = '';
    form.password = '';
    confirmPassword.value = '';
  } catch (e: any) {
    error.value = e?.response?.data?.message ?? e?.message ?? 'Failed to create user';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.card {
  max-width: 440px;
  margin: 24px auto;
  padding: 16px;
  display: grid;
  gap: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}
label { display: grid; gap: 6px; }
input {
  padding: 8px 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
button {
  padding: 10px 14px;
  border: 0;
  border-radius: 8px;
  background: #111827;
  color: white;
  cursor: pointer;
}
button[disabled] { opacity: 0.6; cursor: not-allowed; }
.error { color: #b91c1c; }
.success { color: #0d9488; }
</style>

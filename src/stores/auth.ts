import { defineStore } from 'pinia';
import api from '@/services/api';
import type { User } from '@/types/user';

interface State {
  token: string | null;
  me: User | null;
  loading: boolean;
  error: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    token: localStorage.getItem('token'),
    me: null,
    loading: false,
    error: null,
  }),
  actions: {
    setToken(token: string | null) {
      this.token = token;
      if (token) localStorage.setItem('token', token);
      else localStorage.removeItem('token');
    },
    async register(payload: { name: string; email: string; password: string }) {
      this.loading = true;
      this.error = null;
      try {
        await api.post('/api/auth/register', payload);
      } catch (e: any) {
        this.error = e?.response?.data?.message ?? e.message;
        throw e;
      } finally {
        this.loading = false;
      }
    },
    async login(payload: { email: string; password: string }) {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await api.post('/api/auth/login', payload);
        this.setToken(data.token);
        await this.fetchMe();
      } catch (e: any) {
        this.setToken(null);
        this.error = e?.response?.data?.message ?? e.message;
        throw e;
      } finally {
        this.loading = false;
      }
    },
    async fetchMe() {
      if (!this.token) { this.me = null; return; }
      const { data } = await api.get<User>('/api/auth/me');
      this.me = data;
    },
    logout() {
      this.setToken(null);
      this.me = null;
    },
  },
});
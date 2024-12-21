import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore.ts';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SPRING_BOOT_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
});

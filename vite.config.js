// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@tonconnect/sdk'],  // Явно указываем, чтобы Vite правильно обработал
  },
  build: {
    rollupOptions: {
      external: ['@tonconnect/sdk'], // Убираем ошибку при сборке на Vercel
    },
  },
});

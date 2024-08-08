import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  port: 3000,
  build: {
    rollupOptions: {
      external: ['./axios'],
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});

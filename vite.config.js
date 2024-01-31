import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import axios  from 'axios';

export default defineConfig({
  plugins: [react()],
  port: 3000,
  build: {
    rollupOptions: {
      external: ['./axios'],
    },
  },
});

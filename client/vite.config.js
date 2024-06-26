import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        // http://localhost:5000
        target: "https://chatchat-m052.onrender.com/",
      },
    },
  },
});

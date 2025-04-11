import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  build: {
    outDir: 'dist', // Ensure this is set if it's not the default
  },
});

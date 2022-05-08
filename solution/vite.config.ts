import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pillar-of-autumn": resolve(__dirname, "./src"),
    }
  },
  root: resolve(__dirname, "./src/app/")
})

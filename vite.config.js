import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/birthday-greetings/', // 👈 This line is important
  plugins: [react()],
})

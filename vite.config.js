import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/birthday-greetings/', // <- must match your GitHub repo name exactly
  plugins: [react()],
});

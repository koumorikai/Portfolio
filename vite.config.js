import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ПОПРАВИЛ ТУТ

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Следи, чтобы буква 'P' была заглавной
})
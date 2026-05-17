import { defineConfig } from 'vite'
import react from '@vitejs/config-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // ОБЯЗАТЕЛЬНО: название твоего репозитория с косыми чертами
})
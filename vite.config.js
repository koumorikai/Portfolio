import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  base: './', // Относительные пути, чтобы всё грузилось и на GitHub, и локально
}
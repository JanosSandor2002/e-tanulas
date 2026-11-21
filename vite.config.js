import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' => bármilyen ingyenes tárhelyen működik (Netlify, GitHub Pages, stb.)
export default defineConfig({
  plugins: [react()],
  base: './',
})

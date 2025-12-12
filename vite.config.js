import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/remotesensing-web-test/',
  plugins: [react()]
})

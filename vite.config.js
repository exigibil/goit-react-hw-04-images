import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine the base URL based on deployment scenario
const base =
  process.env.NODE_ENV === 'production'
    ? '/goit-react-hw-03-image-finder/'
    : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
})
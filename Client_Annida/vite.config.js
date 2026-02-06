import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  // Use root (/) during development so localhost serves at /,
  // but keep the repository subpath when building for production.
  base: "/",
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Completely disable sourcemaps so the original code cannot be reconstructed
    sourcemap: false,
    // Ensures the code is thoroughly minified
    minify: 'esbuild',
  },
  esbuild: {
    // Automatically strip all console.logs and debuggers from the production build
    drop: ['console', 'debugger'],
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // the address of your backend server
        changeOrigin: true, // needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // rewrite paths,
        secure: false, // needed for virtual hosted sites
      }
    }
  }
})
 // https://vitejs.dev/config/
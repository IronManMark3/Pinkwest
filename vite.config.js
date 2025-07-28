import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const link = "https://27f8bead931c.ngrok-free.app/"



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    host: true,
    allowedHosts: [link.replace("https://","").replace("/","")],
  },
})

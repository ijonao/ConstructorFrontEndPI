import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
//importe do patch e configurando pra usar @ como alias "atalho" e nn precisar ficar digitando ./src toda hora

export default defineConfig({
  plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api/v1/public/": {
                target: "https://api.freeapi.app",
                changeOrigin: true,
            }
        }
    }
})


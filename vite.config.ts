import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Blog: mismo origen, sin CORS. En dev redirigimos /api/blog-posts a radar.
      "/api/blog-posts": {
        target: "https://radar.bmontero.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/blog-posts/, "/api/public/posts"),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Definir variables de entorno para el cliente
    __DEV__: mode === 'development',
  },
  envPrefix: 'VITE_', // Solo variables que empiecen con VITE_ serán expuestas al cliente
}));

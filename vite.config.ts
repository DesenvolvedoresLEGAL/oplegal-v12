import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu'],
          animations: ['framer-motion'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    modulePreload: {
      polyfill: false // Reduce bundle size for modern browsers
    },
  },
}));

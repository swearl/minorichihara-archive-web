import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
});

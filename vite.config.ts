import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vite.dev/config/
const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(root),
      '@app': resolve(root, 'app'),
      '@assets': resolve(root, 'assets'),
      '@entities': resolve(root, 'entities'),
      '@features': resolve(root, 'features'),
      '@pages': resolve(root, 'pages'),
      '@shared': resolve(root, 'shared'),
      '@widgets': resolve(root, 'widgets'),
    },
  },
});

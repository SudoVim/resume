import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        features: resolve(__dirname, 'src/features'),
        components: resolve(__dirname, 'src/components'),
      },
    },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});

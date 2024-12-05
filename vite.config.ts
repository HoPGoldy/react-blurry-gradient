import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/blurry-gradient/index.ts'),
      name: 'ReactBlurryGradient',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react({
      jsxRuntime: process.env.NODE_ENV === 'production' ? 'classic' : 'automatic',
    }),
    dts({
      tsconfigPath: 'tsconfig.app.json',
      include: ['src/vite-env.d.ts', 'src/blurry-gradient'],
    }),
  ],
});

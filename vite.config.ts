import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        components: path.resolve(__dirname, './src/components/index.ts'),
        tokens: path.resolve(
          __dirname,
          './src/components/supernovaTokens/tailwindVariables.ts'
        ),
        plugin: path.resolve(__dirname, './src/components/plugin.ts'),
      },
      // entry: path.resolve(__dirname, './src/components/index.tsx'),
      // name: 'PGForsta-design-system',
      // fileName: 'pgforsta-design-system',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
  },
  //dts rolls up all the types of our package
  plugins: [react(), dts({ rollupTypes: true })],
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss],
  //   },
  // },
});

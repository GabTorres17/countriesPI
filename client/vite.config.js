import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Directorio de salida de la compilación
  },
  server: {
    port: 3000,  // El puerto en el que deseas ejecutar tu servidor de desarrollo
  },
});


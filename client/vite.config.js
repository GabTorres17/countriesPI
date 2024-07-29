import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'  // Asegúrate de que el directorio de salida esté configurado correctamente
  },
  server: {
    port: 3000,  // El puerto en el que deseas ejecutar tu servidor de desarrollo
  },
});
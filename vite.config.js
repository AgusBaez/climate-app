import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// https://vitejs.dev/config/
dotenv.config();

export default () => {
  return defineConfig({
    plugins: [react()],
    test: {
      globals: true, // Permite usar globals como describe, it, expect sin importar Vitest en cada archivo
      environment: "jsdom", // Simula un entorno de navegador para las pruebas
    },
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
  });
};


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module for resolving aliases

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Shortcut for the `src` directory
    },
  },
});

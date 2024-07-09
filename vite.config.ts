import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pilipala/",
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      // Add the dependencies causing the issue here
      "chunk-CNRPKY7A",
    ],
  },
});

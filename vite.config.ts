import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pilipala/",
  plugins: [react()],
  resolve: {
    alias: {
      "@compressedPhotos": path.resolve(
        __dirname,
        "src/assets/compressed-photos",
      ),
      "@photos": path.resolve(__dirname, "src/assets/photos"),
    },
  },
});

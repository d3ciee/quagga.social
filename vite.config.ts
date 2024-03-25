import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "web/ui/index.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});

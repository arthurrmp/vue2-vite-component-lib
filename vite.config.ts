import { defineConfig } from "vite";
import { resolve } from "path";
import vue2 from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [vue2()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vue2-vite-component-lib",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss"


const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  runtimeCompiler: true,
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    sourcemap: true,
    brotliSize: true,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "XComponentsLibrary",
      fileName: "x-components-library",
      // 导出模块格式
      formats: ["esm", "umd","iife"],
    },
  }
})
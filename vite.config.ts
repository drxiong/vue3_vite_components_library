/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
import dts from "vite-plugin-dts"


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
    Unocss(),
    // dts({
    //   outputDir: "./dist/types",
    //   // staticImport: true,
    //   insertTypesEntry: false,
    //   copyDtsFiles: true, 
    // })
  ],
  build: {
    rollupOptions,
    minify: false,
    sourcemap: true,
    brotliSize: true,
    cssCodeSplit: false,
    lib: {
      entry: "./src/entry.ts",
      name: "XComponentsLibrary",
      fileName: "x-components-library",
      // 导出模块格式
      formats: ["esm", "umd"],
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
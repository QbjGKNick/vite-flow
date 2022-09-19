/// <reference types="vitest" />
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import jsx from "@vitejs/plugin-vue-jsx" // 支持 tsx 语法
import path from "path"
import { viteMockServe } from "vite-plugin-mock"

import Unocss from "unocss/vite"
import { presetUno, presetAttributify, presetIcons } from "unocss"

// vite 默认只会编译ts 不会检测ts
export default defineConfig({
  plugins: [
    viteMockServe(),
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"]
      // eslintrc: { enabled: true }
    }),
    jsx(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()] // 默认使用的是 windicss 支持将类名 用属性的  支持 css icon
    })
  ],
  resolve: {
    alias: [
      // 配置和 rollup 一样
      { find: "@", replacement: path.resolve(__dirname, "src") }
    ]
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: { web: [/.tsx$/] }
  }
})

// 思想
// eslint prettier editorconifg
// eslint vscode  prettier vscode  editorconfig for vscode
// 默认格式化
// 配合 git hook 实现提交代码前 先进行校验

// husky

// Automic css
// 预处理器 scss less stylus

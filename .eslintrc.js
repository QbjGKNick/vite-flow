module.exports = {
  env: {
    // 环境 针对哪些环境的语法
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 集成了哪些规则，别人写好的规则拿来用
    "eslint:recommended",
    "plugin:vue/vue3-essential", // eslint-plugin-vue
    "plugin:@typescript-eslint/recommended", // typescript 规则
    "@vue/prettier",
    "./.eslintrc-auto-import.json"
  ],
  overrides: [],
  // 可以解析 .vue 文件
  parser: "vue-eslint-parser", // esprima babel-eslint @typescript-eslint/parser
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析 ts 文件的
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    // 自定义规则
    "prettier/prettier": [
      // 自带的 prettier 规则
      "error",
      {
        singleQuote: false, // 使用双引号
        semi: false, // 末尾加分号
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        endOfLine: "auto"
      }
    ]
  }
}

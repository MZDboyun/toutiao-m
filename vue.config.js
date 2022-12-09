const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true // 浏览器自动打开
  },
  lintOnSave: true // 打开eslint检查
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath:"./",
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  
  devServer: {
    port:8002,
    proxy: {
      '^/admin': {
        target: 'http://8.130.106.91:3001', // 你要代理的接口域名和端口号
        changeOrigin: true, // 跨域
      }
    }
  }
})

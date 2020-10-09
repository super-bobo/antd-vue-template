const path = require('path')
module.exports = {
  css: {
    // 开发环境-css 通过link的形式载入
    extract: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/less/*.less')]
    }
  },
  // webpack 额外配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  devServer: {
    // 接口代理
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.11.53:8080/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}

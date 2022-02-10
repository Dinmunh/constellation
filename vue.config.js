module.exports = {
  // 解决跨域问题
  devServer: {
    proxy: {
      "/api": {
        target: "http://web.juhe.cn:8080/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    // eslint错误提示关闭
    overlay: {
      warning: false,
      errors: false
    }
  },
  lintOnSave: false
};

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(createProxyMiddleware('/test',
          {
            target: 'http://apis.juhe.cn',
            source:false,
            changeOrigin: true,
            pathRewrite:{
              "^/test": "/"
            }
          }
      )
  )
}
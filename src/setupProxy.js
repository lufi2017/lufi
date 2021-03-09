// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      '/api',//遇见api前缀的请求就会触发该代理配置
      createProxyMiddleware({
        target : 'http://10.99.99.53:5000',//请求转发给谁
        changeOrigin : true,//默认是false 控制服务器收到的请求头中Host字段的值
        pathRewrite: {
          "^/api": "/"//重写请求路径（必须）
        }
      })
  );
  app.use(
      '/api2',
      createProxyMiddleware({
        target : 'http://10.99.99.53:5001',
        changeOrigin : true,
        pathRewrite: {
          "^/api2": "/"
        }
      })
  );
}
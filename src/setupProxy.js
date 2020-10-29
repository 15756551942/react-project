const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    // target: 'http://106.75.15.3:7001/',
    // target: 'http://39.107.82.218:30500/',
    target: 'http://dev.admin.carrots.ptteng.com/',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      "^/api": ""
    }}));

  // app.use('/api2', createProxyMiddleware({
  //   target: 'http://dev.admin.carrots.ptteng.com',
  //   changeOrigin: true,
  //   pathRewrite: { //路径替换
  //     '^/api2': '/api', // axios 访问/api2 == target + /api
  //   }
  // }));

};
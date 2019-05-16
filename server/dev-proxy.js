//设置开发环境客户端请求的代理地址

module.exports= {
  '/kuaiyipai-api': {
    target: 'http://sit.kypapp.in.houbank.net',
    changeOrigin: true
  }
}

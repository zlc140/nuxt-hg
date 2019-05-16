const isProd = process.env.NODE_ENV === 'production';
//服务端请求，不同环境下的域名配置
export default {
  'MAIN': {
    development: 'http://192.168.13.39:8080',
    sit: 'http://192.168.13.39:8080',
    mit: 'http://192.168.13.39:8080',
    production: 'https://telesale-ssr.houbank.com',
  },
  'BEAR': {
    development: 'http://192.168.13.39:8080',
    sit: 'http://192.168.13.39:8080',
    mit: 'http://192.168.13.39:8080',
    production: 'https://telesale-ssr.houbank.com',
  }
};

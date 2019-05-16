import axios from 'axios';
// import config from '../config/index.js';
import envConfig from '../server/env-config';
let env = process.env.NODE_ENV || 'development';

let isServer = () => {
  return window === undefined
}


const ax = axios.create({
  headers: {'Content-Type': 'application/json'}
})

// 拦截器
ax.interceptors.request.use(
  data => {
    if (data.method === 'post' || data.method === 'put' || data.method === 'delete' || data.method === 'patch') {

    }
    return data;
  },
  error => {
    return Promise.reject(error);
  }
);

ax.interceptors.response.use(
  response => {
    // if (response && response.data.code !== 1) {
    //   if (window) window.alert('出错了：' + response.data.message);
    // }

    return response;
  },
  error => {
    if (!error.response) {
      // 请求超时状态
      if (error.message.includes('timeout')) {
        console.log('超时了');
        // window.alert('请求超时，请检查网络是否连接正常');
      } else {
        // 可以展示断网组件
        console.log('断网了');
        // window.alert('请求失败，请检查网络是否已连接');
      }
    }
    return Promise.reject(error);
  }
);



// url,传参， 设置config， 服务端接口地址（无法设置代理）
class proxyAxios {
  constructor() {
    this.axiosInstance = null;
    this.headers = { 'Content-Type': 'application/json' };
    this.init = { mode: 'cors' };
    // 处理loading
    // this.requestCount = 0;
    // this.isLoading = false;
    // this.loadingTimer = null;
  }

  /**
   * get 请求
   * @param url
   * @param params
   * @param config
   */
  get(url, params = {}, config = {}) {
    let options = { method: 'get' };
    if(params){
      let paramsArray = [];
      Object.keys(params).forEach(v => {
          if(params[v] instanceof Array) {
            const value = params[v].map(item => '"' + item + '"');
            paramsArray.push(v + '=[' + value.join(',') + ']');
          }else {
            paramsArray.push(v + '=' + params[v]);
          }
      })
      if(url.search(/\?/) > -1) {
        url += paramsArray.join('&');
      }else {
        url += '?' + paramsArray.join('&');
      }
    }
    this.doAxios(url, options, config)
  }

  /**
   * post请求
   * @param url
   * @param params
   * @param config
   */
  post(url, params = {}, config = {}) {
    let options = { method: 'post' };
    options.body = params;
    this.doAxios(url, options, config)
  }

  /**
   * axios封装
   * @param url
   * @param params
   * @param config
   */
  doAxios(url, params = {}, config = {}) {
    let { name } = config
    const baseUrl = isServer() && env ? envConfig[name || 'MAIN'][env] : '';

  }
}

export default ax;

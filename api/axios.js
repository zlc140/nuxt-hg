import axios from 'axios';
import config from '../config/index.js'
// import * as config from '../config/index.js'
let env = process.env.NODE_ENV || 'development';

let isServer = () => {
  return window === undefined
}

let baseUrl = isServer ? config.API_ROOT : ''
const ax = axios.create({
  baseURL: baseUrl
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
        window.alert('请求超时，请检查网络是否连接正常');
      } else {
        // 可以展示断网组件
        console.log('断网了');
        window.alert('请求失败，请检查网络是否已连接');
      }
    }
    return Promise.reject(error);
  }
);

export default ax;

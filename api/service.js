import fetch from './request'
//
// // 获取用户信息
export const getAuth = async () => {
  const res =  await fetch.get('/kuaiyipai-api/common/getAppSkinStatus');
  // console.log(res)
  return res.data;
}

export const getImageVerifyCode = () => {
  return fetch.get('/offline-mgm-api/authApi/getFinanceImageVerifyCode', {}, {name});
}

export const sendRegSmsVerifyCode = (params) => {
  return fetch.post('/offline-mgm-api/authApi/sendFinanceRegSmsVerifyCode', params);
}

export const getInitData = () => {
  return fetch.get('/offline-mgm-api/publicInfo', {}, {name});
}

export const checkMobile = (mobile) => {
  return fetch.get(`/offline-mgm-api/checkMobile?mobile=${mobile}`);
}

export const submitInfo = (params) => {
  return fetch.post('/offline-mgm-api/authApi/createFinanceAccount', params)
}

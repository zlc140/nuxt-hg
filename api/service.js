import fetch2 from './request'
//
const name = 'bear'
// // 获取用户信息
export const getAuth = async () => {
  const res =  await fetch2.get('/kuaiyipai-api/common/getAppSkinStatus',{},{name: 'kyp'});
  // console.log(res)
  return res.data;
}

export const getImageVerifyCode = () => {
  return fetch2.get('/offline-mgm-api/authApi/getFinanceImageVerifyCode', {}, {name});
}

export const sendRegSmsVerifyCode = (params) => {
  return fetch2.post('/offline-mgm-api/authApi/sendFinanceRegSmsVerifyCode', params);
}

export const getInitData = () => {
  return fetch2.get('/offline-mgm-api/publicInfo', {}, {name});
}

export const checkMobile = (mobile) => {
  return fetch2.get(`/offline-mgm-api/checkMobile?mobile=${mobile}`);
}

export const submitInfo = (params) => {
  return fetch2.post('/offline-mgm-api/authApi/createFinanceAccount', params)
}

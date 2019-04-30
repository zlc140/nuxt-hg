import ax from './axios.js'

// 获取用户信息
export const getAuth = async () => {
  const res =  await ax.get('/common/getAppSkinStatus');
  return res.data;
}

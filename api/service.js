import req from './request'
//
// // 获取用户信息
export const getAuth = async () => {
  const res =  await req.get('/kuaiyipai-api/common/getAppSkinStatus');

  return res.data;
}

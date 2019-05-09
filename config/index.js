const IS_DEV = process.env.NODE_ENV !== 'production'

const API_ROOT = IS_DEV ? 'http://sit.kypapp.in.houbank.net/kuaiyipai-api' : 'http://uat.kypapp.in.houbank.net/kuaiyipai-api';

const STATIC_PATH = 'https://static/';


export default {
  IS_DEV,
  API_ROOT,
  STATIC_PATH
}

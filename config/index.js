const IS_DEV = process.env.NODE_ENV !== 'product'

const API_ROOT = IS_DEV ? 'http://sit.kypapp.in.houbank.net/kuaiyipai-app-api' : '';

const STATIC_PATH = 'https://static/';


module.exports = {
  IS_DEV,
  API_ROOT,
  STATIC_PATH
}

const isServer = (() => {
  return typeof window === 'undefined';
})();
export default function({store,redirect}) {
  // context.isServer = isServer
  // console.log(store)
  store.dispatch('GET_STATUS')
  // context.userAgent = isServer ? context.req.headers['user-agent'] : navigator.userAgent

}

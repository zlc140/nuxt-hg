const isServer = (() => {
  return typeof window === 'undefined';
})();
export default function({route,store,redirect}) {
  // context.isServer = isServer
  // context.userAgent = isServer ? context.req.headers['user-agent'] : navigator.userAgent
  if(route.path == '/aboutUs') {
    store.commit('SET_STATUS',2)
    // return redirect('/')
  }else{
    store.commit('SET_STATUS',1)
  }
}

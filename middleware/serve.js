export default function(context) {
  // console.log('serve',context)
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}

const Koa = require('koa');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const proxyMiddleware = require('http-proxy-middleware');
const devProxy = require('./dev-proxy');
const app = new Koa()

// Import and Set Nuxt.js options
let config = require('../nuxt.config')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 3000
  } = nuxt.options.server
  // console.log(nuxt.options.server)
  // Build in development
  if (config.dev) {

    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }



  app.use(async (ctx, next) => {
    console.log(ctx,'ctx')
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    if(devProxy && config.dev){//开发环境通过本地代理请求
       // return proxyMiddleware('/kuaiyipai-api',devProxy['/kuaiyipai-api'])
      // Object.keys(devProxy).forEach(function (context) {
      //   proxyMiddleware(context, devProxy[context])
      // })
    }
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()

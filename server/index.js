const express = require('express')
const { Nuxt, Builder } = require('nuxt');
const dev = process.env.NODE_ENV === 'development'
const compression = require('compression')
const devProxy = require('./dev-proxy')
// const Routers  = require('./router')

// Import and Set Nuxt.js options
let config = require('../nuxt.config')


async function start() {
  // Instantiate nuxt.js
  const nuxt = await new Nuxt(config)
  const app = express()
  app.use(nuxt.render)
  config.dev = !(app.env === 'production')
  app.use(compression())

  // Set up the proxy.
  // if (dev && devProxy) {
  //   const proxyMiddleware = require('http-proxy-middleware')
  //   Object.keys(devProxy).forEach(function (context) {
  //     app.use(proxyMiddleware(context, devProxy[context]))
  //   })
  // }

  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 3000
  } = nuxt.options.server
  // console.log(nuxt.options.server)
  // Build in development
  if (config.dev) {

    try {
      const builder = new Builder(nuxt)
      await builder.build()
    } catch (error) {
      console.log(error)
      process.exit(1)
    }

  } else {
    await nuxt.ready()
  }

  app.listen(port, host)
  console.log('> Ready on '+ host +':'+ port)
}

start();

const pkg = require('./package')


module.exports = {
  mode: 'spa',
  // server: {
  //   port: 3002
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyswords', name: 'keyswords', content: '厚冠信息，消费金融、小微金融,金融科技公司' },
      { hid: 'description', name: 'description', content: '厚冠信息，专注于消费金融、小微金融的金融科技公司厚冠信息是专注于消费金融、小微金融的金融科技公司。公司成功将金融科技融入信贷产品研发、精准获客、风险管理、资金运营、资产处置等关键环节，打造了适用于不同场景、不同客群的零售金融解决方案。' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: [ // 设置代理
    {'/kuaiyipai-api': { target: 'http://sit.kypapp.in.houbank.net' }},
    {'/offline-mgm-api': { target: 'http://192.168.13.39:8080', ws: false }}
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    {src: 'assets/css/common.less' , lang: 'less'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/message'},
    {src: '~/plugins/vue-notifications', ssr: false} //只在客户端使用
  ],

  router: {
    // base: process.env.NODE_ENV === 'production' ?'/app/': '/'
    // middleware: 'serve'
  },

  /*
  ** Build configuration
  */
  build: {

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      //console.log('config',ctx)
       //vue的编译
      Object.assign(config.resolve.alias, {
        vue: 'vue/dist/vue.js'
      })
      // if(!ctx.isDev){
      //   config.output.publicPath = '/app/';
      // }
    }
  }
}

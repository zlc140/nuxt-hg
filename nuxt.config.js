const pkg = require('./package')


module.exports = {
  mode: 'universal',//spa为客户端加载，universal为服务端渲染
  // server: { //配置端口和host
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
  performance: { //无效？？？开启关闭预加载
    prefetch: true
  },
  render: {
    // resourceHints: false, //无效？？？
    bundleRenderer: {
      shouldPreload: (file, type) => { //添加之后有些js就有了预加载
        return ['script','style','font'].includes(type)
      },
    }
  },
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true, // 表示开启代理
    prefix: '', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {  // 设置代理
    '/kuaiyipai-api': {
      target: 'http://sit.kypapp.in.houbank.net',
      changeOrigin: true,
      pathRewrite: {
        '^/kuaiyipai-api': '/kuaiyipai-api',
      },
    }
  },

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
    middleware: 'serve',
    // linkActiveClass: 'link-active',
    // extendRoutes(routes) {
    // },
    // scrollBehavior(to, from, savedPosition) {
    //   return { x: 0, y: 100 }
    // },
  },

  /*
  ** Build configuration
  */
  build: {
    filenames: {
      chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[chunkhash].js',
      img: ({ isDev }) => isDev ? 'img/[hash:7].[ext]' : 'img/[hash:7].[ext]'
    },
    loaders: {
      imgUrl: { limit: 4000 },
      less: {

      }
    },

    analyze: process.argv.join('').includes('analyze'), // 分析
    maxChunkSize: 360000, // 单个包最大尺寸
    extractCSS: true, // 单独提取 css， 公共组件的css多次提取
    postcss: {
      'postcss-custom-properties':{ warnings: false },
      plugins:[require('autoprefixer')({
        "browsers": [
          "defaults",
          "not ie < 11",
          "last 2 versions",
          "> 1%",
          "iOS 7",
          "last 3 iOS versions"
        ]
      })]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          expansions: {
            name: 'expansions',
            test(module) {
              return /swiper|Dialog/.test(module.context);
            },
            chunks: 'initial',
            priority: 10,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          },
          // page -> 合并组件会导致运行异常
          /*
          page: {
            name: 'page',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
            priority: -20
          }
          */
        }
      }
    },
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

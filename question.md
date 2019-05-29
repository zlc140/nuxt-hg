### nuxt项目开发中遇到的问题及解决

 1. 引入less，不能只install less-loader ,还要install less, 不需配置，直接使用
 2. 使用scss node-sass sass-loader scss-loader --save-dev
 3. vuex 使用方法


      - a.文件夹store下添加index,包含actions, mutations, state, getters...
      - b.通过fetch调用store实例上的方法获取数据或者更新数据 
        * i. store.dispath('') === 调用action获取异步数据=》mutation修改数据，一般用于异步获取数据
        * ii. store.commit('',data) 修改数据，异步操作不在store中
        * iii. store.getter.getStatus;获取想要的state值
      - c.mapState state辅助函数，减少计算属性代码冗余重复
        computed: {
          ...mapState({
            status: 'status',
            status: (state) => state.status
          })
          ...mapState(['status'])
        }
      - d. mapMutations 辅助函数
      ...mapMutations([
               'GET_STATUS' // GET_STATUS 映射到this.GET_STATUS(),进行commit
             ]),
             GET_STATUS() {
               this.$store.commit('GET_STATUS', 3)
             },
      - e. 添加vuex之后可以通过this.$store直接获取相关方法和state
      - f.直接在store下建模板文件可生成对应的模板store,是融合到总的store中的，（总的不能是createStore）

 4. vue报错
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
情况描述： 但组件中使用了template属性时会报错，或者既没有指定render也没有使用template
原因： Vue有两种模式，runtime Only(运行的js是编译好的，代码体积小) 和 runtion compiler(需要在客户端编译，所以代码体积较大)
解决： 
      - 1.尽量不使用template,用render
      - 2.在webpack设置中添加
```js
   resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
   }
```

> 5.添加组件plugins
  
```js
//引入插件
//message.js
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'// https://github.com/se-panfilov/mini-toastr

miniToastr.init()

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)

//nuxt.config.js
  plugins: [
    {src: '~/plugins/message'},
    {src: '~/plugins/vue-notifications', ssr: false} //只在客户端使用
  ]
  
  //自定义
  
  Vue.install = function(vue, options) {
   // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
      console.log('myGlobalMethod')
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
    })
  
    // 3. 注入组件
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log('myMethod')
    }
  }
  
  //全局组件
  //component.js
  Vue.component(Dialog, Dialog);
  // main.js
  Vue.use(Dialog)
  
  
  
```
## nuxt.config.js配置
6.mode配置
 * a. mode 设置  'spa'(客户端加载+路由), 'universal'（服务端加载+路由）
 * b.注意：在配置为服务端渲染的时候，fetch,asyncData中的ajax请求的地址需要配置服务端的URL

7.部署
  - 1.服务端渲染  拷贝build之后的.nuxt文件夹到服务器地址目录下，新建package.json,添加命令：nuxt start就可以了
      服务端渲染时请求地址要么通过server.js配置代理，要么在请求前就改成完成地址
  - 2.客户端渲染  nuxt build之后直接把dist文件拷贝到服务器，nginx设置api代理, 如何不在根目录记得根据情况配置路径

8.添加预加载 
这里别的页面的js会一起加载，performance和resourceHints关闭无效，实验了下nuxt更新到最新可以
 ```js
{
    performance: { //无效？？？开启关闭预加载
      prefetch: false
    },
    render: {
      resourceHints: false, //无效？？？
      bundleRenderer: {
        shouldPreload: (file, type) => { //添加之后有些js就有了预加载
          return ['script','style','font'].includes(type)
        }
      }
    }
 }
 ```
 9. 中间件 middleware 
    a. 直接在nuxt.config.js的router引入，路由改变就会触发（一般用于路由判断最不同操作）
    b. 直接在页面/组件中引入，进入页面时调用，可以用来处理store
```js
   export default function({route,store,redirect}) {
     if(route.path == '/aboutUs') {
       store.commit('SET_STATUS',2)
     }else{
       store.commit('SET_STATUS',1)
       return redirect('/')
     }
   }
   //nuxt.config.js
   router: {
       middleware: 'serve'
    }
    
   
   export default function({store,redirect}) {
     console.log(store)
     store.dispatch('GET_STATUS')
   }
    //index.vue
    export default {
      middleware: 'auth'
    }
 ``` 
10. 配置autoprefixer
 ```js
{
  build: {
    analyze: process.argv.join('').includes('analyze'), // 分析 运行 nuxt build --analyzer
    maxChunkSize: 360000, // 单个包最大尺寸
    extractCSS: true, // 单独提取 css， 公共组件的css会多次提取，所以公共组件的css可以直接放在公共css 中
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
    }
  }
}
 ``` 
 
 11.本地请求跨域配置
```js
{
 axios: {
     proxy: true, // 表示开启代理
     prefix: "", // 表示给请求url加个前缀 /api
     credentials: true // 表示跨域请求时是否需要使用凭证
     // See https://github.com/nuxt-community/axios-module#options
   },
   proxy: {  // 设置代理
     '/kuaiyipai-api': {
       target: 'http://sit.kypapp.in.houbank.net',
       changeOrigin: true,
       pathRewrite: {
         '^/kuaiyipai-api': '/kuaiyipai-api'
       }
     }
   }
}
```

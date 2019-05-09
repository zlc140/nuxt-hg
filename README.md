# hg_ssr_web

> 厚冠官网

> nuxtjs + axios + less + koa
## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# 服务端渲染模式，需要服务器安装node+npm环境
$ npm run build
$ npm start

# 静态网页模式。只需去dist下的文件放到服务器即可
# tip: 如果不放在根目录，需要在nuxt.config.js 配置router的base;nginx加代理
  js:
 router: {
    base: process.env.NODE_ENV === 'production' ?'/app/': '/'
    // middleware: 'serve'
  },
  nginx :
  location /app/ {
             root $webroot; 
  	   try_files $uri $uri/ /app/index.html;
  }
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

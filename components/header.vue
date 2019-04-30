<template>
  <div class="header-warp" :class="{dark_head: type == '2'}">
      <div class="header-body container">
          <div class="logo-box" @click="goHome">
<!--            <img src="/img/index/logo_header.png" alt="">-->
          </div>
        <div class="header-title">
           <div class="nav-item" v-for="(item,index) in navList" :key="index" >
             <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
           </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    fetch({store}) {
      console.log(store,'store')
    },
    created() {
      console.log(this)
    },
    // watch: {
    //   $route: {
    //     handler: function(val, oldVal){
    //       // console.log(val,'222');
    //     },
    //     // 深度观察监听
    //     deep: true
    //   }
    // },
    props: ['type'],
    data() {
      return {
        navList: [
          { name: '首页', path: '/'},
          { name: '贷款指南', path: '/handbook'},
          { name: '服务对象', path: '/clients'},
          { name: '关于我们', path: '/aboutUs'},
        ]
      }
    },
    methods: {
      goHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="less" >
   .header-warp{
     width: 100%;
     height: 85px;
     position: absolute;
     top: 0;
     left: 0;
     z-index: 11;
     background-color: rgba(0,0,0,0);
     .logo-box{
       color:#fff;
       width: 140px;
       height: 35px;
       display: inline-block;
       background-image: url('/img/index/logo_header.png');
       background-size: 140px 35px;
     }
     .header-body{
       height: 100%;
       display: flex;
       clear: both;
       flex-flow: row nowrap;
       justify-content: space-between;
       align-items: center;
     }
     .header-title{
       display: inline-block;
       _zoom:1;
       a{
         font-size: 16px;
         color: #fff;
         text-underline: none;
       }
       display: flex;
       clear: both;
       .nav-item{
         margin-left: 56px;
         float: left;
       }
     }

     &.dark_head{
       .logo-box{
         background-image: url('/img/index/grend_logo.png');
       }
       .header-title{
         a{
            color: #333;
         }
       }
     }
   }
</style>

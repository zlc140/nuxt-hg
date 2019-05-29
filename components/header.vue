<template>
  <div class="header-warp" :class="{dark_head: $store.state.headerBar == '2'}">
      <div class="header-body container">
          <div class="logo-box" @click="goHome">
<!--            <img src="~assets/img/index/logo_header.png" alt="">-->
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
      // console.log('store',store.getters.getStatus())
    },
    created() {
      //console.log(this)
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

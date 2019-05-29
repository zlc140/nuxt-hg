<template>
  <div class="footer-warp">
      <div class="footer-title">
        <div class="nav-item" v-for="(item,index) in navList" :key="index" >
          <nuxt-link class="name-title" :to="item.path" v-if="item.path">{{item.name}}</nuxt-link>
          <span class="name-title" @click="toogleTip" v-else>{{item.name}}</span>
        </div>
      </div>
      <div class="footer-record">Copyright 2019 houguanfin.com,All Rights Reserved. 上海厚冠信息咨询有限公司</div>
      <div class="footer-record">沪ICP备18028827号-1 &nbsp;&nbsp;&nbsp;
<!--        <img src="https://static.houbank.com/hb-web/img/country.96ead78.png" />沪公网安备 <a href="">31010102002097号</a>-->
      </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        navList: [
          { name: '官方微信', path: ''},
          { name: '官方微博', path: ''},
          { name: '客服邮箱', path: ''},
          { name: '加入我们', path: ''},
        ]
      }
    },
    methods: {
      toogleTip(){
        this.showTip()
      }
    },
    notifications: {
      showTip: {
        title: '亲爱的用户：',
        message: '我们的营销账号建设中，敬请期待！',
        type: 'info',
        timeout: 3000
      }
    }

  }
</script>

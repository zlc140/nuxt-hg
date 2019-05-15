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

<style lang="less" >
  .footer-warp{
    width: 100%;
    height: 146px;
    text-align: center;
    padding-top: 28px;
    .footer-title{
      width: 800px;
      margin: 0 auto 34px;
      display: flex;
      clear: both;
      justify-content: space-between;
      .nav-item{
        float: left;
        .name-title{
          cursor: pointer;
          font-size: 16px;
          color: #333;
          text-underline: none;
        }
      }
    }
    .footer-record{
      font-size: 14px;
      text-align: center;
      color: #333;
      a{
        font-size: 14px;
        color: #333;
      }
      img{
        display: inline-block;
        width: 17px;
        height: 19px;
        margin-right: 4px;
        margin-bottom: -4px;
      }
    }
  }
</style>

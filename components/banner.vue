<template>
  <div class="banner-warp"
       :class="{attach: type == '1'}"
       :style="{backgroundImage:'url('+ imgSrc +')',backgroundPosition: 'top left'}">
    <div class="img-box" :class="{right_logo: type == '2'}">
      <img :src="banner_logo" alt="" >
      <div class="right-icon" v-if="type == 1"></div>
    </div>

  </div>
</template>

<script>

  export default {
    props: {
      imgSrc: {
        type: String,
        default: 'https://raw.githubusercontent.com/zhangZhiHao1996/image-store/master/react-admin-master/bg1.jpg'
      },
      type: {
        type: String,Number,
        default: 0
      },
    },
    data() {
      return {
        banner_logo: '/img/index/logo_banner.png'
      }
    },
    created() {
      if(this.type == '2') {
        this.banner_logo = '/img/index/logo_right.png'
      }
    }

  }
</script>

<style lang="less" >
  .banner-warp{
    width: 100%;
    height: 391px;
    background-repeat: no-repeat;
    background-size: 1920px 391px;
    background-position: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .img-box{
      width: 13.6vw;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    img{
      display: inline-block;
      width: 100%;
      /*margin: auto;*/
    }
    .right_logo{
      width: 900px;
      text-align: right;
      img{
        width: 21.7vw; //464px
      }
    }
  }
  .banner-warp.attach{
    background-position: 50% 0%;
    background-attachment: fixed;
  }
</style>

<template>
  <div class="main" :style="{overflow: dialogVisiable? 'hidden': 'auto'}">
    <Banner type="2" :imgSrc="require('../assets/img/handbook/banner_client.png')"/>
    <div class="client-wrap">
      <div>
        <div class="app-HQB icon"></div>
        <p class="title">厚钱包APP</p>
        <p class="desc">为拥有信用卡或公积金客户提供的线上贷款APP</p>
        <div class="btn">
          立即申请<span class="icon-qcode"></span>
          <div class="big-icon-qcode"></div>
        </div>
      </div>
      <div>
        <div class="app-XXZH icon"></div>
        <p class="title">线下综合产品</p>
        <p class="desc">按客群分类为适用人群提供线下贷款业务</p>
        <div class="btn" @click="handleClick">了解详情</div>
      </div>
    </div>
    <Dialog title="线下使用人群" :dialogVisiable.sync="dialogVisiable" >
      <ul class="dalog-list">
        <li>
          <div class="list_1"></div>
          <p>缴纳公积金的机关事业和国有企业客户</p>
        </li>
        <li>
          <div class="list_2"></div>
          <p>正常缴纳公积金的客户</p>
        </li>
        <li><div class="list_3"></div><p>月均收入不低于2千的客户</p></li>
        <li><div class="list_4"></div><p>正常缴纳社保的客户</p></li>
        <li><div class="list_5"></div><p>使用过微粒贷授信额度的客户</p></li>
        <li><div class="list_6"></div><p>有房产的客户</p></li>
        <li><div class="list_7"></div><p>有寿险保单的客户</p></li>
        <li><div class="list_8"></div><p>企业法人代表或股东</p></li>
      </ul>
    </Dialog>
  </div>
</template>
<script>
  import Banner from '~/components/banner'
  import Dialog from '~/components/dialog'

  export default {
    head () {
      return {
        title: '服务对象',
        meta: [
          { hid: 'description', name: 'description', content: '厚冠咨询服务对象' }
        ]
      }
    },
    components: {
      Banner,Dialog
    },
    data() {
      return {
        dialogVisiable: false,
      }
    },
    methods: {
      handleClick() {
        this.dialogVisiable = true;
      }
    }
  }
</script>
<style lang="less" scoped>
  //.prefixPx(@px) {
     // return 100*@px/1920
  //}
  @bgcardList:1,2,3,4,5,6,7,8;
  .backgroundcard(@className,@pngName) {
    .list_@{className} {
      background: url("~assets/img/clients/list_@{pngName}.png")no-repeat center;
      background-size: 100% 100%;

    }
  }
  .loop(@i,@n) when (@i < @n){
    .backgroundcard(extract(@bgcardList, @i),extract(@bgcardList, @i));
    .loop(@i+1,@n);
  }

  .dalog-list{
    padding: 0;
    overflow: hidden;
    clear: both;
    text-align: center;
    .loop(1,9);
    li{
      position: relative;
      display: inline-block;
      list-style: none;
      width: 9.3vw; //180
      height: 9.3vw;
      margin-right: 100*10/1920vw; //10
      margin-bottom: 100*10/1920vw;
      float: left;
      overflow: hidden;
      div{
        width: 100%;
        height: 100%;
        margin: 0;
        transition: all .3s;
      }
      &:nth-child(4n){
        margin-right: 0;
      }
      p{
        width: 100*164/1920vw;
        margin-left: 100*8/1920vw;
        height: 100*44/1920vw;
        position: absolute;
        bottom: 100*10/1920vw;
        font-size: 100*12/1920vw;
        color: #fff;
        text-align: center;
        line-height: 100*22/1920vw;
      }
      transition: all .5s;
      &:hover div{
        width: 110%;
        height: 110%;
        margin-left: -5%;
        margin-top: -5%;
        /*transform: rotate(360deg);*/
      }
    }
  }
  .main{
    overflow: auto;
  }
.client-wrap{
  margin: -27px auto 0;
  width: 1000px;
  display: flex;
  flex-flow: row nowrap;
  height: 494px;
  clear: both;
  &>div{
    width:495px;
    height:441px;
    position: relative;
    float: left;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 8px 0px rgba(0,117,141,0.17);
    border-radius:8px;
    text-align: center;
    &:last-child{
      margin-left: 10px;
    }
    .app-HQB{
      background-image: url("~assets/img/clients/HQB-icon.png");
      background-size: 204px 186px;
    }
    .app-XXZH{
      background-image: url("~assets/img/clients/XXZH.png");
      background-size: 90%;
    }
    .icon{
      margin: 0 auto 10px;
      width: 310px;
      height: 220px;
      background-repeat: no-repeat;
      background-position: center bottom;
    }
    .title{
      text-align: center;
      font-size:28px;
      color:rgba(112,112,112,1);
      line-height:32px;
      margin-bottom: 10px;
    }
    .desc{
      display: inline-block;
      width:214px;
      height:44px;
      font-size:16px;
      color:rgba(155,155,155,1);
      line-height:22px;
      text-align: center;
      margin-bottom: 10px;
    }
    .btn{
      padding: 0 57px;
      display: inline-flex;
      align-items: center;
      width:281px;
      height:66px;
      background:rgba(53,197,197,1);
      border-radius:33px;
      font-size:28px;
      color:#fff;
      justify-content: center;
      line-height:66px;
      transition: all .5s;
      .icon-qcode{
        display: inline-block;
        background: url("~assets/img/clients/qcode-litter.png") no-repeat center center;
        width: 26px;
        height: 26px;
        margin-left: 25px;
      }
      .big-icon-qcode{
        width:495px;
        height:441px;
        /*display: none;*/
        background:rgba(0,0,0,0.5) url("~assets/img/clients/QRCode.png") no-repeat center center;
        background-size: 50%;
        border-radius:8px;
        position: absolute;
        top: 0;
        left: 0;
        /*transform: scale(0);*/
        display: none;
        transition: all .5s;
      }
      &:hover .big-icon-qcode{
        /*transform: scale(1);*/
        display: block;
      }
    }

  }
}
</style>

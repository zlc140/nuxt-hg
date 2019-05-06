<template>
  <div class="main">
    <Banner type="2" :imgSrc="require('../assets/img/handbook/banner_client.png')"/>
    <div class="process-container">
      <div class="process-item" v-for="(item, index) in list" :key="index">
        <span class="icon" :style="{backgroundImage:'url('+ item.icon +')'}"></span>
        <div>
          <p class="title">{{item.title}}</p>
          <p class="decs">{{item.decs}}</p>
        </div>
      </div>
    </div>
    <div class="main-title">申请流程</div>
    <div class="main-img"></div>
    <div class="process-step">
      <div >
          <div class="step step-1"></div>
          <div class="arrow"></div>
          <div class="step step-2"></div>
          <div class="arrow"></div>
          <div class="step step-3"></div>
          <div class="arrow"></div>
          <div class="step step-4"></div>
          <div class="arrow"></div>
          <div class="step step-5"></div>
      </div>
    </div>
    <div class="content apply-container">
      <p class="title">“信用借款”额度最高达20万</p>
      <div class="apply-list">
        <div><p><span>2000</span>元</p><p>只需月入满</p></div>
        <div><p><span>1</span>天</p><p>到账最快</p> </div>
        <div><p><span>3</span>天</p><p>贷款期限最长</p></div>
        <div><p><span>20</span>万</p><p>金额最高可贷</p></div>
      </div>
      <div class="apply-btn" @click="goApply">立即申请</div>
      <div class="right-icon"></div>
    </div>
    <p class="declare">声明：厚本金融仅为专门经营网贷业务的金融信息服务中介机构，不承担借款人与出借人之间任何交易风险及法律责任。</p>
  </div>
</template>
<script>
  import Banner from '~/components/banner'

  export default {
    head () {
      return {
        title: '贷款指南',
        meta: [
          { hid: 'description', name: 'description', content: '贷款指南' }
        ]
      }
    },
    components: {
      Banner
    },
    data() {
      return {
          list: [
            { icon: require('../assets/img/handbook/client_1.png'), title: '额度高', decs: '借款额度高'},
            { icon: require('../assets/img/handbook/client_2.png'), title: '费用省', decs: '服务费用低'},
            { icon: require('../assets/img/handbook/client_3.png'), title: '到款快', decs: '手续简便，即刻放款'},
            { icon: require('../assets/img/handbook/client_4.png'), title: '期限活', decs: '借款期限可长可短'},
            { icon: require('../assets/img/handbook/client_5.png'), title: '还款易', decs: '官网、APP均可操作'}
          ],
      }
    },
    methods: {
      goApply() {
        if(process.browser){
          // window.location.href='https://ztmkt.houbank.com';
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .declare{
    width: 100%;
    background-color: #fff;
    padding-top:20px;
    font-size:16px;
    font-weight:400;
    color: #333;
    line-height:22px;
    text-align: center;
  }
  .main-title{
    padding: 35px;
    text-align: center;
    font-size:26px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(53,197,197,1);
    line-height:37px;
  }
  .main-img{
    height: 100px;
    background: url("~assets/img/handbook/title_bg.png") no-repeat center;
    background-size: 1920px 100px;
  }
  .process-step{
    width: 100%;
    height: auto;
    background-color: #fff;
  }
  .process-step>div{
    width: 1000px;
    height: 316px;
    display: flex;
    clear: both;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 auto;
    .step-1{
      background-image: url("~assets/img/handbook/step_1.png");
      background-size: 94px 84px;
    }
    .step-2{
      background-image: url("~assets/img/handbook/step_2.png");
      background-size: 76px 84px;
    }
    .step-3{
      background-image: url("~assets/img/handbook/step_3.png");
      background-size: 102px 98px;
    }
    .step-4{
      background-image: url("~assets/img/handbook/step_4.png");
      background-size: 83px 78px;
    }
    .step-5{
      background-image: url("~assets/img/handbook/step_5.png");
      background-size: 91px 84px;
    }
    .step{
      width: 180px;
      height: 180px;
      float: left;
      background-repeat: no-repeat;
      background-position: center;
      transition: all .5s;
      &:hover{
        box-sizing: border-box;
        width: 180px;
        height: 180px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 10px 18px 0 rgba(0,0,0,.26);
        transform: translate3d(0,-4px,0);
      }
    }

    .arrow{
      width: 17px;
      height: 18px;
      float: left;
      margin-top: 82px;
      background: url("~assets/img/handbook/step_right.png") no-repeat center center;
    }

  }
  .process-container {
    margin: -85px auto 0;
    width:1000px;
    height:170px;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 8px 0px rgba(0,117,141,0.17);
    border-radius:8px;
    display: flex;
    clear: both;
    justify-content: space-between;
    padding: 60px 10px;
    flex-flow: row nowrap;
    .process-item{
      display: flex;
      clear: both;
      flex-flow: row nowrap;
      align-items: center;
      color: rgba(0, 117, 141, 1);
      float: left;
      width: 196px;
      span{
        float: left;
        width: 50px;
        height: 50px;
        margin-right: 15px;
        /*background-color: rgba(96, 192, 189, 1);*/
        background-size: 100%;
      }
      &>div{
        float: left;
      }
      .title{
        font-size:16px;
        font-weight:400;
        color:rgba(0,117,141,1);
        line-height:22px;
      }
      .decs{
        font-size:12px;
        font-weight:400;
        color:rgba(0,117,141,0.5);
        line-height:17px;
      }
    }
  }
  .apply-container{
    height:532px;
    padding: 40px 0;
    position: relative;
    /*background:linear-gradient(63deg,rgba(96,192,189,1) 0%,rgba(87,185,184,1) 17%,rgba(62,166,172,1) 46%,rgba(23,135,152,1) 82%,rgba(0,117,141,1) 100%);*/
    background-image: url("~assets/img/handbook/apply_bg.png");
    background-size: 1920px 1312px;
    background-position: 50%;
    background-attachment: fixed;
    .right-icon{
      top: -50px;
    }
    .title{
      text-align: center;
      font-size:26px;
      font-weight:400;
      color:#fff;
      line-height:37px;
    }
    .apply-list{
      margin: 40px auto;
      display: flex;
      width: 1052px;
      flex-flow: row nowrap;
      clear: both;
      &>div{
        margin-right: 13px;
        width:250px;
        height:250px;
        padding: 80px 0;
        border-radius:8px;
        border:1px solid #fff;
        text-align: center;
        float: left;
        &:last-child{
          margin-right: 0;
        }
        p{
          color: #fff;
          font-size:14px;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:20px;
          span{
            font-size:38px;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:53px;
          }
          margin-bottom: 18px;
        }
      }
    }
    .apply-btn{
      margin: 0 auto;
      width:520px;
      height:90px;
      background:rgba(53,197,197,1);
      text-align: center;
      line-height: 90px;
      font-size:28px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
  }
</style>

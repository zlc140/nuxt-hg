<template>
  <div class="main bg-white">
    <div class="container top-warp">
      <div class="bg-warp"></div>
      <div class="right-bottom"></div>
      <div class="introduce" :style="{top: top}">
        <p class="title">平台介绍</p>
        <p>我们成功将金融科技融入信贷产品研发、精准获客、风险管理、资金运营、资产处置等关键环节，打造了适用于不同场景、不同客群的零售金融解决方案。</p>
        <p>凭借行业领先的解决方案和稳健的经营理念，我们已经与多家银行、信托、消费金融公司以及知名互联网金融公司建立长期合作，共同推出了面向多种客群的金融服务方案。</p>
      </div>
    </div>
    <div class="company-history">
      <p class="title">发展历程</p>
      <div class="history">
        <div class="history-title">
          <div class="year">厚冠年</div>
          <div class="month">厚冠月</div>
          <div class="desc">厚冠大事记</div>
        </div>
        <div class="year-box" v-for="(item, index) in list" :key="index">
          <div>
            <span>{{item.year}}</span>
            <span class="arrow-cut">-</span>
          </div>
          <ul>
            <li v-for="(child, innerIndex) in item.list" :key="innerIndex">
              <span>{{child.month}}</span>
              <span class="arrow" :class="{
              top: index == 0 && innerIndex == 0,
              bottom: (index == list.length - 1 && innerIndex == item.list.length -1)}">•</span>
              <span class="desc">{{child.desc}}</span>
              <span class="more-arrow" v-if="index == list.length - 1 && innerIndex == item.list.length -1">---</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cooperate-logo">
        <p class="title">合作伙伴</p>
        <ul>
          <li v-for="(item, index) in cooperates" :key="index" :style="{backgroundImage: 'url('+item.icon+')'}"></li>
        </ul>
      <div class="right-icon"></div>
    </div>
    <div class="concat-our main">
      <div class="concat-info">
        <p class="title">联系我们</p>
        <p>客服热线：400-1728-928(每周一至周日9:00-21:00)</p>
        <p>邮 箱：service@houguantech.com</p>
        <p>公司地址：上海市浦东新区锦康路308号陆家嘴世纪金融广场6号楼7F</p>
      </div>
      <div class="logo-box"></div>
    </div>
  </div>
</template>
<script>

  export default {
    head () {
      return {
        title: '关于我们',
        meta: [
          { hid: 'description', name: 'description', content: '关于我们，客服电话：400-1728-928' }
        ]
      }
    },
    layout: 'aboutLayouts',
    data() {
      return {
        top: '25px',
        list: [
          {year: '2015', list: [
              {month: 3, desc: '上海厚冠信息咨询有限公司成立'},
              {month: 7, desc: '累计撮合借贷金额突破5000万元'},
              {month: 7, desc: '累计撮合借贷金额突破1亿元'},
              {month: 11, desc: '与苏州银行完成首笔业务合作'}
            ]},
          {year: '2016', list: [
              {month: 4, desc: '与广州南粤银行完成首笔业务合作'},
              {month: 6, desc: '厚冠信息旗下厚钱包APP上线'},
              {month: 7, desc: '累计撮合借贷金额突破10亿元'}
            ]},
          {year: '2017', list: [
              {month: 6, desc: '累计撮合借贷金额突破50亿元'},
              {month: 7, desc: '与中邮消费金融有限公司完成首笔业务合作'},
              {month: 9, desc: '与众邦银行完成首笔业务合作'}
            ]},
          {year: '2018', list: [
              {month: 4, desc: '累计撮合借贷金额突破100亿'},
              {month: 8, desc: '与廊坊银行完成首笔业务合作'}
            ]},
          {year: '2019', list: [
              {month: 1, desc: '与韩国友利银行完成首笔业务合作'},
              {month: 2, desc: '收购新疆润亿融资担保有限公司'}
            ]},
        ],
        cooperates: [
          {icon: require('../assets/img/about/91.png'), title: ''},
          {icon: require('../assets/img/about/TD.png'), title: ''},
          {icon: require('../assets/img/about/ice.png'), title: ''},
          {icon: require('../assets/img/about/ronghui.png'), title: ''},
          {icon: require('../assets/img/about/CIS.png'), title: ''},

        ]
      }
    },
    mounted() {
      if(process.browser) {
        window.addEventListener('scroll', this.onScrollTop)
      }
    },
    methods: {
      onScrollTop() {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        let move = 25 + top/4;
        this.top = move < 143 ? (move + 'px') : '143px';
        // console.log(this.top)
      }
    }
  }
</script>
<style lang="less" scoped>
  @baseColor: #35C5C5;
.top-warp{
  width: 960px;
  margin-top: 100px;
  height: 512px;
  .bg-warp{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    background: url("~assets/img/about/banner_about.png") no-repeat top right;
  }
  .right-bottom{
    width: 270px;
    height: 310px;
    position: absolute;
    right: -69px;
    bottom: 0px;
    z-index: 8;
    background-color: #F4F5F9;
  }
  .introduce{
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 25px;
    z-index: 9;
    width:432px;
    padding: 40px;
    height:306px;
    opacity:0.96;
    .title{
      font-size:20px;
      color:rgba(89,87,87,1);
      line-height:28px;
      margin-bottom: 23px;
    }
    p{
      text-align: justify;
      font-size:12px;
      color:rgba(89,87,87,1);
      line-height:20px;
      letter-spacing:1px;
      margin-bottom: 10px;
    }
  }
}
.company-history{
  .title{
    text-align: center;
    font-size:20px;
    color:rgba(89,87,87,1);
    line-height:28px;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  .history{
    padding-top: 50px;
    height:1011px;
    color: @baseColor;
    background:linear-gradient(180deg,rgba(238,249,251,0) 0%,rgba(238,249,251,1) 100%);
  .history-title{
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    width: 600px;
    font-size: 14px;
    padding-bottom: 20px;
    div{float: left;}
    .year{width: 120px;}
    .month{margin-left: 40px;}
    .desc{margin-left: 60px;}
  }
    .year-box{
      margin: 0 auto;
      /*display: flex;*/
      /*flex-flow: row nowrap;*/
      width: 600px;
      clear: both;
      &>div{
        width: 120px;
        font-size: 38px;
        float: left;
        .arrow-cut{
          display: inline-block;
          transform: scale(1.5, 0.5);
        }
      }
      ul{
        float: left;
        li{
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          height: 60px;
          color: @baseColor;
          position: relative;
          span{
            display: inline-block;
            min-width: 20px;
          }

          .desc{
            margin-left: 60px;
            font-size: 14px;
          }
          .arrow{
            width: 20px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            position: relative;
            &:after{
              height: 60px;
              width: 1px;
              border: none;
              background-color: @baseColor;
              position: absolute;
              content: '';
              display: block;
              top: 0;
              left: 9px;
              transform: scale(0.5,1);
            }
            &.top{
              &:after{
                top: 30px;
                height: 30px;
              }
            }
            &.bottom{
              &:after{
                height: 30px;

              }
            }
          }
          .more-arrow{
            width: 26px;
            height: 30px;
            line-height: 30px;
            top: 33px;
            position: absolute;
            left: 17px;
            transform: rotate(90deg) scale(1,0.5);
            letter-spacing: 2px;
          }
        }
      }
    }
  }
 }
  .cooperate-logo{
    width: 100%;
    height:385px;
    text-align: center;
    position: relative;
    background:linear-gradient(63deg,rgba(96,192,189,1) 0%,rgba(87,185,184,1) 17%,rgba(62,166,172,1) 46%,rgba(23,135,152,1) 82%,rgba(0,117,141,1) 100%);
    .right-icon{
      height: 385px;
      background-image: url("~assets/img/index/logo_right_banner.png");
      background-size: auto 385px;
      background-position: right top;

    }
    .title{
      padding: 40px;
      font-size: 28px;
      text-align: center;
      color: #fff;
    }
    ul{
      margin: 0 auto;
      clear: both;
      li{
        display: inline-block;
        width:160px;
        height:160px;
        background:#fff;
        box-shadow:0px 3px 8px 0px rgba(0,117,141,0.2);
        border-radius:4px;
        margin-right: 27px;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
  .concat-our{
    height: 300px;
    padding: 50px;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    .logo-box{
      width: 200px;
      height: 200px;
      background: url("~assets/img/about/logo_about_footer.png") no-repeat top;
      background-size: 190px 163px;
    }
    .title{
      font-size: 20px;
    }
    p{
      margin-bottom: 25px;
      font-size:14px;
      font-weight:400;
      color:rgba(89,87,87,1);
      line-height:20px;
    }
  }
</style>

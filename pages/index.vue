<template>
  <section class="main">
    <Banner type="1" :imgSrc="imgSrc"/>
    <div class="main-container">
       <div class="company-introduce">
          <div class="btn-bg-blue">公司介绍</div>
         <ul>
           <li><span>•</span>上海厚冠信息咨询有限公司（以下简称“厚冠信息”），是专注于消费金融、小微金融的金融科技公司。我们致力于将大数据、人工智能等金融科技与传统零售金融优秀实践相结合，用科技创新助力中国金融业供给侧改革，让中国普通民众和小微企业享受到平等、高效、便捷的金融信息服务。</li>
           <li><span>•</span>我们成功将金融科技融入信贷产品研发、精准获客、风险管理、资金运营、资产处置等关键环节，打造了适用于不同场景、不同客群的零售金融解决方案。</li>
           <li><span>•</span>凭借行业领先的解决方案和稳健的经营理念，我们已经与多家银行、信托、消费金融公司以及知名互联网金融公司建立长期合作，共同推出了面向多种客群的金融服务方案。</li>
         </ul>
       </div>
      <div class="company-concat">
        <div class="btn-color-blue">客服电话</div>
        <span>{{tel}}</span>
      </div>
    </div>
  </section>
</template>

<script>
import Banner from '~/components/banner'
// import { mapState,mapMutations } from 'vuex'
// import { getAuth } from '../api/service'

export default {
  // middleware: 'serve',
  head () {
    return {
      title: '厚冠官网首页',
      meta: [
        { hid: 'description', name: 'description', content: '厚冠官网首页' }
      ]
    }
  },
  // async asyncData() {
  //   let { data } = await getAuth()
  //   console.log(data)
  //   return { 'test': data }
  // },
  //  async fetch ({ store, params }) {
  //    // console.log('store',store,params)
  //   // await store.dispatch('GET_STATUS');
  //    let { data } = await getAuth()
  //    console.log(data)
  //    store.commit('GET_STATUS',data)
  // },
  components: {
    Banner
  },
  mounted() {
    // this.$message({title: 'hello',message: '你丫的'})
    // console.log(this)
  },
  data() {
    return {
      tel: '400-1728-928',
      imgSrc: require('../assets/img/index/banner_index.png')
    }
  }
}
</script>

<style lang="less">

.main-container{
  margin: -30px auto 0;
  width: 920px;
  position: relative;
  padding-bottom: 50px;
}
.company-introduce{
  width:878px;
  margin-right: 42px;
  height: 309px;
  background: url('~assets/img/index/introduce_bg.png') no-repeat 0 0;
  padding:35px 50px;
  ul{
    padding-top: 15px;
    text-align: justify;
    margin-left: 0px;
    width: 566px;
    font-size: 12px;
    line-height: 18px;
    font-weight:400;
    font-family:PingFangSC-Regular;
    color:rgba(74,74,74,1);
    letter-spacing:1px;
    li{
      margin-bottom: 5px;
      list-style: none;
      position: relative;
      span{
        position: absolute;
        left: -20px;
        top: 0;
        width: 20px;
        text-align: center;
        display: inline-block;
        height: 18px;
        line-height: 18px;
        color: rgba(6,203,194,1);
        font-size: 20px;
      }
    }
  }
}
.company-concat {
  position: absolute;
  top: 18px;
  right: 0;
  z-index: 1;
  width:273px;
  height:310px;
  padding: 20px;
  background: url('~assets/img/index/mobile_bg.png') no-repeat 0 0;
  span{
    width:200px;
    height:36px;
    font-size:32px;
    font-family:Arial-ItalicMT;
    font-weight:normal;
    color:rgba(255,255,255,1);
    line-height:37px;
    position: absolute;
    top: 137px;
    left: 36px;
  }
}

</style>

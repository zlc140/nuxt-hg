<template>
  <div class="dialog-ui-plugins">
    <div class="dialog-wrap" v-show="dialogVisiable">
      <div class="dialog-bg" @click="close" v-show="dialogVisiable"></div>
      <div class="dialog-container">
        <div class="dialog__header">
          <div class="dialog__title">{{ title }}</div>
        </div>
        <div class="dialog__body">
          <slot></slot>
        </div>
        <div class="dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Dialog',
    props: {
      title: String,
      dialogVisiable: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      dialogVisiable(newVal,oldVal){
        if(!process.browser)return;
        if(newVal){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'inherit'
        }
      }
    },
    mounted() {
      //document.body.append(this.$el);
    },
    // destroyed() {
    //   Indicator.close();
    //   // 移除元素
    //   this.$el.parentNode.removeChild(this.$el);
    //   // 避免元素未移除
    //   if (document.getElementsByClassName('dialog-ui-plugins') && document.getElementsByClassName('dialog-ui-plugins').length > 0 && document.getElementsByClassName('dialog-ui-plugins')) {
    //     document.getElementsByClassName('dialog-ui-plugins').childNodes && document.body.removeChild(document.getElementsByClassName('dialog-ui-plugins').childNodes[0])
    //   }
    // },
    methods: {
      close() {
        this.$emit('update:dialogVisiable', false) // 传递关闭事件
      },
    }
  }
</script>

<style lang="less" scoped>
  .dialog-wrap{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .dialog-bg{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
    }
    .dialog-container{
      width: 100*920/1920vw; //920 -48vw
      padding: 100*52/1920vw 100*86/1920vw;//50
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-100*285/1920vw);
      height: 100*570/1920vw; //570
      .dialog__title{
        text-align: center;
        padding-bottom: 100*30/1920vw;
        font-size: 100*28/1920vw; //28
        color: #707070;
      }
      .dialog__body{
        width: 100%;
        height: auto;
      }

    }
  }
</style>

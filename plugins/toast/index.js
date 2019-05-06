
/*
* 自定义Toast组件
**/
let Toast = {};
let showToast = false,
  toastVM = false;

Toast.install = function(Vue, options) {
  let opt = {
    defaultType: 'center',
    duration: '2000',
    wordWrap: false
  }

  for(let property in options) {
    opt[property] = options[property]
  }

  Vue.prototype.$toast = function (tips, type) {
    let curType = type ? type : opt.defaultType;
    let wordWrap = opt.wordWrap ? 'lx-word-wrap' : '';
    var style = opt.width ? 'style="width: ' + opt.width + '"' : '';
    let tmp = '<div v-show="show" :class="type" class="lx-toast ' + wordWrap + '" ' + style + '>{{tip}}</div>';

    if(showToast) {

      return;
    }

    if(!toastVM){
      let toastTpl = Vue.extend({
        data: function() {
          return {
            show: showToast,
            tip: tips,
            type: 'lx-toast'+curType
          }
        },
        // template: tmp,
        render(createElement){
          if(this.show){
            return createElement(
              'div',
              {
                class: [this.type,'lx-toast ' + wordWrap],
                style: style,
              },
              this.tip

            )
          }else{
            return createElement('div',
              {
                class: [this.type,'lx-toast ' + wordWrap],
                style: 'display: none',
              },
              '')
          }

        }
      })
      toastVM = new toastTpl();
      let tplEl = toastVM.$mount().$el;
      document.body.appendChild(tplEl)

    }
    toastVM.type = 'lx-toast-' + curType;
    toastVM.tip = tips;
    toastVM.show = showToast = true;

    setTimeout(function () {
      toastVM.show = showToast = false;
    }, opt.duration)
  };

  ['bottom', 'center', 'top'].forEach(function (type) {
    Vue.prototype.$toast[type] = function (tips) {
      return Vue.prototype.$toast(tips, type)
    }
  })

}
export default Toast

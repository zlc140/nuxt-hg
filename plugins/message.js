
import Vue from 'vue'
import Toast from './toast'
import '~/plugins/toast/toast.css'

Vue.use(Toast)

Vue.prototype.$message = (options = {}) => {
  let { title, message } = options;
  console.log(title, message)
}


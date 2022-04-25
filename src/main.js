import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// 引入饿了么UI
import ElementUI from 'element-ui'
// 引入饿了么ui的css样式
import 'element-ui/lib/theme-chalk/index.css'

// 引入scss文件
import '@/styles/index.scss'

// 引入根组件
import App from './App'
// 引入vuex
import store from './store'
// 引入路由
import router from './router'
// 引入一些图标，矢量图
import '@/icons' // icon
// 引入权限管理
import '@/permission' // permission control

// 全局注册中文版饿了么ui
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.x = this
  },
  router,
  store,
  render: h => h(App)
})

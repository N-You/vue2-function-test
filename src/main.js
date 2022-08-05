/*
 * @Description: 
 * @Date: 2022-07-31 22:41:33
 * @LastEditTime: 2022-08-05 16:05:05
 * @FilePath: \vue2-review\src\main.js
 */
import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axiosHttp from './network/axiosRequest'
import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

Vue.use(ElementUI)
Vue.use(store)
Vue.use(axiosHttp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

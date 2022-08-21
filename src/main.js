/*
 * @Description: 
 * @Date: 2022-07-31 22:41:33
 * @LastEditTime: 2022-08-08 22:08:51
 * @FilePath: \vue2-review\src\main.js
 */
import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axiosHttp from './network/axiosRequest'
import Message from './utils/Message';
import App from './App.vue'
import Confirm from "./plugins/confirm/index.js";

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

Vue.use(ElementUI)
Vue.use(store)
Vue.use(axiosHttp)
Vue.use(Message)
Vue.use(Confirm)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

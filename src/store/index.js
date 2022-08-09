/*
 * @Description: 
 * @Date: 2022-08-03 15:07:51
 * @LastEditTime: 2022-08-09 16:45:22
 * @FilePath: \vue2-review\src\store\index.js
 */
import Vuex from 'vuex'
import Vue from 'vue'

import moduleTabel from './module/Tabel'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:()=>({}),
  mutations:{},
  actions:{},
  getters:{},
  modules:{
    moduleTabel
  }
})

export default store
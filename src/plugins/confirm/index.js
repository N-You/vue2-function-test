import Confirm from './confirm.vue'
import Vue from 'vue'

let newInstance;
const ConfirmInstance = Vue.extend(Confirm)

const initInstance = () =>{
  newInstance = new ConfirmInstance()
  document.body.appendChild(newInstance.$mount().$el);//$mount 不传值表示渲染为模板外的函数
}

export default {
  install(Vue){
     let option = (options) =>{
      if(!newInstance) initInstance()
      Object.assign(newInstance, options);//实例化过后为一个对象，可以合并数据
      
      return newInstance.show().then((comfirm)=>{
        newInstance = null
        console.log("success",comfirm);
      }).catch((comfirm)=>{
        newInstance = null
        console.log('error',comfirm);
      })
      }
    Vue.prototype.$confirm = option
  }
}
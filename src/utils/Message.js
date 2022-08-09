/*
 * @Description: 
 * @Date: 2022-08-08 22:06:33
 * @LastEditTime: 2022-08-08 22:08:23
 * @FilePath: \vue2-review\src\utils\Message.js
 */
import {Message} from 'element-ui'

export default {
  install(Vue){
    Vue.prototype.$message = Message
  }
}
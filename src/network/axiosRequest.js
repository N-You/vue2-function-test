/*
 * @Description: 
 * @Date: 2022-08-04 23:11:01
 * @LastEditTime: 2022-08-06 22:36:57
 * @FilePath: \vue2-review\src\network\axiosRequest.js
 */
import axios from 'axios'

const service = axios.create({
  baseURL:undefined,
  timeout:3000,
  withCredentials:true
})

service.interceptors.response.use(res=>{
  return res
})

function request(options){
  options.method = options.method || 'get'
  if(options.method.toLowerCase() === 'get'){
    options.params = options.data
  }
  return service(options)
}

['get','post','put','delete'].forEach(method=>{
  request[method] = ({url,data,...options})=>{
    return request({
      url,
      method,
      data,
      options
    })
  }
})

export default {
  install(Vue){
    Vue.prototype.$axiosHttp = request
  }
}
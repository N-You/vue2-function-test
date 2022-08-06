<!--
 * @Description: 
 * @Date: 2022-07-31 22:41:33
 * @LastEditTime: 2022-08-06 16:33:45
 * @FilePath: \vue2-review\src\App.vue
-->
<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/tabel">表单</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {}
  },
  created(){
    this.$axiosHttp.post({url:'/login'})
  },
  methods:{}
}
</script>

<style>
</style>

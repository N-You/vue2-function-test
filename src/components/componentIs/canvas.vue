<!--
 * @Description: 
 * @Date: 2022-08-04 16:11:29
 * @LastEditTime: 2022-08-13 17:43:22
 * @FilePath: \vue2-review\src\components\componentIs\canvas.vue
-->
<template>
<div>
  <canvas style="border:1px solid black" id="canvas" width="800" height="400"></canvas>
</div>
</template>

<script>
export default{
  data(){
    return {}
  },
  mounted(){
    this.initCanvas()
  },
  methods:{
    initCanvas(){
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, 50, 50)
    }
  }
}
</script>
   
<style></style>
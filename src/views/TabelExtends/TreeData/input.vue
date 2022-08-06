<!--
 * @Description: 
 * @Date: 2022-08-06 22:30:26
 * @LastEditTime: 2022-08-06 23:13:54
 * @FilePath: \vue2-review\src\views\TabelExtends\TreeData\input.vue
-->
<template>
  <div>
    <el-input :value="title"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

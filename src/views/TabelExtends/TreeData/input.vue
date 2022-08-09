<!--
 * @Description: 
 * @Date: 2022-08-06 22:30:26
 * @LastEditTime: 2022-08-09 16:56:34
 * @FilePath: \vue2-review\src\views\TabelExtends\TreeData\input.vue
-->
<template>
  <div class="cell">
    <el-input ref="inpoutRef" v-model="CellValue" @blur="blurFn"></el-input>
  </div>
</template>

<script>

export default {
  data(){
    return {
      CellValue:this.cellValue
    }
  },
  props: {
    cellValue: {
      type: [String, Number],
      default: null,
    },
    transferParams: Function,
    cellDom: Node, // 单元格dom
    row: Object, // 单元格所在行数据
    property: String, // 单元格的key
  },
  methods: {
    blurFn() {
      this.transferParams({
        cellValue: this.CellValue,
        cellDom: this.cellDom,
        row: this.row,
        property: this.property,
      });
    },
  },
  mounted(){
    this.$refs.inpoutRef.focus()
  },
  watch:{
    cellValue(value){
      this.CellValue = value
    },
    CellValue(v){
      this.$emit('update:cellValue',v)
    }
  }
};
</script>

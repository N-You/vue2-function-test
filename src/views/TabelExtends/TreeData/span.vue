<!--
 * @Description: 
 * @Date: 2022-08-06 22:30:39
 * @LastEditTime: 2022-08-09 16:59:03
 * @FilePath: \vue2-review\src\views\TabelExtends\TreeData\span.vue
-->
<script>
export default {
  props: {
    cellValue: {
      type: [Number,String],
      default: '',
    },
  },
  // return 不能返回箭头函数，会报 this 问题
  render: function(h){
    return h('span', {
      class: "cell",
      domProps: {
        innerText: `${this.cellValue}`,
      },
    });
  },
};
</script>

<!--
 * @Description: 
 * @Date: 2022-08-06 22:30:39
 * @LastEditTime: 2022-08-07 22:21:39
 * @FilePath: \vue2-review\src\views\TabelExtends\TreeData\span.vue
-->
<script>
export default {
  props: {
    title: {
      type: Number,
      default: 6,
    },
  },
  // return 不能返回箭头函数，会报 this 问题
  render: function(h){
    return h('span', {
      class: "cell",
      domProps: {
        innerText: `${this.title}`,
      },
    });
  },
};
</script>

/*
 * @Description: 
 * @Date: 2022-08-06 22:30:20
 * @LastEditTime: 2022-08-07 21:25:48
 * @FilePath: \vue2-review\src\views\TabelExtends\TreeData\data.js
 */
import Vue from 'vue'
import ElInput from './input.vue'
import ElSpan from './span.vue'

const inpurtC = Vue.extend(ElInput)
const spanC = Vue.extend(ElSpan)

export default {
  inpurtC,
  spanC
}
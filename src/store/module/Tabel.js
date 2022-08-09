/*
 * @Description: 
 * @Date: 2022-08-09 16:22:53
 * @LastEditTime: 2022-08-09 16:54:50
 * @FilePath: \vue2-review\src\store\module\Tabel.js
 */
const modelTabel = {
  namespaced: true,
  state:()=>({
    cellValue:''
  }),
  mutations:{
    setCellValue(state,value){
      state.cellValue = value
    },
    getCellValue(state){
      return state.cellValue
    }
  },
  actions:{},
}

export default modelTabel
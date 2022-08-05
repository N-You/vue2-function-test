/*
 * @Description: 
 * @Date: 2022-08-04 21:02:24
 * @LastEditTime: 2022-08-04 21:32:23
 * @FilePath: \vue2-review\src\mocks\tabelList.js
 */
const Mock = require('mockjs')

const data = Mock.mock({
  'list|1-10':[
    {
      'id|+1':1,
      'name':"@cname()",
      "title":'@email(@163.com)'
    }
  ]
})

export default data
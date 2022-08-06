/*
 * @Description: 
 * @Date: 2022-08-04 21:02:24
 * @LastEditTime: 2022-08-06 19:32:26
 * @FilePath: \vue2-review\src\mocks\dataDir\tabelList.js
 */
const Mock = require('mockjs')

const data = Mock.mock({
  'list|5-10':[
    {
      'id|+1':1,
      'name':"@cname()",
      "title":'@email(163.com)'
    }
  ]
})

export default data
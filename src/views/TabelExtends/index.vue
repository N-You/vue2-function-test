<!--
 * @Description: 
 * @Date: 2022-08-04 16:11:29
 * @LastEditTime: 2022-08-07 21:39:27
 * @FilePath: \vue2-review\src\views\TabelExtends\index.vue
-->
<template>
  <div>
    <p>table vue-extends hooks练习</p>
    <el-table @cell-dblclick="dblclick" :data="tableData" border>
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <hr/>

    <div class="cell">
      
    </div>
    <SpanRender :title="1"></SpanRender>
  </div>
</template>

<script>
import extendComponents from './TreeData/data.js'
import SpanRender from './TreeData/span.vue'
export default {
  name: "TabelExtends",
  data() {
    return {
      tableData:null
    };
  },
  components:{
    SpanRender
  },
  mounted(){
    this.$axiosHttp.get({url:'/user'}).then((v)=>{
      this.tableData = v.data
      // console.log("🚀 ~ file: index.vue ~ line 37 ~ this.$axiosHttp.get ~ this.tableData", this.tableData)
    })
  },
  methods: {
    dblclick(row, column, cell, event){
      console.log(`row:${row}, column:${column}, cell:${cell}, event:${event}`);

    new extendComponents.spanC(
      {
      propsData:{
        title:'123'
      }
    }
    ).$mount('.cell')
    },
  },
}
</script>

<style></style>

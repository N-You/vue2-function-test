<!--
 * @Description: 
 * @Date: 2022-08-04 16:11:29
 * @LastEditTime: 2022-08-09 20:25:11
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

    <hr />

    <div class="cell"></div>
  </div>
</template>

<script>
import extendComponents from "./TreeData/data.js";
export default {
  name: "TabelExtends",
  data() {
    return {
      tableData: null,
      oldCellValue: null,
    };
  },
  mounted() {
    this.$axiosHttp.get({ url: "/user" }).then((v) => {
      this.tableData = v.data;
      // console.log("🚀 ~ file: index.vue ~ line 37 ~ this.$axiosHttp.get ~ this.tableData", this.tableData)
    });
  },
  methods: {
    dblclick(row, column, cell) {
      if (column.label === "操作" || column.label === "序号") {
        this.$message({
          type: "warning",
          message: "序号列和操作列不能更改",
        });
        return;
      }
      this.oldCellValue = row[column.property];
      let cellValue = row[column.property];
      new extendComponents.inpurtC({
        propsData: {
          cellValue,
          transferParams: this.transferParams,
          cellDom: cell, // 传递这个dom元素
          row: row, // 传递双击的行的数据
          property: column.property, // 传递双击的是哪个字段
        },
      }).$mount(cell.children[0]);
    },

    transferParams(params) {
      console.log(
        "🚀 ~ file: index.vue ~ line 67 ~ transferParams ~ params",
        params
      );
      if (params.cellValue == this.oldCellValue) {
        console.log("未修改数据，不用发请求");
        return;
      }
      params.row[params.property] = params.cellValue;
      // 这里模拟一下发了请求，得到最新表体数据以后，更新tableData
      setTimeout(() => {
        //        给那个数组的     第几项            修改为什么值
        this.$set(this.tableData, params.row.index, params.row);
      }, 300);
      new extendComponents.spanC({
        propsData: {
          cellValue: params.cellValue,
        },
      }).$mount(params.cellDom.children[0]);
    },
  },
};
</script>

<style></style>

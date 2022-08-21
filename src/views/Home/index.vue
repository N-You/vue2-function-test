<!--
 * @Description: 
 * @Date: 2022-08-04 22:47:05
 * @LastEditTime: 2022-08-13 16:45:52
 * @FilePath: \vue2-review\src\views\Home\index.vue
-->
<template>
  <div>
    <p>动态组件测试</p>
    <el-button @click="change">切换</el-button>
    <component :is="cName"></component>

    <p>v-slot测试</p>
    <slotTest>
      <template v-slot:header="slotProps">
        <h1>Here might be a page title || {{ slotProps.user.firstName }}</h1>
      </template>
      <template v-slot="slotProps2">
        123{{ slotProps2.user2.firstName }}
      </template>
    </slotTest>

    <p>模态窗口测试</p>
    <button @click="showConfirm">开关</button>
  </div>
</template>

<script>
import ComponentOne from "@/components/componentIs/canvas.vue";
import componentTwo from "@/components/componentIs/component-tow.vue";
import slotTest from "@/components/slotTest/current-user.vue";
import Confirm from "@/plugins/confirm/confirm.vue";
export default {
  name: "Home",
  data() {
    return {
      cName: "ComponentOne",
      visible: false,
    };
  },
  methods: {
    change() {
      this.cName =
        this.cName === "ComponentOne" ? "componentTwo" : "ComponentOne";
    },
    showConfirm() {
      this.$confirm({
        title: "just go go",
      })
    },
  },
  components: {
    ComponentOne,
    componentTwo,
    slotTest,
    Confirm,
  },
};
</script>

<style></style>

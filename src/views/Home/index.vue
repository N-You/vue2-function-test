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
        <h1>Here might be a page title || {{slotProps.user.firstName}}</h1>
      </template>
      <template v-slot="slotProps2">
      123{{slotProps2.user2.firstName}}
      </template>
    </slotTest>
  </div>
</template>

<script>
import ComponentOne from "@/components/componentIs/canvas.vue";
import componentTwo from "@/components/componentIs/component-tow.vue";
import slotTest from "@/components/slotTest/current-user.vue";
export default {
  name: "Home",
  data() {
    return {
      cName: "ComponentOne",
    };
  },
  methods: {
    change() {
      this.cName =
        this.cName === "ComponentOne" ? "componentTwo" : "ComponentOne";
    },
  },
  components: {
    ComponentOne,
    componentTwo,
    slotTest,
  },
};
</script>

<style></style>

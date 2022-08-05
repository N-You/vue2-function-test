/*
 * @Description:
 * @Date: 2022-08-03 15:07:45
 * @LastEditTime: 2022-08-05 18:20:31
 * @FilePath: \vue2-review\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

const Tabel = ()=>import("@/views/TabelExtends/index.vue")
const Home =  () => import("@/views/Home/index.vue")

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:'Home',
    component: Home
  },
  {
    path:"/tabel",
    name:"Tabel",
    component:Tabel
  }
];

const router = new VueRouter({
  routes,
});

export default router;

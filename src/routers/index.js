import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter); // Sử dụng Vue Router

const routes = [
  {
    path: "/homePage", // Chỉnh sửa path thành "/"
    component: HomePage, // Trang chính khi vào "/"
    meta: { layout: "empty" }, // Không hiển thị App.vue
  },
  {
    path: "/login",
    component: Login,
    meta: { layout: "empty" }, // Không hiển thị App.vue
  },
  {
    path: "/register",
    component: Register,
    name: Register,
    meta: { layout: "empty" }, // Không hiển thị App.vue
  },
  { path: "/helloWorld", component: HelloWorld, meta: { layout: "empty" } }, //trang 404 :v
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

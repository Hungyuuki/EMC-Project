import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

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
    meta: { layout: "empty" }, // Không hiển thị App.vue
  },
];

const router = new VueRouter({
  mode: "history", // Sử dụng history mode thay vì createWebHistory()
  routes,
});

export default router;

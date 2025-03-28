import Vue from "vue";
// Import Vue.js vào project.
import App from "./App.vue";
// Import component gốc App.vue.
import router from "./routers";
//import Vuex
// import store from "./stores";
// Import BootstrapVue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//import bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//kích hoạt BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router, // Thêm router vào Vue instance
  render: (h) => h(App),
}).$mount("#app");

/**
 *Tạo một instance Vue mới.
 Render toàn bộ nội dung của App.vue vào phần tử có id="app" trong index.html.
 main.ts (hoặc main.js): Điểm khởi chạy chính của ứng dụng, nơi Vue được khởi tạo.
 */

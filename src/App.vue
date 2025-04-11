<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">E-Commerce</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/homePage">Trang chủ</b-nav-item>
          <b-nav-item to="/register">Đăng ký</b-nav-item>
          <b-nav-item to="/login">Đăng nhập</b-nav-item>
          <b-nav-item to="/products">Danh sách sản phẩm</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container>
      <!-- <HelloWorld /> -->
      <router-view />
    </b-container>
  </div>
</template>
<script>
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   components: {
//     HelloWorld,
//   },
// };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

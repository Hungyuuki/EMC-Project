<template>
  <b-container class="text-center mt-5">
    <h1>Trang chủ</h1>
    <p>Chào mừng bạn đến với ứng dụng Vue.js!</p>
    <b-button variant="primary" @click="goToRegister">Đăng ký ngay</b-button>
  </b-container>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

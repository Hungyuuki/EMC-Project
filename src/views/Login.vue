<template>
  <div class="login">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="handleLogin">
      <input
        v-model="credentials.username"
        placeholder="Tên đăng nhập"
        required
      />
      <input
        v-model="credentials.password"
        type="password"
        placeholder="Mật khẩu"
        required
      />
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import { login } from "@/services/authService";

export default {
  name: "LoginPage", // Sửa thành tên nhiều từ
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      try {
        const { data } = await login(this.credentials);
        localStorage.setItem("token", data.token);
        this.$router.push("/");
      } catch (error) {
        console.error("Đăng nhập thất bại", error);
      }
    },
  },
};
</script>

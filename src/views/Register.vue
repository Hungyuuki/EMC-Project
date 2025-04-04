<template>
  <b-container class="mt-5">
    <b-row class="justify-content-center">
      <b-col md="6">
        <h2 class="text-center">Đăng ký</h2>
        <b-form @submit.prevent="handleRegister">
          <b-form-group label="Tên đăng nhập">
            <b-form-input v-model="user.username" required></b-form-input>
          </b-form-group>

          <b-form-group label="Email">
            <b-form-input
              v-model="user.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Mật khẩu">
            <b-form-input
              v-model="user.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success" block>Đăng ký</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { register } from "@/services/authService";

export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        role: "CUSTOMER",
      },
    };
  },
  methods: {
    async handleRegister() {
      try {
        await register(this.user);
        alert("Đăng ký thành công");
        this.$router.push("/login");
      } catch (error) {
        alert("Đăng ký thất bại");
        console.error("Đăng ký thất bại", error);
      }
    },
  },
};
</script>

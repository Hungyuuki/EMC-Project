import { login, register } from "@/services/authService"; //import 2 hàm từ file js trên

export default {
  namespaced: true,
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    LOGOUT(state) {
      state.user = null;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    async register({ commit }, userData) {
      try {
        await register(userData);
      } catch (error) {
        console.error(error);
      }
    },
    async login({ commit }, credentials) {
      try {
        const { data } = await login(credentials);
        commit("SET_TOKEN", data.token);
        commit("SET_USER", data.user);
      } catch (error) {
        console.error(error);
      }
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
  },
};

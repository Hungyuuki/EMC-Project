import axios from "axios";
const API_URL = "http://localhost:8080/api/auth";
// giả sử BE chạy trên cổng 8080, có dùng auth bằng jwt

export const register = async (userData) => {
  //  xử lý đồng bộ khi nhiều ng đăng ký cùng lúc, nhận vào userData, trả về.
  //Dùng axios.post() để gửi request với dữ liệu user.
  return axios.post(`${API_URL}/register`, userData);
};
//  Tương tự signin
export const login = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

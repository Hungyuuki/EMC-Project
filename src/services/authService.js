import axios from "axios";
const API_URL = "http://localhost:8080/auth";
// giả sử BE chạy trên cổng 8080, có dùng auth bằng jwt

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Trả về dữ liệu từ backend
  } catch (error) {
    console.error("Đăng ký thất bại!", error.response?.data || error.message);
    throw error;
  }
};
//  Tương tự signin
export const login = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

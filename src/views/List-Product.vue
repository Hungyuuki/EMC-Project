<template>
  <div class="product-list">
    <h1>Danh sách sản phẩm</h1>
    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng tồn</th>
          <th>Danh mục</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }} đ</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.category.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListProduct",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("http://localhost:8080/products") // Đổi lại nếu bạn có path khác
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error("Lỗi khi tải danh sách sản phẩm:", error);
        });
    },
  },
};
</script>

<style scoped>
.product-list {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background-color: #f2f2f2;
}
td,
th {
  text-align: left;
  padding: 8px;
}
</style>

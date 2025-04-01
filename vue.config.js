const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": require("path").resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    port: 4200, // Đặt cổng chạy cho frontend là 4200
    proxy: "http://localhost:8080", // Chỉ định backend (nếu cần)
  },
});

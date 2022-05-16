const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    bundle: ["./src/index.js", "./src/test.js"] ,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  mode: "development",
  // watch:true,
  plugins: [new htmlWebpackPlugin(), new CleanWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    open: true,
    compress: true,
    port: 8080,
  },
  optimization: {
      
  }
};

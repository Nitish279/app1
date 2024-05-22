const { merge } = require("webpack-merge");
const common = require("../webpack.common.js");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = merge(common, {
  entry: "./src/index",
  devServer: {
    port: 3003,
  },
  output: {
    publicPath: "http://localhost:3003/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./App1": "./src/App.js",
      },
      shared: [],
    }),
  ],
});

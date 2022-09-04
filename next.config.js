const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  webpack(config, options) {
    config.optimization = {
      minimize: true,
      minimizer: [new HtmlMinimizerPlugin(), new CssMinimizerPlugin()],
    };
    return config;
  },
  assetPrefix: "./",
  experimental: {
    images: {
      unoptimized: true,
    },
  }
};

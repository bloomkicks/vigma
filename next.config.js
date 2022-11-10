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
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  env: {
    SERVICE_ID: "service_kiq0jp9",
    TEMPLATE_ID: "template_hci5war",
    USER_ID: "user_2FU0yfDjTaoUzX8yIWhal",

    // ASSETS
    MAIN_ASSETS: "./images",
    HERO_ASSETS: "./images/hero",
    ADVANTAGES_ASSETS: "./images/advantages",
    PRODUCTS_ASSETS: "./images/products",
    GENERAL_ASSETS: "./images/general",
    QUIZ_ASSETS: "./images/quiz",
  },
};

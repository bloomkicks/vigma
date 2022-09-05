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
  },
  env: {
    SERVICE_ID: "service_kiq0jp9",
    TEMPLATE_ID: "template_hci5war",
    USER_ID: "user_2FU0yfDjTaoUzX8yIWhal",
    // ASSETS
    MAIN_ASSETS: "./pictures/main",
    QUIZ_ASSETS: "./pictures/quiz",
    CONTACTS_ASSETS: "./pictures/contacts",
    WORKS_ASSETS: "./pictures/works",
    ABOUT_US_ASSETS: "./pictures/about-us",
    REVIEWS_ASSETS: "./pictures/reviews",
    GENERAL_ASSETS: "./pictures/general",
    LOGOS_ASSETS: "./logos"
  },
};

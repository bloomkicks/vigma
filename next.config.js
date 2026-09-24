const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
  // assetPrefix: "./",
  images: {
    unoptimized: true,
  },
  webpack(config, options) {
    config.optimization = {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new HtmlMinimizerPlugin(),
        new TerserPlugin(),
      ],
    };
    return config;
  },
  env: {
    SERVICE_ID: "NAH",
    TEMPLATE_ID: "NAH",
    USER_ID: "NAH",

    // ASSETS
    MAIN_ASSETS: "./images",
    HERO_ASSETS: "./images/hero",
    REVIEWS_ASSETS: "./images/reviews",
    ADVANTAGES_ASSETS: "./images/advantages",
    PRODUCTS_ASSETS: "./images/products",
    GENERAL_ASSETS: "./images/general",
    QUIZ_ASSETS: "./images/quiz",
    CERTIFICATES_ASSETS: "./images/certificates",
    SOCIAL_ASSETS: "./images/social",
    METRICA_KEY: "90359214",
  },
};

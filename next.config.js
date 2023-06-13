/** @type {import('next').NextConfig} */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')

const nextConfig = {
  // assetPrefix: './',
  output: "export",
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
    SERVICE_ID: "service_kiq0jp9",
    TEMPLATE_ID: "template_hci5war",
    USER_ID: "user_2FU0yfDjTaoUzX8yIWhal",
  },
};

module.exports = nextConfig;

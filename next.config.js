/** @type {import('next').NextConfig} */
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const withPwa = require("next-pwa")({
  dest: "public",
  sw: "sw.js",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPwa({
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
    SERVICE_ID: "NAH",
    TEMPLATE_ID: "NAH",
    USER_ID: "NAH",
    METRICA_KEY: "NAH",
  },
});

module.exports = nextConfig;

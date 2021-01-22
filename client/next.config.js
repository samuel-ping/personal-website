const withPWA = require("next-pwa");

const debug = process.env.NODE_ENV !== "production";

module.exports = withPWA({
  basePath: !debug ? "/personal-website-v3" : "",
  assetPrefix: !debug ? "/personal-website-v3" : "",
  target: "serverless",
  pwa: {
    dest: "public",
    disable: debug,
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});

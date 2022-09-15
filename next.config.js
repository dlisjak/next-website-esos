module.exports = {
  images: {
    domains: ["localhost", 'www.wp.esos.si', "cdn.sanity.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
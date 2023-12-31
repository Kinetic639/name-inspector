/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require("path");

module.exports = nextConfig;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};
module.exports = {
  env: {
    apiBaseUrl:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://name-inspector-kinetic639.vercel.app",
  },
};

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

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

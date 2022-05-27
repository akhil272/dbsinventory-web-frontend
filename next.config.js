const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
  },
});

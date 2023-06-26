/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  env: {
    USER_TOKEN: 'user-token',
  },
};

module.exports = nextConfig;

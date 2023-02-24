const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = async (phase) => {
  /** @type {import('next').NextConfig} */
  const defaultConfig = {};
  return withPlugins([[withBundleAnalyzer]], {
    output: 'standalone',
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  })(phase, { defaultConfig });
};

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    appDir: true
  },
    async redirects() {
    return [
      {
        source: '/',
        destination: 'https://gtcprime.com',
        permanent: true,
      },
      {
        source: '/uae',
        destination: '/uae/liquidity',
        permanent: true,
      },
    ];
  },
   images: {
    domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
};
 
module.exports = withNextIntl(nextConfig);



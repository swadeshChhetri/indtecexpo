// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // your other options here
};

export default withAnalyzer(nextConfig);


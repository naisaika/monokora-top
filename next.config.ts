import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: true,
  // output: 'export',
  // basePath: "/event", // サイトが配置されるサブディレクトリを指定
  // assetPrefix: "https://www.factorx.jp/event/", // 静的ファイルのベースパスを指定
  images: {
    unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.ap-northeast-1.amazonaws.com',
          port: '',
          pathname: '/event/**',
        },
      ],
    },
};
module.exports = nextConfig;

export default nextConfig;

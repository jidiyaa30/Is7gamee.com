import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/is7game", destination: "/is7-game", permanent: true },
      { source: "/is7gamess", destination: "/is7-gaming", permanent: true },
      { source: "/is7apk", destination: "/is7-apk", permanent: true },
      { source: "/is7gameapk", destination: "/is7-game-apk", permanent: true },
      { source: "/is7gameapkdownload", destination: "/is7-game-apk-download", permanent: true },
      { source: "/is7apkdownload", destination: "/is7-apk-download", permanent: true },
    ];
  },
};

export default nextConfig;

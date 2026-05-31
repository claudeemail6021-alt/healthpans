import type { NextConfig } from "next";
const nextConfig: NextConfig = { eslint: { ignoreDuringBuilds: true }, images: { remotePatterns: [{ protocol:"https", hostname:"m.media-amazon.com" }, { protocol:"https", hostname:"images-na.ssl-images-amazon.com" }], formats:["image/avif","image/webp"] }, compress: true };
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Optional: This step is usually not needed for video files in Next.js
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      type: "asset/resource", // Use the asset module instead of file-loader
      generator: {
        filename: "[path][name][ext]", // Preserve original file structure and name
      },
    });

    return config;
  },
};

export default nextConfig;

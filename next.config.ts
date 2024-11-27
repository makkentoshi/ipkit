import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules = config.module.rules.filter(
      (rule: { test?: RegExp }) =>
        !(rule.test instanceof RegExp && rule.test.test(".svg"))
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "media/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;

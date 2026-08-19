import type { NextConfig } from "next";

/**
 * GitHub Pages project site: https://<user>.github.io/wedding/
 * Override with BASE_PATH= for root hosting (e.g. custom domain).
 */
function getBasePath(): string {
  if (process.env.BASE_PATH !== undefined) {
    return process.env.BASE_PATH.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV === "production") {
    return "/wedding";
  }

  return "";
}

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

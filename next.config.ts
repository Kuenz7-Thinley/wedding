import type { NextConfig } from "next";

// Check if we are running inside GitHub Actions production runner
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// Use the environment variable injected by your workflow, fallback to /wedding
const basePath = isGithubActions ? process.env.BASE_PATH || "/wedding" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

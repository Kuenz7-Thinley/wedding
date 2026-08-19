import type { NextConfig } from "next";

function getBasePath(): string {
  const fromEnv = process.env.BASE_PATH?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  // GitHub Actions project site: https://<user>.github.io/<repo>/
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (process.env.GITHUB_ACTIONS === "true" && repo && !repo.endsWith(".github.io")) {
    return `/${repo}`;
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

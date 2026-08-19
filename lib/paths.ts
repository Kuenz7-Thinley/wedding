/** Base path for GitHub Pages project sites (empty for local dev / custom domains). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix internal asset paths with the Next.js basePath. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

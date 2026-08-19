/** Prefix internal asset paths with the Next.js basePath (inlined at build time). */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}

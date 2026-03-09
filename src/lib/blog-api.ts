/**
 * URLs y fetch del API de blog (radar.bmontero.com).
 */

import type { BlogPost, BlogPostListItem } from "@/types/blog";

const getBaseUrl = (): string => {
  const url = import.meta.env.VITE_BLOG_API_URL;
  if (typeof url !== "string" || !url.trim()) return "";
  return url.replace(/\/$/, "");
};

/** URL del listado de posts: GET .../public.posts */
export function getPostsListUrl(): string {
  const base = getBaseUrl();
  return base ? `${base}/public.posts` : "";
}

/** URL del detalle de un post: GET .../public.posts/:slug */
export function getPostDetailUrl(slug: string): string {
  const base = getBaseUrl();
  return base && slug ? `${base}/public.posts/${encodeURIComponent(slug)}` : "";
}

export function isBlogApiConfigured(): boolean {
  return getPostsListUrl().length > 0;
}

/** Obtiene el listado de posts desde el API público */
export async function fetchPostsList(): Promise<BlogPostListItem[]> {
  const url = getPostsListUrl();
  if (!url) return [];
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/** Obtiene un post por slug desde el API público */
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = getPostDetailUrl(slug);
  if (!url) return null;
  const res = await fetch(url);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
  const data = await res.json();
  return data && typeof data === "object" ? data : null;
}

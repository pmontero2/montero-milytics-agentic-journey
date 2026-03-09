/**
 * API de blog vía proxy mismo-origen (sin CORS).
 * El frontend llama a /api/blog-posts y /api/blog-posts/:id; en dev Vite redirige a radar, en prod Vercel serverless hace de proxy.
 * El API de radar devuelve: id, title, excerpt, content, imageUrl, publishedAt, readingTime, tags.
 */

import type { BlogPost, BlogPostApiItem, BlogPostListItem } from "@/types/blog";

const BLOG_API_BASE = "/api/blog-posts";

/** URL del listado (mismo origen, sin CORS) */
export function getPostsListUrl(): string {
  return BLOG_API_BASE;
}

/** URL del detalle (mismo origen) */
export function getPostDetailUrl(slug: string): string {
  return slug ? `${BLOG_API_BASE}/${encodeURIComponent(slug)}` : "";
}

export function isBlogApiConfigured(): boolean {
  return true;
}

/** Comprueba si la respuesta es JSON; si es HTML lanza error claro. */
async function parseJsonResponse(res: Response): Promise<unknown> {
  const text = await res.text();
  const trimmed = text.trim();
  if (trimmed.startsWith("<")) {
    throw new Error("El servidor devolvió HTML en lugar de JSON. Revisa que el proxy del blog esté bien configurado.");
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Respuesta no válida del API (no es JSON): ${trimmed.slice(0, 80)}...`);
  }
}

function normalizeApiItem(item: BlogPostApiItem): BlogPostListItem {
  return {
    slug: item.id,
    title: item.title,
    excerpt: item.excerpt,
    publishedAt: item.publishedAt,
    coverImage: item.imageUrl ?? undefined,
    tags: item.tags,
  };
}

function normalizeApiPost(item: BlogPostApiItem): BlogPost {
  return {
    ...normalizeApiItem(item),
    body: item.content,
  };
}

/** Obtiene el listado de posts desde el API público */
export async function fetchPostsList(): Promise<BlogPostListItem[]> {
  const url = getPostsListUrl();
  if (!url) return [];
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
  const data = await parseJsonResponse(res);
  if (!Array.isArray(data)) return [];
  return (data as BlogPostApiItem[]).map(normalizeApiItem);
}

/** Obtiene un post por id (slug) desde el listado; el API de radar devuelve cada post completo en la lista. */
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = getPostsListUrl();
  if (!url) return null;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
  const data = await parseJsonResponse(res);
  if (!Array.isArray(data)) return null;
  const raw = (data as BlogPostApiItem[]).find((p) => p.id === slug) ?? null;
  return raw ? normalizeApiPost(raw) : null;
}

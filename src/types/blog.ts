/**
 * Contrato del API de blog (radar.bmontero.com/api/public.posts).
 * Tipos para listado y detalle de posts.
 */

export interface BlogPostListItem {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  coverImage?: string;
  author?: string;
}

export interface BlogPost extends BlogPostListItem {
  body: string; // HTML o Markdown
  createdAt?: string;
}

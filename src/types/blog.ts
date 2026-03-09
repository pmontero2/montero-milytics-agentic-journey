/**
 * Contrato del API de blog (radar.bmontero.com/api/public/posts).
 * Formato real del API: id, title, excerpt, content, imageUrl, publishedAt, readingTime, tags.
 * Normalizamos a slug (id), body (content), coverImage (imageUrl) para uso interno.
 */

/** Formato crudo que devuelve el API */
export interface BlogPostApiItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string | null;
  publishedAt: string;
  readingTime?: number;
  tags?: string[];
}

export interface BlogPostListItem {
  slug: string;  // = id del API para la URL
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: string;
  author?: string;
  tags?: string[];
}

export interface BlogPost extends BlogPostListItem {
  body: string;  // contenido (Markdown); en API viene como content
  createdAt?: string;
}

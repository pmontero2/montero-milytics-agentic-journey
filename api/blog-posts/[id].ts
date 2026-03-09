import type { VercelRequest, VercelResponse } from "@vercel/node";

const RADAR_BASE = process.env.BLOG_API_URL || "https://radar.bmontero.com/api";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = req.query.id;
  if (typeof id !== "string" || !id) {
    return res.status(400).json({ error: "Missing post id" });
  }

  try {
    const url = `${RADAR_BASE}/public/posts/${encodeURIComponent(id)}`;
    const response = await fetch(url);
    if (response.status === 404) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Upstream error: ${response.status}`,
      });
    }
    const data = await response.json();
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    return res.status(200).json(data);
  } catch (err) {
    console.error("[blog-posts/[id]]", err);
    return res.status(502).json({
      error: "Error al obtener el post",
    });
  }
}

import { NextResponse } from "next/server";

// 💡 FIX 1: Helper function to escape XML special characters (especially '&')
const xmlEscape = (str) => {
  if (!str) return str;
  return str.replace(/[&]/g, (c) => {
    switch (c) {
      case '&':
        return '&amp;'; // Escape & to &amp;
      default:
        return c;
    }
  });
};

export async function GET() {
  const baseUrl = process.env.FRONTEND_DOAMIN || "https://lift-konzept-frontend.vercel.app";
  // ... (Data fetching variables remain the same)
  let pagesData = { docs: [] };
  let postsData = { docs: [] };
  let ratgeberData = { docs: [] };

  try {
    // ... (Data fetching logic remains the same)

    const pagesRes = await fetch(`${process.env.PAYLOAD_DOAMIN}/api/pages?limit=1000`);
    if (pagesRes.ok) {
        pagesData = await pagesRes.json();
    } else {
        console.error("Failed to fetch pages:", await pagesRes.text());
    }
    // ... (Fetching posts and ratgeber logic)
    const postsRes = await fetch(`${process.env.PAYLOAD_DOAMIN}/api/posts?limit=1000`);
    if (postsRes.ok) {
        postsData = await postsRes.json();
    } else {
        console.error("Failed to fetch posts:", await postsRes.text());
    }

    const ratgeberRes = await fetch(`${process.env.PAYLOAD_DOAMIN}/api/ratgeber?limit=1000`);
    if (ratgeberRes.ok) {
        ratgeberData = await ratgeberRes.json();
    } else {
        console.error("Failed to fetch ratgeber:", await ratgeberRes.text());
    }

    // Build sitemap URLs
    const urls = [
      ...(pagesData.docs || []).map(
        (pages) => `
          <url>
            <loc>${xmlEscape(baseUrl)}/${xmlEscape(pages.slug)}</loc> 
            <lastmod>${new Date(pages.updatedAt).toISOString()}</lastmod>
          </url>`
      ),
      ...(postsData.docs || []).map(
        (post) => `
          <url>
            <loc>${xmlEscape(baseUrl)}/${xmlEscape(post.slug)}</loc> 
            <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
          </url>`
      ),
      ...(ratgeberData.docs || []).map(
        (item) => `
          <url>
            <loc>${xmlEscape(baseUrl)}/trappenlift-ratgeber/${xmlEscape(item.slug)}</loc> 
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
          </url>`
      ),
    ].join("");

    // ... (Final XML generation remains the same)
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
      </urlset>`;

    return new NextResponse(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}
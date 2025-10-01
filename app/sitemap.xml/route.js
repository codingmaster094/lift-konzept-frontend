import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.FRONTEND_DOAMIN;
  let pagesData = { docs: [] };
  let postsData = { docs: [] };
  let ratgeberData = { docs: [] };

  try {
    // Fetch Posts collection
   const pagesRes = await fetch(`${process.env.PAYLOAD_DOAMIN}/api/pages?limit=1000`);
    if (pagesRes.ok) {
      pagesData = await pagesRes.json();
      console.log('pagesData', pagesData)
    } else {
      console.error("Failed to fetch pages:", await pagesRes.text());
    }

    const postsRes = await fetch(`${process.env.PAYLOAD_DOAMIN}/api/posts?limit=1000`);
    if (postsRes.ok) {
      postsData = await postsRes.json();
    } else {
      console.error("Failed to fetch posts:", await postsRes.text());
    }

    // Fetch Ratgeber collection
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
            <loc>${baseUrl}/${pages.slug}</loc>
            <lastmod>${new Date(pages.updatedAt).toISOString()}</lastmod>
          </url>`
      ),
      ...(postsData.docs || []).map(
        (post) => `
          <url>
            <loc>${baseUrl}/${post.slug}</loc>
            <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
          </url>`
      ),
      ...(ratgeberData.docs || []).map(
        (item) => `
          <url>
            <loc>${baseUrl}/trappenlift_ratgeber/${item.slug}</loc>
            <lastmod>${new Date(item.updatedAt).toISOString()}</lastmod>
          </url>`
      ),
    ].join("");

    // Final XML
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

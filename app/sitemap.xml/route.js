export async function GET() {
  try {
    const res = await fetch(
      "https://lift-konzept-frontend.vercel.app/sitemap.xml",
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch sitemap: ${res.statusText}`);
    }

    const xml = await res.text(); // ✅ Get plain XML text

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("sitemap.xml fetch error:", error);

    // Optional: fallback XML content
    const fallbackXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${
      process.env.FRONTEND_DOAMIN || "https://lift-konzept-frontend.vercel.app"
    }</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;

    return new Response(fallbackXML, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
}

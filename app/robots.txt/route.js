export async function GET() {
  try {
    const res = await fetch(
      "https://lift-konzept-backend.vercel.app/api/globals/robots",
      {
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch robots: ${res.statusText}`);
    }

    const data = await res.json();

    // Convert long-space-separated string to line-by-line format
    const robotsContent = data?.robots
      ?.split(/\s{2,}/) // split by 2+ spaces
      ?.map((line) => line.trim()) // trim each line
      ?.join("\n") // join by newline
      ?.trim();

    if (robotsContent) {
      return new Response(robotsContent, {
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    throw new Error("robots field not found in response");
  } catch (error) {
    console.error("robots.txt fetch error:", error);

    const fallback = [
      "user-agent: *",
      "allow: /",
      "disallow: /admin",
      `sitemap: ${
        process.env.FRONTEND_DOAMIN || "https://lift-konzept-frontend.vercel.app"
      }/sitemap.xml`,
    ].join("\n");

    return new Response(fallback, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}

const site = 'https://vicaria.ca';

export const prerender = true;

export async function GET() {
	const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site}/sitemap.xml
`.trim();

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
}

import { getAllServices } from '$lib/utils/services';

const site = 'https://vicaria.ca';

export async function GET() {
	// Get all services dynamically
	const services = getAllServices();

	// Get all static pages automatically
	const pageFiles = import.meta.glob('/src/routes/**/+page.svelte', { eager: true });

	const staticPages = Object.keys(pageFiles)
		.map((path) => {
			// Convert file path to URL path
			// /src/routes/+page.svelte -> /
			// /src/routes/about/+page.svelte -> /about
			let url = path
				.replace('/src/routes', '')
				.replace('/+page.svelte', '')
				.replace('+page.svelte', '');

			// Ensure URL starts with /
			if (!url.startsWith('/')) {
				url = '/' + url;
			}
			// Remove trailing slash (except for root)
			if (url !== '/' && url.endsWith('/')) {
				url = url.slice(0, -1);
			}

			// Exclude dynamic routes (with brackets) and special routes
			if (url.includes('[') || url.includes('sitemap') || url.includes('robots')) {
				return null;
			}

			// Determine priority based on page
			let priority = 0.8;

			if (url === '/') {
				priority = 1.0;
			} else if (url === '/service' || url.startsWith('/service/')) {
				priority = 0.9;
			} else if (url === '/contact' || url === '/about' || url === '/free-consultation') {
				priority = 0.9;
			}

			return { url, priority };
		})
		.filter((page): page is { url: string; priority: number } => page !== null);

	// Dynamic service pages
	const servicePages = services.map((service) => ({
		url: `/service/${service.slug}`,
		priority: 0.9
	}));

	// Combine all pages
	const pages = [...staticPages, ...servicePages];

	// Generate XML sitemap
	// Note: lastmod omitted because we can't track actual content modification dates
	// Note: changefreq omitted because Google ignores it (confirmed by Google)
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `
	<url>
		<loc>${site}${page.url}</loc>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
}

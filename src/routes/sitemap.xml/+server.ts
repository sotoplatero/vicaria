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
			// /src/routes/+page.svelte -> ''
			// /src/routes/about/+page.svelte -> 'about'
			let url = path
				.replace('/src/routes', '')
				.replace("+page.svelte", '')
				.replace(/\/$/, ''); //	 Remove leading slash

			// Exclude dynamic routes (with brackets) and special routes
			if (url.includes('[') || url.includes('sitemap') || url.includes('robots')) {
				return null;
			}

			// Determine priority based on page
			let priority = 0.8;
			let changefreq = 'monthly';

			if (url === '') {
				// Home page
				priority = 1.0;
				changefreq = 'weekly';
			} else if (url === 'contact' || url === 'about') {
				// Important pages
				priority = 0.9;
				changefreq = 'weekly';
			}

			return {
				url,
				changefreq,
				priority,
				lastmod: new Date().toISOString()
			};
		})
		.filter(Boolean); // Remove null entries

	// Dynamic service pages
	const servicePages = services.map((service) => ({
		url: `/service/${service.slug}`,
		changefreq: 'weekly',
		priority: 0.9,
		lastmod: new Date().toISOString()
	}));

	// Combine all pages
	const pages = [...staticPages, ...servicePages];

	// Generate XML sitemap
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `
	<url>
		<loc>${site}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
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

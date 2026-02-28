import { getAllServices } from '$lib/utils/services';
import { getAllAreas } from '$lib/data/areas';

const site = 'https://vicaria.ca';

export const prerender = true;

export async function GET() {
	const services = getAllServices();
	const areas = getAllAreas();
	const today = new Date().toISOString().split('T')[0];

	// Static pages with accurate lastmod and priority
	const staticPages = [
		{ url: '/', priority: 1.0, lastmod: today, changefreq: 'weekly' },
		{ url: '/service', priority: 0.9, lastmod: today, changefreq: 'weekly' },
		{ url: '/about', priority: 0.8, lastmod: '2026-02-16', changefreq: 'monthly' },
		{ url: '/contact', priority: 0.8, lastmod: '2026-02-16', changefreq: 'monthly' },
		{ url: '/free-consultation', priority: 0.9, lastmod: '2026-02-16', changefreq: 'monthly' },
		{ url: '/pricing', priority: 0.8, lastmod: '2026-02-16', changefreq: 'monthly' },
		{ url: '/blog', priority: 0.7, lastmod: today, changefreq: 'weekly' },
		{ url: '/accessibility', priority: 0.3, lastmod: '2026-02-16', changefreq: 'yearly' },
		{ url: '/privacy', priority: 0.3, lastmod: '2026-01-01', changefreq: 'yearly' },
		{ url: '/terms', priority: 0.3, lastmod: '2026-01-01', changefreq: 'yearly' },
	];

	// Service pages with real dateModified from frontmatter
	const servicePages = services.map((service) => ({
		url: `/service/${service.slug}`,
		priority: 0.9,
		lastmod: service.dateModified || service.datePublished || today,
		changefreq: 'monthly' as const
	}));

	// Blog pages
	const blogPages = [
		{ url: '/blog/bloating-after-eating-hamilton', priority: 0.7, lastmod: '2026-02-20', changefreq: 'monthly' },
	];

	// Area pages from data module
	const areaPages = areas.map((area) => ({
		url: `/areas/${area.slug}`,
		priority: 0.7,
		lastmod: '2026-02-27',
		changefreq: 'monthly' as const
	}));

	const pages = [...staticPages, ...servicePages, ...blogPages, ...areaPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
}

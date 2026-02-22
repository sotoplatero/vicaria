import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

// Exact-path 301 redirects for old indexed URLs
const legacyRedirects: Record<string, string> = {
	// Old /en/ prefix pages (indexed by Google)
	'/en/appointment': '/free-consultation',
	'/en/contactus': '/contact',
	'/en/shop': '/pricing',
	// Old URL slugs (different from current)
	'/about-us': '/about',
	'/our-services': '/service',
	'/contactus': '/contact',
	// Old misc pages
	'/ambassador': '/',
	'/web/login': '/',
	'/offer': '/pricing',
	'/accessibility': '/',
};

export const handle: Handle = ({ event, resolve }) => {
	const url = new URL(event.request.url);
	const { hostname, pathname } = url;

	// 1. www → non-www canonical redirect (301)
	if (hostname.startsWith('www.')) {
		const canonicalUrl = new URL(event.request.url);
		canonicalUrl.hostname = hostname.replace(/^www\./, '');
		throw redirect(301, canonicalUrl.toString());
	}

	// 2. Exact-path legacy redirects
	if (legacyRedirects[pathname]) {
		throw redirect(301, legacyRedirects[pathname]);
	}

	// 3. Old appointment system URLs (all variants with query params)
	if (pathname.startsWith('/appointment/')) {
		throw redirect(301, '/free-consultation');
	}

	// 4. Old shop product pages
	if (pathname.startsWith('/shop/') || pathname === '/shop') {
		throw redirect(301, '/pricing');
	}

	// 5. Catch-all for any remaining /en/* paths
	if (pathname.startsWith('/en/')) {
		throw redirect(301, '/');
	}

	return paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});
};

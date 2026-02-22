import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

const legacyRedirects: Record<string, string> = {
	'/en/appointment': '/free-consultation',
	'/en/contactus': '/contact',
	'/en/shop': '/pricing',
};

export const handle: Handle = ({ event, resolve }) => {
	const pathname = new URL(event.request.url).pathname;

	// 301 redirects for old indexed pages
	if (legacyRedirects[pathname]) {
		throw redirect(301, legacyRedirects[pathname]);
	}

	// Catch-all for any remaining /en/* paths
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

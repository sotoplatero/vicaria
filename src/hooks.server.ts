import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

const handleParaglide: Handle = ({ event, resolve }) => paraglideMiddleware(event.request, ({ request, locale }) => {
	event.request = request;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
	});
});

// Redirect 404s to home for SEO preservation
const handle404Redirect: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// If page not found, redirect to home with 302 (temporary redirect to avoid caching issues)
	if (response.status === 404) {
		throw redirect(302, '/');
	}

	return response;
};

export const handle: Handle = sequence(handleParaglide, handle404Redirect);

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getAllServices } from '$lib/utils/services';

// Enable prerendering for all service pages
export const prerender = true;

// Tell SvelteKit which slugs to prerender
export function entries() {
	return getAllServices().map(service => ({ slug: service.slug }));
}

export const load: PageLoad = async ({ params }) => {
	try {
		// Dynamically import the markdown file
		const post = await import(`$lib/content/services/${params.slug}.md`);
		const canonical = `https://vicaria.ca/service/${params.slug}`;

		return {
			content: post.default,
			metadata: post.metadata,
			canonical
		};
	} catch (e) {
		throw error(404, `Service not found: ${params.slug}`);
	}
};

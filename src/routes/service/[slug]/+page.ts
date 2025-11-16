import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Enable prerendering for all service pages
export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	try {
		// Dynamically import the markdown file
		const post = await import(`$lib/content/services/${params.slug}.md`);

		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch (e) {
		throw error(404, `Service not found: ${params.slug}`);
	}
};

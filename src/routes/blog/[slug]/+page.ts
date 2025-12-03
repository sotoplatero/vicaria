import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getAllPosts } from '$lib/utils/blog';

// Enable prerendering for all blog posts
export const prerender = true;

// Tell SvelteKit which slugs to prerender
export function entries() {
	return getAllPosts().map(post => ({ slug: post.slug }));
}

export const load: PageLoad = async ({ params }) => {
	try {
		// Dynamically import the markdown file
		const post = await import(`$lib/content/blog/${params.slug}.md`);

		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch (e) {
		throw error(404, `Blog post not found: ${params.slug}`);
	}
};

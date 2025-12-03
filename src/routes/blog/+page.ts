import type { PageLoad } from './$types';
import { getAllPosts } from '$lib/utils/blog';

// Enable prerendering for blog index
export const prerender = true;

export const load: PageLoad = async () => {
	const posts = getAllPosts();

	return {
		posts
	};
};

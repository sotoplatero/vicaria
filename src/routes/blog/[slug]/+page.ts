import { error } from '@sveltejs/kit';

const blogContent = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });

export function load({ params }: { params: { slug: string } }) {
	const path = `/src/lib/content/blog/${params.slug}.md`;
	const post = blogContent[path] as any;

	if (!post) {
		throw error(404, 'Blog post not found');
	}

	return {
		content: post.default,
		metadata: {
			slug: params.slug,
			...post.metadata
		}
	};
}

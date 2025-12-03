export interface BlogFAQ {
	question: string;
	answer: string;
}

export interface BlogMetadata {
	slug: string;
	title: string;
	description: string;
	faq?: BlogFAQ[];
	publishedAt?: string;
	updatedAt?: string;
	image?: string;
	author?: string;
}

// Import all blog markdown files with frontmatter
const blogModules = import.meta.glob('/src/lib/content/blog/*.md', {
	eager: true,
	import: 'metadata'
});

export function getAllPosts(): BlogMetadata[] {
	const posts: BlogMetadata[] = [];

	for (const [path, metadata] of Object.entries(blogModules)) {
		// Extract slug from filename (e.g., /src/lib/content/blog/bloating-after-eating-hamilton.md -> bloating-after-eating-hamilton)
		const filename = path.split('/').pop();
		const slug = filename?.replace('.md', '') || '';

		if (metadata) {
			posts.push({
				slug,
				...(metadata as any)
			});
		}
	}

	// Sort by publishedAt date (newest first), or by slug if no date
	return posts.sort((a, b) => {
		if (a.publishedAt && b.publishedAt) {
			return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
		}
		return a.slug.localeCompare(b.slug);
	});
}

export function getPostBySlug(slug: string): BlogMetadata | undefined {
	return getAllPosts().find((p) => p.slug === slug);
}

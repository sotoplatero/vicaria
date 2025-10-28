export interface ServiceMetadata {
	slug: string;
	service: string;
	pain: string;
	solution: string;
	cardIcon: string;
	cardColor: 'primary' | 'secondary' | 'accent';
	title: string;
	city: string;
	description: string;
	category: 'health-coaching' | 'skin-treatments';
}

// Import all service markdown files with frontmatter
const serviceModules = import.meta.glob('/src/lib/content/services/*.md', {
	eager: true,
	import: 'metadata'
});

export function getAllServices(): ServiceMetadata[] {
	const services: ServiceMetadata[] = [];

	for (const [path, metadata] of Object.entries(serviceModules)) {
		// Extract slug from filename (e.g., /src/lib/content/services/chronic-digestive-problems.md -> chronic-digestive-problems)
		const filename = path.split('/').pop();
		const slug = filename?.replace('.md', '') || '';

		if (metadata) {
			services.push({
				slug,
				...(metadata as any)
			});
		}
	}

	return services;
}

export function getServiceBySlug(slug: string): ServiceMetadata | undefined {
	return getAllServices().find((s) => s.slug === slug);
}

export function getHealthCoachingServices(): ServiceMetadata[] {
	return getAllServices().filter((s) => s.category === 'health-coaching');
}

export function getSkinTreatmentServices(): ServiceMetadata[] {
	return getAllServices().filter((s) => s.category === 'skin-treatments');
}

export function getRelatedServices(currentSlug: string, limit = 3): ServiceMetadata[] {
	const current = getServiceBySlug(currentSlug);
	if (!current) return [];

	const allServices = getAllServices();

	// Get services from same category, excluding current
	const related = allServices.filter(
		(s) => s.category === current.category && s.slug !== currentSlug
	);

	// If not enough, add from other category
	if (related.length < limit) {
		const others = allServices.filter(
			(s) => s.category !== current.category && s.slug !== currentSlug
		);
		return [...related, ...others].slice(0, limit);
	}

	return related.slice(0, limit);
}

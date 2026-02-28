import { error } from '@sveltejs/kit';
import { getAreaBySlug, getAreaSlugs } from '$lib/data/areas';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	return getAreaSlugs().map((city) => ({ city }));
}

export const load: PageLoad = ({ params }) => {
	const area = getAreaBySlug(params.city);

	if (!area) {
		throw error(404, `Area not found: ${params.city}`);
	}

	return { area };
};

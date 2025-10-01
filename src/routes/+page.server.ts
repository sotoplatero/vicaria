import type { PageServerLoad } from './$types';
import { GOOGLE_MAPS_API_KEY } from '$env/static/private';

const PLACE_ID = 'ChIJoaVPWv3tLIgRlUvTWWL06vg'; // Vicaria Health Google Place ID

async function fetchReviews() {
	if (!GOOGLE_MAPS_API_KEY) {
		return {
			reviews: [],
			rating: 0,
			totalReviews: 0,
			error: 'API key not configured'
		};
	}

	try {
		const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
		url.searchParams.set('place_id', PLACE_ID);
		url.searchParams.set('fields', 'reviews,rating,user_ratings_total');
		url.searchParams.set('key', GOOGLE_MAPS_API_KEY);

		const response = await fetch(url.toString());
		const data = await response.json();

		if (data.status !== 'OK') {
			return {
				reviews: [],
				rating: 0,
				totalReviews: 0,
				error: data.status
			};
		}

		return {
			reviews: data.result.reviews || [],
			rating: data.result.rating || 0,
			totalReviews: data.result.user_ratings_total || 0
		};
	} catch (error) {
		console.error('Error fetching reviews:', error);
		return {
			reviews: [],
			rating: 0,
			totalReviews: 0,
			error: 'Failed to fetch reviews'
		};
	}
}

export const load: PageServerLoad = async () => {
	return {
		reviewsData: fetchReviews()
	};
};

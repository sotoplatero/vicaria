import { Client } from '@googlemaps/google-maps-services-js';
import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } from '$env/static/private';
import type { Testimonial } from '$lib/types/testimonial';

const client = new Client({});

export async function load() {
	try {
		const response = await client.placeDetails({
			params: {
				place_id: GOOGLE_PLACE_ID,
				fields: ['reviews', 'rating', 'user_ratings_total'],
				key: GOOGLE_PLACES_API_KEY
			}
		});

		if (response.data.result.reviews) {
			const googleReviews: Testimonial[] = response.data.result.reviews.map((review, index) => ({
				id: `google-${index}`,
				name: review.author_name,
				location: review.relative_time_description || 'Google Review',
				condition: 'Verified Google Review',
				quote: review.text,
				rating: review.rating,
				avatar: review.profile_photo_url,
				source: 'google' as const,
				time: typeof review.time === 'number' ? review.time : parseInt(review.time),
				googleUrl: review.author_url || `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`
			}));

			return {
				testimonials: googleReviews,
				googleRating: response.data.result.rating,
				totalReviews: response.data.result.user_ratings_total
			};
		}

		// Fallback to static testimonials if API fails
		return {
			testimonials: [],
			googleRating: 4.9,
			totalReviews: 150
		};
	} catch (error) {
		console.error('Error fetching Google reviews:', error);

		// Fallback to static testimonials
		return {
			testimonials: [],
			googleRating: 4.9,
			totalReviews: 150
		};
	}
}

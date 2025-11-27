import reviews from '$lib/data/google-reviews.json';

export async function load({ setHeaders }) {
	// Set cache headers for the homepage
	setHeaders({
		'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
		// max-age: 1 hour for browser
		// s-maxage: 1 hour for CDN/proxy
		// stale-while-revalidate: 24 hours to serve stale while revalidating
	});

	// Return only rating/count for schema
	return {
		googleRating: reviews.googleRating,
		totalReviews: reviews.totalReviews
	};
}

import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } from '$env/static/private';
import type { Testimonial } from '$lib/types/testimonial';
import fs from 'fs/promises';
import path from 'path';
import staticReviews from '$lib/data/google-reviews.json';

const CACHE_FILE = '.cache/reviews.json';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface CachedReviews {
	testimonials: Testimonial[];
	googleRating: number;
	totalReviews: number;
}

interface CacheData {
	data: CachedReviews;
	timestamp: number;
}

async function getCachedReviews(): Promise<CachedReviews | null> {
	try {
		const cache = await fs.readFile(CACHE_FILE, 'utf-8');
		const { data, timestamp }: CacheData = JSON.parse(cache);

		if (Date.now() - timestamp < CACHE_DURATION) {
			console.log('Using cached reviews');
			return data;
		}
		console.log('Cache expired');
	} catch (error) {
		console.log('No cache found');
	}
	return null;
}

async function setCachedReviews(data: CachedReviews): Promise<void> {
	try {
		await fs.mkdir('.cache', { recursive: true });
		await fs.writeFile(
			CACHE_FILE,
			JSON.stringify({ data, timestamp: Date.now() }, null, 2)
		);
		console.log('Reviews cached successfully');
	} catch (error) {
		console.error('Error caching reviews:', error);
	}
}

async function fetchGoogleReviews(): Promise<CachedReviews> {
	try {
		// Use new Places API (New) with proper headers
		const response = await fetch(
			`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`,
			{
				headers: {
					'Content-Type': 'application/json',
					'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
					'X-Goog-FieldMask': 'reviews,rating,userRatingCount'
				}
			}
		);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Places API error: ${response.status} - ${errorText}`);
		}

		const data = await response.json();

		if (data.reviews && data.reviews.length > 0) {
			// Map reviews to our format
			const googleReviews: Testimonial[] = data.reviews.map((review: any, index: number) => ({
				id: `google-${index}`,
				name: review.authorAttribution?.displayName || 'Anonymous',
				location: review.relativePublishTimeDescription || 'Google Review',
				condition: 'Verified Google Review',
				quote: review.text?.text || review.originalText?.text || '',
				rating: review.rating || 5,
				avatar: review.authorAttribution?.photoUri || '',
				source: 'google' as const,
				time: review.publishTime ? new Date(review.publishTime).getTime() : Date.now(),
				googleUrl: review.authorAttribution?.uri || `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`
			}));

			// Sort by most recent first (highest timestamp = most recent)
			const sortedReviews = googleReviews.sort((a, b) => b.time - a.time);

			console.log(`Fetched ${sortedReviews.length} reviews, most recent: ${new Date(sortedReviews[0].time).toLocaleDateString()}`);

			return {
				testimonials: sortedReviews,
				googleRating: data.rating || 4.9,
				totalReviews: data.userRatingCount || 150
			};
		}

		throw new Error('No reviews in response');
	} catch (error) {
		console.error('Error fetching Google reviews:', error);
		throw error;
	}
}

export async function load({ setHeaders }) {
	// Set cache headers for the homepage
	setHeaders({
		'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
		// max-age: 1 hour for browser
		// s-maxage: 1 hour for CDN/proxy
		// stale-while-revalidate: 24 hours to serve stale while revalidating
	});

	// Try cache first
	const cached = await getCachedReviews();
	if (cached) {
		return cached;
	}

	// Fetch from API
	try {
		const reviews = await fetchGoogleReviews();
		await setCachedReviews(reviews);
		return reviews;
	} catch (error) {
		console.error('Failed to fetch reviews, using static data:', error);

		// Fallback to pre-built static reviews
		return {
			testimonials: staticReviews.testimonials as Testimonial[],
			googleRating: staticReviews.googleRating,
			totalReviews: staticReviews.totalReviews
		};
	}
}

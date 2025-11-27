import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file (override system vars)
dotenv.config({ path: path.join(__dirname, '../.env'), override: true });

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

console.log('Environment check:');
console.log(`  API Key present: ${GOOGLE_PLACES_API_KEY ? 'Yes' : 'No'}`);
console.log(`  Place ID present: ${GOOGLE_PLACE_ID ? 'Yes' : 'No'}`);

if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
	console.error('\n❌ Missing environment variables:');
	if (!GOOGLE_PLACES_API_KEY) console.error('  - GOOGLE_PLACES_API_KEY');
	if (!GOOGLE_PLACE_ID) console.error('  - GOOGLE_PLACE_ID');
	console.error('\nMake sure your .env file exists and contains these variables.');
	process.exit(1);
}

interface Review {
	id: string;
	name: string;
	location: string;
	condition: string;
	quote: string;
	rating: number;
	avatar: string;
	source: 'google';
	time: number;
	googleUrl: string;
}

async function fetchGoogleReviews() {
	try {
		console.log('Fetching Google reviews...');

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

		if (!data.reviews || data.reviews.length === 0) {
			throw new Error('No reviews in response');
		}

		const reviews: Review[] = data.reviews.map((review: any, index: number) => ({
			id: `google-${index}`,
			name: review.authorAttribution?.displayName || 'Anonymous',
			location: review.relativePublishTimeDescription || 'Google Review',
			condition: 'Verified Google Review',
			quote: review.text?.text || review.originalText?.text || '',
			rating: review.rating || 5,
			avatar: review.authorAttribution?.photoUri || '',
			source: 'google' as const,
			time: review.publishTime ? new Date(review.publishTime).getTime() : Date.now(),
			googleUrl:
				review.authorAttribution?.uri ||
				`https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`
		}));

		// Sort by most recent first (highest timestamp = most recent)
		const sortedReviews = reviews.sort((a, b) => b.time - a.time);

		const result = {
			testimonials: sortedReviews,
			googleRating: data.rating || 4.9,
			totalReviews: data.userRatingCount || 150,
			lastFetched: new Date().toISOString()
		};

		console.log(`✓ Fetched ${sortedReviews.length} reviews (sorted by most recent)`);
		console.log(`  Rating: ${result.googleRating}/5`);
		console.log(`  Total reviews: ${result.totalReviews}`);
		console.log(`  Most recent review: ${new Date(sortedReviews[0].time).toLocaleDateString()}`);

		return result;
	} catch (error) {
		console.error('Error fetching reviews:', error);
		throw error;
	}
}

async function saveReviews() {
	try {
		const reviews = await fetchGoogleReviews();

		const outputPath = path.join(__dirname, '../src/lib/data/google-reviews.json');

		// Ensure directory exists
		await fs.mkdir(path.dirname(outputPath), { recursive: true });

		// Save to file (will be included in Vercel build)
		await fs.writeFile(outputPath, JSON.stringify(reviews, null, 2));

		console.log(`\n✓ Reviews saved to ${outputPath}`);
		console.log('  File will be bundled with the build');
	} catch (error) {
		console.error('\n✗ Failed to fetch and save reviews');
		process.exit(1);
	}
}


saveReviews();

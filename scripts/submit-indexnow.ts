/**
 * IndexNow submission script
 * Run after deploy: pnpm run submit:indexnow
 *
 * Notifies Bing, Yandex, and other IndexNow-compatible engines
 * about all URLs on vicaria.ca so they crawl/index them faster.
 */

const SITE = 'https://vicaria.ca';
const KEY = 'a1b2c3d4e5f6g7h8';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

// Area slugs kept in sync with src/lib/data/areas.ts
const areaSlugs = [
	'burlington', 'dundas', 'ancaster', 'stoney-creek', 'waterdown', 'binbrook', 'grimsby'
];

// All important URLs to submit
const urls = [
	'/',
	'/service',
	'/about',
	'/contact',
	'/free-consultation',
	'/pricing',
	'/blog',
	'/accessibility',
	// Health coaching services
	'/service/bloating-relief',
	'/service/ibs-nutrition-support',
	'/service/diabetes-clarity',
	'/service/prediabetes-nutrition-support',
	'/service/blood-pressure-balance',
	'/service/cancer-recovery',
	'/service/menopause-health-coaching',
	'/service/chronic-digestive-problems',
	'/service/uti-pelvic-health',
	// Skin treatments
	'/service/skin-tag-removal',
	'/service/milia-removal',
	'/service/ruby-points-treatment',
	'/service/seborrheic-keratosis-removal',
	// Blog
	'/blog/bloating-after-eating-hamilton',
	// Area pages
	...areaSlugs.map(slug => `/areas/${slug}`),
];

async function submitToIndexNow() {
	const fullUrls = urls.map(u => `${SITE}${u}`);

	const payload = {
		host: 'vicaria.ca',
		key: KEY,
		keyLocation: KEY_LOCATION,
		urlList: fullUrls
	};

	console.log(`Submitting ${fullUrls.length} URLs to IndexNow...`);

	try {
		// Submit to Bing's IndexNow endpoint
		const response = await fetch('https://api.indexnow.org/indexnow', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify(payload)
		});

		if (response.ok || response.status === 200 || response.status === 202) {
			console.log(`IndexNow: ${response.status} - URLs submitted successfully`);
		} else {
			console.error(`IndexNow: ${response.status} - ${await response.text()}`);
		}
	} catch (error) {
		console.error('IndexNow submission failed:', error);
	}

	// Also submit sitemap to Google via ping
	try {
		const googlePing = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE}/sitemap.xml`)}`);
		console.log(`Google Sitemap Ping: ${googlePing.status}`);
	} catch (error) {
		console.error('Google sitemap ping failed:', error);
	}
}

submitToIndexNow();

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import seedrandom from 'seedrandom';
import OpenAI from 'openai';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env'), override: true });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
	console.error('\n❌ Missing OPENAI_API_KEY environment variable');
	console.error('Make sure your .env file contains OPENAI_API_KEY');
	process.exit(1);
}

// Initialize OpenAI client
const openai = new OpenAI({
	apiKey: OPENAI_API_KEY
});

// System variables from offers.md
const SERVICE_PILLARS = [
	{ id: 'digestive-relief', name: 'Digestive Relief', description: 'For bloating, IBS, abdominal discomfort' },
	{ id: 'diabetes-clarity', name: 'Diabetes Clarity', description: 'Type 2 diabetes, glucose control' },
	{ id: 'blood-pressure-balance', name: 'Blood Pressure Balance', description: 'Hypertension and cardiovascular support' },
	{ id: 'menopause-health', name: 'Menopause Health', description: 'Hot flashes, sleep issues, weight changes' },
	{ id: 'uti-pelvic-health', name: 'Recurrent UTI / Pelvic Health', description: 'Recurring UTIs, pelvic discomfort' },
	{ id: 'cancer-recovery', name: 'Cancer Recovery Support', description: 'Nutrition and strength recovery post-cancer' },
	{ id: 'skin-services', name: 'Skin Services', description: 'Skin Tag Removal, Seborrheic Keratosis, Ruby Points, Milia Removal' },
	{ id: 'general-wellness', name: 'General Wellness & Energy', description: 'Fatigue, immunity, healthy weight, overall health' }
];

const OFFER_FORMATS = [
	'Free evaluation',
	'15% OFF',
	'20% OFF',
	'Bonus session',
	'4-week bundle + 1 week free',
	'Home-visit upgrade',
	'Free personalized plan'
];

const THEMES = [
	'Energy Reset',
	'Spring Reset',
	'Summer Boost',
	'Fall Balance',
	'Winter Wellness',
	'Back-to-Routine',
	'Digestive Awareness',
	'Menopause Awareness',
	'Glucose Awareness',
	'Wellness Reset',
	'Healthy Start'
];

const SCARCITY = [
	'Valid until the end of this month',
	'First 15 bookings',
	'New clients only',
	'This month only',
];

const SOFT_CTAS = [
	'Learn More',
	'See Offer Details',
	'Check Your Eligibility',
	'Discover If You Qualify',
	'Ask a Question',
	'Request a Quick Call'
];

interface OfferVariables {
	servicePillar: typeof SERVICE_PILLARS[0];
	offerFormat: string;
	theme: string;
	scarcity: string;
	softCTA: string;
}

interface FAQ {
	question: string;
	answer: string;
}

interface GeneratedOffer {
	isActive: true;
	month: number;
	year: number;
	servicePillar: string;
	servicePillarId: string;
	offerFormat: string;
	theme: string;
	scarcity: string;
	softCTA: string;
	title: string;
	subtitle: string;
	offerLine: string;
	whatYouGet: string[];
	whyItMatters: string[];
	howToClaim: string[];
	faqs: FAQ[];
}

function selectRandomFromArray<T>(arr: T[], rng: seedrandom.PRNG): T {
	const index = Math.floor(rng() * arr.length);
	return arr[index];
}

function generateOfferVariables(month: number, year: number): OfferVariables {
	// Create seed from month and year
	const seed = `${year}-${month.toString().padStart(2, '0')}`;
	const rng = seedrandom(seed);

	console.log(`\nGenerating offer for ${seed}`);
	console.log(`Seed: ${seed}`);

	return {
		servicePillar: selectRandomFromArray(SERVICE_PILLARS, rng),
		offerFormat: selectRandomFromArray(OFFER_FORMATS, rng),
		theme: selectRandomFromArray(THEMES, rng),
		scarcity: selectRandomFromArray(SCARCITY, rng),
		softCTA: selectRandomFromArray(SOFT_CTAS, rng)
	};
}

async function generateOfferCopy(vars: OfferVariables, month: number, year: number): Promise<GeneratedOffer> {
	console.log('\n🤖 Generating offer copy with AI...');

	const prompt = `You are a professional copywriter for Vicaria Health, a wellness and nutrition coaching practice.

Generate persuasive, natural marketing copy for a monthly special offer using these variables:

SERVICE PILLAR: ${vars.servicePillar.name}
Description: ${vars.servicePillar.description}

OFFER FORMAT: ${vars.offerFormat}
THEME: ${vars.theme}
SCARCITY: ${vars.scarcity}
SOFT CTA: ${vars.softCTA}

Generate the following sections:

1. TITLE: An engaging title following this structure: "[Service Pillar] offer: [Offer Format] with our [Theme] theme"
   - Make it compelling and benefit-focused
   - Keep it concise (under 100 characters)

2. SUBTITLE: A single sentence (150 characters max) that describes who this is for and what problem it solves
   - Focus on the client's pain point
   - Make it relatable and empathetic

3. OFFER LINE: A concise, action-oriented sentence using this formula:
   "[Service Pillar] → get [Offer Format] with our [Theme] theme. [Scarcity]. [Soft CTA]."
   - Make it flow naturally
   - Keep the arrow (→) symbol

4. WHAT YOU GET: List EXACTLY 6 specific, tangible benefits included in this offer
   - Be specific about what's included
   - Use active, benefit-driven language
   - Tailor to the service pillar
   - If offer format includes "bundle", "bonus session", or "home-visit", mention that specifically
   - Must be exactly 6 items for layout purposes

5. WHY IT MATTERS: 3-4 compelling reasons why this offer/service is important
   - Connect to real health outcomes
   - Build trust and authority
   - Link the theme to the timing/relevance
   - Be empathetic and understanding

6. HOW TO CLAIM: 3-4 clear, simple steps to claim the offer
   - Make it feel easy and low-risk
   - Include the scarcity element
   - Reduce friction
   - End with reassurance

7. FAQS: Generate EXACTLY 4 frequently asked questions with answers
   - Address common concerns and objections
   - Build trust and reduce hesitation
   - Be specific to the service pillar and offer
   - Keep answers concise but informative (2-3 sentences max)
   - Cover topics like: eligibility, what to expect, time commitment, results timeline

TONE: Professional yet warm, empathetic, benefit-focused, trustworthy
LANGUAGE: Clear, accessible, avoid medical jargon
AUDIENCE: People seeking help with specific health concerns, may be skeptical or hesitant

Return ONLY a valid JSON object with this exact structure (no markdown, no code blocks):
{
  "title": "...",
  "subtitle": "...",
  "offerLine": "...",
  "whatYouGet": ["...", "...", "...", "...", "...", "..."],
  "whyItMatters": ["...", "...", ...],
  "howToClaim": ["...", "...", ...],
  "faqs": [
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."},
    {"question": "...", "answer": "..."}
  ]
}`;

	try {
		const response = await openai.chat.completions.create({
			model: 'gpt-4.1-mini',
			messages: [
				{
					role: 'system',
					content: 'You are an expert copywriter specializing in health and wellness marketing. You create persuasive, empathetic, and trustworthy content.'
				},
				{
					role: 'user',
					content: prompt
				}
			],
			temperature: 0.8,
			response_format: { type: 'json_object' }
		});

		const content = response.choices[0].message.content;
		if (!content) {
			throw new Error('No content generated by AI');
		}

		const aiGenerated = JSON.parse(content);

		return {
			isActive: true,
			month,
			year,
			servicePillar: vars.servicePillar.name,
			servicePillarId: vars.servicePillar.id,
			offerFormat: vars.offerFormat,
			theme: vars.theme,
			scarcity: vars.scarcity,
			softCTA: vars.softCTA,
			title: aiGenerated.title,
			subtitle: aiGenerated.subtitle,
			offerLine: aiGenerated.offerLine,
			whatYouGet: aiGenerated.whatYouGet,
			whyItMatters: aiGenerated.whyItMatters,
			howToClaim: aiGenerated.howToClaim,
			faqs: aiGenerated.faqs
		};
	} catch (error) {
		console.error('Error generating AI content:', error);
		throw error;
	}
}

async function generateMonthlyOffer() {
	try {
		const now = new Date();
		const currentMonth = now.getMonth() + 1; // JS months are 0-indexed
		const currentYear = now.getFullYear();

		console.log(`\n🎯 Generating monthly offer for ${currentMonth}/${currentYear}...`);

		// Generate offer variables using seeded RNG
		const vars = generateOfferVariables(currentMonth, currentYear);

		console.log('\n📋 Selected variables:');
		console.log(`  Service Pillar: ${vars.servicePillar.name}`);
		console.log(`  Offer Format: ${vars.offerFormat}`);
		console.log(`  Theme: ${vars.theme}`);
		console.log(`  Scarcity: ${vars.scarcity}`);
		console.log(`  Soft CTA: ${vars.softCTA}`);

		// Generate full offer copy with AI
		const offer = await generateOfferCopy(vars, currentMonth, currentYear);

		// Save to JSON
		const outputPath = path.join(__dirname, '../src/lib/data/current-offer.json');

		// Ensure directory exists
		await fs.mkdir(path.dirname(outputPath), { recursive: true });

		// Write to file
		await fs.writeFile(outputPath, JSON.stringify(offer, null, 2));

		console.log('\n✅ Offer generated successfully!');
		console.log(`\nTitle: ${offer.title}`);
		console.log(`\nOffer Line:`);
		console.log(`  ${offer.offerLine}`);
		console.log(`\nSaved to: ${outputPath}`);
	} catch (error) {
		console.error('\n❌ Error generating offer:', error);
		process.exit(1);
	}
}

generateMonthlyOffer();

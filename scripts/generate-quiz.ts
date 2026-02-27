import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import type { Quiz } from '../src/lib/types/quiz';

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

// ============================================================================
// TYPES
// ============================================================================

interface PainPoint {
	id: string; // "digestive-issues"
	quizId: string; // "Q1"
	title: string; // "What's Causing Your Digestive Issues?"
	painPoint: string; // "Bloating, gas, IBS, constipation..."
}

// ============================================================================
// JSON SCHEMA FOR STRUCTURED OUTPUTS
// ============================================================================

const quizJsonSchema = {
	type: 'object',
	properties: {
		meta: {
			type: 'object',
			properties: {
				title: { type: 'string' },
				slug: { type: 'string' },
				description: { type: 'string' },
				estimated_time: { type: 'string' }
			},
			required: ['title', 'slug', 'description', 'estimated_time'],
			additionalProperties: false
		},
		landing_page: {
			type: 'object',
			properties: {
				hero: {
					type: 'object',
					properties: {
						headline: { type: 'string' },
						subheadline: { type: 'string' },
						cta_button: { type: 'string' }
					},
					required: ['headline', 'subheadline', 'cta_button'],
					additionalProperties: false
				},
				agitation_section: {
					type: 'object',
					properties: {
						title: { type: 'string' },
						bullets: {
							type: 'array',
							items: { type: 'string' },
							minItems: 4,
							maxItems: 4
						}
					},
					required: ['title', 'bullets'],
					additionalProperties: false
				},
				solution_section: {
					type: 'object',
					properties: {
						title: { type: 'string' },
						description: { type: 'string' },
						value_proposition: {
							type: 'array',
							items: { type: 'string' },
							minItems: 3,
							maxItems: 3
						}
					},
					required: ['title', 'description', 'value_proposition'],
					additionalProperties: false
				},
				trust_elements: {
					type: 'array',
					items: { type: 'string' },
					minItems: 3,
					maxItems: 3
				}
			},
			required: ['hero', 'agitation_section', 'solution_section', 'trust_elements'],
			additionalProperties: false
		},
		quiz_questions: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					step: { type: 'integer' },
					field_id: { type: 'string' },
					intro_text: { type: 'string' },
					question: { type: 'string' },
					type: {
						type: 'string',
						enum: ['single_choice', 'multiple_choice', 'scale', 'textarea']
					},
					options: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								label: { type: 'string' },
								value: { type: 'string' }
							},
							required: ['label', 'value'],
							additionalProperties: false
						}
					},
					max_selections: { type: 'integer' },
					min: { type: 'integer' },
					max: { type: 'integer' },
					labels: {
						type: 'object',
						properties: {
							min: { type: 'string' },
							max: { type: 'string' }
						},
						required: ['min', 'max'],
						additionalProperties: false
					},
					required: { type: 'boolean' },
					placeholder: { type: 'string' },
					max_length: { type: 'integer' }
				},
				required: ['step', 'field_id', 'question', 'type'],
				additionalProperties: false
			},
			minItems: 6,
			maxItems: 6
		},
		lead_capture: {
			type: 'object',
			properties: {
				headline: { type: 'string' },
				subheadline: { type: 'string' },
				fields: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							name: { type: 'string' },
							type: { type: 'string', enum: ['text', 'email', 'tel'] },
							required: { type: 'boolean' },
							placeholder: { type: 'string' }
						},
						required: ['name', 'type', 'required', 'placeholder'],
						additionalProperties: false
					}
				},
				consent_text: { type: 'string' },
				submit_button: { type: 'string' }
			},
			required: ['headline', 'subheadline', 'fields', 'consent_text', 'submit_button'],
			additionalProperties: false
		}
	},
	required: [
		'meta',
		'landing_page',
		'quiz_questions',
		'lead_capture'
	],
	additionalProperties: false
};

// ============================================================================
// PARSE PAINS.MD
// ============================================================================

function parsePainsMarkdown(content: string): PainPoint[] {
	const lines = content.split('\n');
	const painPoints: PainPoint[] = [];

	for (const line of lines) {
		// Skip header and empty lines
		if (line.startsWith('|') && line.includes('Quiz Title')) continue;
		if (line.startsWith('|') && line.includes('---')) continue;
		if (!line.trim()) continue;

		// Parse table row: | Q1 | What's Causing... | Bloating, gas... |
		const match = line.match(/\|\s*([Q\d]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/);
		if (match) {
			const quizId = match[1].trim();
			const title = match[2].trim();
			const painPoint = match[3].trim();

			// Generate slug from title
			const slug = title
				.toLowerCase()
				.replace(/[^a-z0-9\s-]/g, '')
				.replace(/\s+/g, '-')
				.replace(/-+/g, '-')
				.replace(/^-|-$/g, '');

			painPoints.push({
				id: slug,
				quizId,
				title,
				painPoint
			});
		}
	}

	return painPoints;
}

function getPainPointBySlug(painPoints: PainPoint[], slug: string): PainPoint | undefined {
	return painPoints.find(p => p.id === slug);
}

// ============================================================================
// GENERATE QUIZ WITH OPENAI
// ============================================================================

async function generateQuizCopy(
	painPoint: PainPoint,
	metaPrompt: string
): Promise<Omit<Quiz, 'id'>> {
	console.log('\n🤖 Generating quiz with OpenAI Structured Outputs...');

	const systemPrompt = 'You are a Senior Product Manager and Expert Direct Response Copywriter specializing in functional health funnels.';

	const userPrompt = metaPrompt.replace('{pain_point}', painPoint.painPoint);

	try {
		const response = await openai.chat.completions.create({
			model: 'gpt-4.1-mini',
			temperature: 0.8,
			messages: [
				{ role: 'system', content: systemPrompt },
				{ role: 'user', content: userPrompt }
			],
			response_format: {
				type: 'json_schema',
				json_schema: {
					name: 'quiz_response',
					strict: false,
					schema: quizJsonSchema
				}
			}
		});

		const content = response.choices[0].message.content;
		if (!content) {
			throw new Error('No content generated by AI');
		}

		console.log(`✅ Response received (${response.usage?.total_tokens || 'unknown'} tokens)`);

		const quizData = JSON.parse(content);
		return quizData;
	} catch (error: any) {
		console.error('❌ Error generating AI content:', error.message);
		throw error;
	}
}

// ============================================================================
// VALIDATION
// ============================================================================

interface ValidationResult {
	valid: boolean;
	errors: string[];
	warnings: string[];
}

function validateQuizJson(quiz: any): ValidationResult {
	const errors: string[] = [];
	const warnings: string[] = [];

	// Check for problematic placeholder text in critical fields
	const criticalFields = [
		quiz.meta?.title,
		quiz.meta?.description,
		quiz.landing_page?.hero?.headline,
		quiz.landing_page?.hero?.subheadline,
		quiz.landing_page?.agitation_section?.title,
		quiz.landing_page?.solution_section?.title
	];

	criticalFields.forEach(field => {
		if (field && (field.includes('...') || field.includes('TODO') || field.includes('[placeholder]'))) {
			warnings.push(`Found placeholder text in critical field: "${field}"`);
		}
	});

	// Validate quiz structure
	if (!quiz.meta?.title) errors.push('Missing meta.title');
	if (!quiz.meta?.slug) errors.push('Missing meta.slug');
	if (!quiz.landing_page?.hero?.headline) errors.push('Missing landing_page.hero.headline');
	if (!quiz.quiz_questions || quiz.quiz_questions.length !== 6) {
		errors.push(`Expected 6 questions, got ${quiz.quiz_questions?.length || 0}`);
	}
	if (!quiz.lead_capture?.headline) errors.push('Missing lead_capture.headline');

	// Check that first question has intro_text
	if (quiz.quiz_questions?.[0] && !quiz.quiz_questions[0].intro_text) {
		warnings.push('First question should have intro_text');
	}

	return {
		valid: errors.length === 0,
		errors,
		warnings
	};
}

function extractVariables(template: string): string[] {
	const regex = /\{(\w+)\}/g;
	const matches: string[] = [];
	let match;
	while ((match = regex.exec(template)) !== null) {
		matches.push(match[1]);
	}
	return matches;
}

// ============================================================================
// RETRY LOGIC
// ============================================================================

async function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateQuizWithRetry(
	painPoint: PainPoint,
	metaPrompt: string,
	maxRetries = 3
): Promise<Omit<Quiz, 'id'>> {
	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			return await generateQuizCopy(painPoint, metaPrompt);
		} catch (error: any) {
			if (attempt === maxRetries) throw error;

			const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
			console.log(`⚠️  Retry ${attempt}/${maxRetries} in ${delay}ms...`);
			await sleep(delay);
		}
	}
	throw new Error('Max retries exceeded');
}

// ============================================================================
// MAIN
// ============================================================================

async function generateQuiz() {
	try {
		// Get quiz slug from CLI args
		const slug = process.argv[2];

		if (!slug) {
			console.error('\n❌ Missing quiz slug argument');
			console.error('Usage: pnpm run generate:quiz <slug>');
			console.error('Example: pnpm run generate:quiz digestive-issues');
			process.exit(1);
		}

		console.log(`\n🎯 Quiz Generator for Vicaria Health`);
		console.log('─'.repeat(40));

		// Load pains.md
		const painsPath = path.join(__dirname, '../.claude/pains.md');
		const painsContent = await fs.readFile(painsPath, 'utf-8');
		const painPoints = parsePainsMarkdown(painsContent);

		// Find pain point by slug
		const painPoint = getPainPointBySlug(painPoints, slug);

		if (!painPoint) {
			console.error(`\n❌ Quiz "${slug}" not found in pains.md`);
			console.log('\nAvailable quizzes:');
			painPoints.forEach(p => console.log(`  - ${p.id}`));
			process.exit(1);
		}

		console.log(`\n📋 Configuration:`);
		console.log(`  Quiz slug: ${slug}`);
		console.log(`  Title: ${painPoint.title}`);
		console.log(`  Pain point: ${painPoint.painPoint}`);

		// Load meta-prompt
		const metaPromptPath = path.join(__dirname, '../.claude/quiz-prompt.md');
		const metaPrompt = await fs.readFile(metaPromptPath, 'utf-8');

		// Generate quiz with OpenAI
		const quizData = await generateQuizWithRetry(painPoint, metaPrompt);

		// Add ID and ensure slug is correct
		const quiz: Quiz = {
			id: `quiz_${slug.replace(/-/g, '_')}`,
			...quizData,
			meta: {
				...quizData.meta,
				slug
			}
		};

		// Validate
		console.log('\n🔍 Validating quiz structure...');
		const validation = validateQuizJson(quiz);

		if (validation.errors.length > 0) {
			console.error('\n❌ Validation errors:');
			validation.errors.forEach(err => console.error(`  - ${err}`));
			process.exit(1);
		}

		if (validation.warnings.length > 0) {
			console.warn('\n⚠️  Validation warnings:');
			validation.warnings.forEach(warn => console.warn(`  - ${warn}`));
		} else {
			console.log('  ✓ All validations passed');
		}

		// Save to file
		const outputPath = path.join(__dirname, '../src/lib/data/quizzes', `${slug}.json`);

		// Ensure directory exists
		await fs.mkdir(path.dirname(outputPath), { recursive: true });

		// Write to file
		await fs.writeFile(outputPath, JSON.stringify(quiz, null, 2));

		console.log('\n📁 Saving quiz...');
		console.log(`  ✓ Saved to: ${path.relative(process.cwd(), outputPath)}`);

		console.log('\n✨ Generation complete!');
		console.log(`\n📊 Quiz Summary:`);
		console.log(`  ID: ${quiz.id}`);
		console.log(`  Title: ${quiz.meta.title}`);
		console.log(`  Slug: ${quiz.meta.slug}`);
		console.log(`  Questions: ${quiz.quiz_questions.length}`);
		console.log(`  Estimated time: ${quiz.meta.estimated_time}`);
	} catch (error: any) {
		console.error('\n❌ Error generating quiz:', error.message);
		process.exit(1);
	}
}

generateQuiz();

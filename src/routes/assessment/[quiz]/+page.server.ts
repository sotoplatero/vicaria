import { error, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import type { Quiz, Outcome } from '$lib/types/quiz';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
import { QUIZ_RESULT_PROMPT } from '$lib/config/quiz-result-prompt';

export const load: PageServerLoad = async ({ params }) => {
	const { quiz } = params;
	console.log(quiz);

	try {
		// Dynamic import of quiz JSON
		const quizModule = await import(`$lib/data/quizzes/${quiz}.json`);
		const quizData: Quiz = quizModule.default;

		return {
			quiz: quizData
		};
	} catch (err) {
		console.error(`Quiz "${quiz}" not found:`, err);
		// throw error(404, {
		// 	message: `Quiz "${quiz}" not found`
		// });
	}
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const { quiz } = params;
		const formData = await request.formData();
		const answersJson = formData.get('answers') as string;

		if (!answersJson) {
			return fail(400, { missing: true });
		}

		const combinedData = JSON.parse(answersJson);
		// Separate answers and lead data (assuming lead data keys are known or we just use all)
		// Actually, calculateResult only needs the question answers.
		// We can pass the whole object, it ignores unknown keys.

		try {
			// Load quiz data
			const quizModule = await import(`$lib/data/quizzes/${quiz}.json`);
			const quizData: Quiz = quizModule.default;

			// Calculate outcome locally
			const { calculateResult } = await import('$lib/utils/quiz');
			const outcome = calculateResult(combinedData, quizData);

			if (!outcome) {
				throw new Error('Could not calculate outcome');
			}

			const openai = new OpenAI({
				apiKey: OPENAI_API_KEY
			});

			// Helper to get label for a value
			const getLabel = (fieldId: string, value: any) => {
				const question = quizData.quiz_questions.find(q => q.field_id === fieldId);
				if (!question) return value;
				if (question.options) {
					if (Array.isArray(value)) {
						return value.map(v => question.options?.find(o => o.value === v)?.label || v).join(', ');
					}
					return question.options.find(o => o.value === value)?.label || value;
				}
				return value;
			};

			// Use global prompt template
			let prompt = QUIZ_RESULT_PROMPT;

			// Replace placeholders
			const replacements: Record<string, string> = {
				'{name}': combinedData.name || 'Friend',
				'{primary_symptom}': getLabel('primary_symptom', combinedData.primary_symptom),
				'{frequency}': getLabel('frequency', combinedData.frequency),
				'{triggers}': getLabel('triggers', combinedData.triggers),
				'{impact_score}': combinedData.impact_score,
				'{age_range}': getLabel('age_range', combinedData.age_range),
				'{user_context}': combinedData.user_context || 'None provided',
				'{meta.title}': quizData.meta.title
			};

			Object.entries(replacements).forEach(([key, value]) => {
				prompt = prompt.replace(key, String(value));
			});

			const completion = await openai.chat.completions.create({
				messages: [{ role: 'user', content: prompt }],
				model: 'gpt-4o',
			});

			const resultContent = completion.choices[0].message.content;
			if (!resultContent) {
				throw new Error('No content generated');
			}

			return {
				success: true,
				result: resultContent, // Markdown string
				outcome // Pass outcome for CTA/Title if needed, though prompt covers most
			};

		} catch (err) {
			console.error('Error generating result:', err);
			return fail(500, { error: 'Failed to generate result' });
		}
	}
};

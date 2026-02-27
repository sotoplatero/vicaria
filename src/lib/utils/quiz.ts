import type { Quiz, Outcome } from '$lib/types/quiz';

/**
 * Calculate quiz outcome based on scoring system.
 * If quiz doesn't have scoring/outcomes, returns a default outcome.
 */
export function calculateResult(answers: Record<string, any>, quiz: Quiz): Outcome | undefined {
    // If quiz doesn't have scoring/outcomes, return a default outcome for AI to use
    if (!quiz.scoring || !quiz.outcomes || quiz.outcomes.length === 0) {
        return {
            id: 'default',
            category: 'default',
            urgency: 'medium',
            title: 'Your Personalized Assessment Results',
            summary: 'Based on your responses, we\'ve prepared personalized insights.',
            explanation: 'Our functional medicine expert will analyze your answers.',
            next_steps: ['Review your personalized recommendations', 'Schedule a consultation'],
            cta: {
                text: 'Schedule Your Consultation',
                url: '/contact',
                urgency_text: 'Limited slots available this month'
            }
        };
    }

    const scores: Record<string, number> = {};

    // Initialize scores for all categories
    quiz.scoring.categories.forEach(category => {
        scores[category] = 0;
    });

    // Iterate through questions and calculate scores
    quiz.quiz_questions.forEach(question => {
        const answer = answers[question.field_id];
        if (answer === undefined) return;

        if (question.type === 'single_choice' && question.options) {
            const selectedOption = question.options.find(opt => opt.value === answer);
            if (selectedOption?.scores) {
                Object.entries(selectedOption.scores).forEach(([category, score]) => {
                    if (scores[category] !== undefined) {
                        scores[category] += score;
                    }
                });
            }
        } else if (question.type === 'multiple_choice' && question.options && Array.isArray(answer)) {
            answer.forEach((val: string) => {
                const selectedOption = question.options?.find(opt => opt.value === val);
                if (selectedOption?.scores) {
                    Object.entries(selectedOption.scores).forEach(([category, score]) => {
                        if (scores[category] !== undefined) {
                            scores[category] += score;
                        }
                    });
                }
            });
        }
    });

    // Find highest score
    let maxScore = -1;
    let winningCategory = '';

    Object.entries(scores).forEach(([category, score]) => {
        if (score > maxScore) {
            maxScore = score;
            winningCategory = category;
        } else if (score === maxScore && quiz.scoring) {
            // Tiebreaker logic
            if (quiz.scoring.tiebreaker === category) {
                winningCategory = category;
            }
        }
    });

    // If no winning category found, default to tiebreaker or first
    if (!winningCategory && quiz.scoring && quiz.scoring.categories.length > 0) {
        winningCategory = quiz.scoring.tiebreaker || quiz.scoring.categories[0];
    }

    return quiz.outcomes.find(outcome => outcome.category === winningCategory);
}

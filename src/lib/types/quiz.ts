// TypeScript types for Quiz JSON schema
// Based on .claude/quiz-prompt.md

export interface QuizMeta {
	title: string;
	slug: string;
	description: string;
	estimated_time: string;
}

export interface Hero {
	headline: string;
	subheadline: string;
	cta_button: string;
}

export interface AgitationSection {
	title: string;
	bullets: string[];
}

export interface SolutionSection {
	title: string;
	description: string;
	value_proposition: string[];
}

export interface LandingPage {
	hero: Hero;
	agitation_section: AgitationSection;
	solution_section: SolutionSection;
	trust_elements: string[];
}

export interface ScoreMap {
	[category: string]: number;
}

export interface QuestionOption {
	label: string;
	value: string;
	scores?: ScoreMap; // Only for questions 1-3
}

export type QuestionType = 'single_choice' | 'multiple_choice' | 'scale' | 'textarea';

export interface QuizQuestion {
	step: number;
	field_id: string;
	intro_text?: string; // Optional intro text for priming (usually on first question)
	question: string;
	type: QuestionType;
	options?: QuestionOption[];
	max_selections?: number; // For multiple_choice
	min?: number; // For scale
	max?: number; // For scale
	labels?: {
		min: string;
		max: string;
	}; // For scale
	required?: boolean; // For textarea
	placeholder?: string; // For textarea
	max_length?: number; // For textarea
}

export interface LeadCaptureField {
	name: string;
	type: 'text' | 'email' | 'tel';
	required: boolean;
	placeholder: string;
}

export interface LeadCapture {
	headline: string;
	subheadline: string;
	fields: LeadCaptureField[];
	consent_text: string;
	submit_button: string;
}

// Outcomes and Scoring are now optional - only used if explicitly defined
// Otherwise, results are generated dynamically via AI
export interface Scoring {
	method: 'highest_category_wins';
	categories: string[];
	tiebreaker: string;
}

export interface OutcomeCTA {
	text: string;
	url: string;
	urgency_text: string;
}

export type UrgencyLevel = 'low' | 'medium' | 'high';

export interface Outcome {
	id: string;
	category: string;
	urgency: UrgencyLevel;
	title: string;
	summary: string;
	explanation: string;
	next_steps: string[];
	cta: OutcomeCTA;
}

export interface Quiz {
	id: string;
	meta: QuizMeta;
	landing_page: LandingPage;
	quiz_questions: QuizQuestion[];
	lead_capture: LeadCapture;
	scoring?: Scoring; // Optional
	outcomes?: Outcome[]; // Optional
	result_prompt?: string; // Optional - we use a global prompt now
}

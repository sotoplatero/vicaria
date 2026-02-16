import type { FAQ } from '$lib/types/faq';

export const faqs: FAQ[] = [
	{
		id: '1',
		question: 'How is this different from seeing a regular nutritionist?',
		answer: 'Unlike most nutritionists, our team consists of two medical doctors with over 40 years of combined clinical experience. We don\'t just suggest meal plans — we understand the medical science behind your condition, how your medications interact with food, and what your lab results actually mean. You get nutrition guidance backed by real medical training.',
		category: 'services'
	},
	{
		id: '2',
		question: "I've tried other nutritionists before and nothing worked. Why would this be different?",
		answer: "We hear this a lot. Most nutritionists work from general guidelines without understanding your full medical picture. As medical doctors, we dig into root causes — reviewing your labs, understanding your medications, and connecting symptoms that other practitioners miss. Many of our clients came to us after years of frustration, and finally found answers because we approach nutrition from a clinical perspective, not a one-size-fits-all template.",
		category: 'services'
	},
	{
		id: '3',
		question: 'How much does it cost?',
		answer: 'Our initial consultation is free for 15 minutes. After that, we offer customized nutrition programs tailored to your specific needs. Pricing varies based on the level of support and duration of the program. Contact us for detailed pricing information.',
		category: 'pricing'
	},
	{
		id: '4',
		question: 'What conditions do you specialize in?',
		answer: 'We specialize in digestive disorders (IBS, Crohn\'s, celiac), diabetes management, cardiovascular health, cancer nutrition support, weight management, food allergies and sensitivities, and general wellness nutrition.',
		category: 'services'
	},
	{
		id: '5',
		question: 'How quickly will I see results?',
		answer: 'Results vary by individual and condition. Many clients notice improvements in energy and digestion within 2-4 weeks. Significant health markers like blood sugar and cholesterol often show improvement within 3-6 months with consistent adherence to the nutrition plan.',
		category: 'results'
	},
	{
		id: '6',
		question: 'Do you accept insurance?',
		answer: 'Yes, we accept most major insurance plans. Many insurance companies cover nutrition counseling services, especially when prescribed by a physician. We can provide receipts and documentation for insurance reimbursement. Contact your insurance provider to verify your coverage.',
		category: 'insurance'
	},
	{
		id: '7',
		question: 'Do you offer virtual consultations?',
		answer: 'Yes! We offer secure video consultations for clients who prefer remote appointments or live outside the Hamilton area. Virtual consultations are just as effective as in-person visits for most nutrition counseling services.',
		category: 'services'
	},
	{
		id: '8',
		question: 'What should I prepare for my consultation?',
		answer: 'Please bring any recent medical records, a list of current medications and supplements, and be prepared to discuss your health goals and concerns. We recommend wearing comfortable clothing if a physical assessment is needed.',
		category: 'consultation'
	},
	{
		id: '9',
		question: 'How long are typical appointments?',
		answer: 'Initial consultations typically last 60-90 minutes to thoroughly assess your health history and goals. Follow-up appointments are usually 30-45 minutes. Virtual consultations are also available for your convenience.',
		category: 'consultation'
	}
];

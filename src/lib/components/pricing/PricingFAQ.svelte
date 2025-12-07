<script lang="ts">
	import { HelpCircle, ChevronDown } from '@lucide/svelte';

	interface FAQItem {
		question: string;
		answer: string;
		category: 'pricing' | 'insurance' | 'packages' | 'process' | 'general';
	}

	const faqs: FAQItem[] = [
		{
			question: 'Why do packages cost less per session than single sessions?',
			answer: 'Our pricing reflects the commitment model. When you commit to multiple sessions, I can plan a more comprehensive program and dedicate resources to your ongoing care. This allows me to offer better value while ensuring you get the sustained support needed for real, lasting change. Think of it as an investment discount - the more you invest in your health journey, the better the per-session value.',
			category: 'pricing'
		},
		{
			question: 'Will my insurance cover these services?',
			answer: 'For Health Coaching: Many extended health insurance plans DO cover consultations with Registered Nutritional Practitioners. Check your benefits under "nutritionist," "dietitian," or "complementary health practitioners." We provide detailed receipts for your claims. For Skin Treatments: These are cosmetic procedures and are NOT covered by OHIP or most insurance plans.',
			category: 'insurance'
		},
		{
			question: 'Can I upgrade from a smaller package to a larger one?',
			answer: 'Absolutely! If you start with a smaller package and want to continue, we can upgrade you to a larger package. You will receive credit for the sessions you have already paid for, and only pay the difference. For example, if you complete a 3-Session Package and want to upgrade to the 6-Session Package, you would pay $210 (the difference between $450 and $240).',
			category: 'packages'
		},
		{
			question: 'What happens if I need to cancel or reschedule a session?',
			answer: 'Life happens, and I understand! Please give at least 24 hours notice to cancel or reschedule. Cancellations within 24 hours or no-shows may result in session forfeiture. If you have an emergency, please reach out - I will work with you when possible. Communication is key!',
			category: 'process'
		},
		{
			question: 'Do I have to use all my sessions right away?',
			answer: 'No! Package sessions must be used within 6 months of purchase, but you can schedule them at a pace that works for you. Some clients prefer weekly sessions initially, then space them out as they gain confidence. We will work together to find the right rhythm for your needs and schedule.',
			category: 'packages'
		},
		{
			question: 'Are there payment plans available?',
			answer: 'Currently, we do not offer payment plans. Packages must be paid in full at time of purchase. However, you can always start with a single session to test the waters, then upgrade to a package if you decide to continue. All payments are due at time of service.',
			category: 'pricing'
		},
		{
			question: 'How much money can I save with a package?',
			answer: 'The savings add up quickly! With the 3-Session Package, you save $15 total ($5 per session). The 6-Session Package saves you $60 ($10 per session). The 3-Month Program (12 sessions) saves you $180 ($15 per session). Plus, the value of sustained support and accountability is priceless when it comes to achieving lasting health results.',
			category: 'pricing'
		},
		{
			question: 'What is included in the Health Coaching sessions?',
			answer: 'Each session includes a comprehensive consultation (typically 60 minutes), personalized recommendations, written summaries, and action plans. Package clients also receive email support between sessions, protocol adjustments, progress tracking, and detailed resources. The 3-Month Program includes priority support, unlimited adjustments, and advanced testing guidance.',
			category: 'process'
		},
		{
			question: 'How long does a skin treatment consultation take?',
			answer: 'The initial consultation typically takes 20-30 minutes. During this time, I will examine all your lesions, identify their type, assess size and location, discuss the procedure, and provide a detailed cost estimate. Treatment can often be performed the same day and takes 15-45 minutes depending on the number of lesions being removed.',
			category: 'process'
		},
		{
			question: 'Can I get a refund if I change my mind about a package?',
			answer: 'Packages are non-refundable once purchased, as I reserve time and resources specifically for you. However, packages ARE transferable - you can transfer unused sessions to a family member or friend with advance notice. This ensures your investment is not lost even if circumstances change.',
			category: 'packages'
		},
		{
			question: 'Do you offer discounts for couples or families?',
			answer: 'Yes! We offer a Couple or Family Session option for $120 CAD. This allows you to bring your partner or family members into your wellness journey. It is a great way to get everyone on the same page and build collective healthy habits. Contact us to discuss how this can be integrated into your package.',
			category: 'general'
		},
		{
			question: 'What if I am not sure which package is right for me?',
			answer: 'That is completely normal! I recommend starting with our free 15-minute discovery call to discuss your goals and challenges. Based on our conversation, I can recommend the package that best fits your needs. You can also start with a Single Session to experience the process before committing to a larger package.',
			category: 'general'
		},
		{
			question: 'How do I submit my insurance claim?',
			answer: 'After each session, you will receive a detailed receipt via email with all the information your insurance company requires: my credentials and registration number, date and duration of service, service description, and total amount paid. Simply submit this receipt to your insurance provider along with any required claim forms. Most claims are processed within 2-4 weeks.',
			category: 'insurance'
		},
		{
			question: 'What is the difference between the 6-Session Package and the 3-Month Program?',
			answer: 'The main difference is intensity and support level. The 6-Session Package is spread over 2-3 months with bi-weekly to monthly check-ins, perfect for moderate lifestyle changes. The 3-Month Program includes 12 sessions (weekly initially, then bi-weekly), priority email support, unlimited protocol adjustments, advanced testing guidance, and is designed for comprehensive transformation of complex health issues.',
			category: 'packages'
		},
		{
			question: 'For skin treatments, can I get multiple lesions removed in one session?',
			answer: 'Absolutely! In fact, it is very common to remove multiple lesions in a single treatment session. After your $60 consultation where we identify all your lesions, we can remove as many as you would like (within reason for comfort and healing). You pay the per-lesion price ($20-$25 each) based on size and location. Many clients prefer to do everything at once.',
			category: 'process'
		}
	];

	let openIndex = $state<number | null>(null);

	function toggleFAQ(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="py-20 bg-gradient-to-br from-warm-white via-white to-sage-light/10">
	<div class="container-custom">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
				<HelpCircle class="text-primary" size={24} />
				<span class="text-lg font-bold text-primary">Frequently Asked Questions</span>
			</div>
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Your Questions Answered
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Clear answers to the most common questions about pricing, insurance, and our services
			</p>
		</div>

		<div class="max-w-4xl mx-auto space-y-4">
			{#each faqs as faq, index}
				<div class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden transition-all {openIndex === index ? 'ring-2 ring-primary/30' : ''}">
					<button
						onclick={() => toggleFAQ(index)}
						class="w-full px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-warm-white transition-colors"
					>
						<div class="flex-1">
							<div class="flex items-start gap-3">
								<div class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mt-1">
									<span class="text-sm font-bold text-primary">{index + 1}</span>
								</div>
								<h3 class="text-lg md:text-xl font-bold text-charcoal leading-tight">
									{faq.question}
								</h3>
							</div>
						</div>
						<div class="flex-shrink-0 mt-1">
							<div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform {openIndex === index ? 'rotate-180' : ''}">
								<ChevronDown class="text-primary" size={20} />
							</div>
						</div>
					</button>

					{#if openIndex === index}
						<div class="px-8 pb-6">
							<div class="pl-11 pr-8">
								<div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-primary">
									<p class="text-gray-700 leading-relaxed">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Still Have Questions CTA -->
		<div class="max-w-3xl mx-auto mt-16 text-center">
			<div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20">
				<h3 class="text-2xl font-bold text-charcoal mb-3">
					Still have questions?
				</h3>
				<p class="text-gray-700 mb-6">
					I am here to help! Book a free 15-minute discovery call to discuss your specific situation,
					or send me a message and I will get back to you promptly.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/contact"
						class="btn btn-primary px-8 py-3 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
					>
						Contact Me
					</a>
					<a
						href="/#contact"
						class="btn btn-outline btn-primary px-8 py-3 text-lg hover:bg-primary hover:text-white transition-all"
					>
						Book Discovery Call
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

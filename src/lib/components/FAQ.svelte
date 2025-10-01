<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	interface FAQItem {
		question: string;
		answer: string;
		open: boolean;
	}

	let faqs = $state<FAQItem[]>([
		{
			question: 'What conditions do you specialize in?',
			answer:
				'We specialize in digestive and genitourinary disorders, hypertension, diabetes, autoimmune conditions, and cancer nutrition support. Our health coaches work with you to create personalized programs that address your specific needs.',
			open: true
		},
		{
			question: 'Do you accept insurance?',
			answer:
				'We currently do not accept insurance directly. However, we can provide you with receipts that you may be able to submit to your insurance provider for reimbursement. Please check with your insurance provider for coverage details.',
			open: false
		},
		{
			question: 'What languages do you speak?',
			answer:
				'Our team is fully bilingual in English and Spanish. We also offer Ambassador Services to accompany Spanish-speaking clients to medical appointments to ensure clear communication with healthcare providers.',
			open: false
		},
		{
			question: 'Do you offer virtual consultations?',
			answer:
				'Yes! We offer both in-person consultations at our Hamilton clinic and virtual consultations via video call. We also provide in-home visits for clients who prefer care in the comfort of their own home.',
			open: false
		},
		{
			question: 'How long are coaching sessions?',
			answer:
				'Initial consultations typically last 60-90 minutes. Follow-up sessions are usually 30-45 minutes. The frequency and duration of sessions are customized based on your individual needs and goals.',
			open: false
		},
		{
			question: 'What is your cancellation policy?',
			answer:
				'We require at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may be subject to a fee. We understand that emergencies happen - please contact us to discuss your situation.',
			open: false
		}
	]);

	function toggleFAQ(index: number) {
		faqs = faqs.map((faq, i) => ({
			...faq,
			open: i === index ? !faq.open : false
		}));
	}
</script>

<section class="py-32 bg-base-200">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="text-center mb-20">
			<p class="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
				Have Questions?
			</p>
			<h2 class="text-5xl font-light mb-4">Common Questions Answered</h2>
		</div>

		<div class="space-y-4">
			{#each faqs as faq, index}
				<div class="bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
					<button
						onclick={() => toggleFAQ(index)}
						class="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-base-200/50 transition-colors"
					>
						<h3 class="text-xl font-semibold pr-4">{faq.question}</h3>
						<ChevronDown
							class="w-6 h-6 flex-shrink-0 transition-transform duration-300 {faq.open
								? 'rotate-180'
								: ''}"
						/>
					</button>

					<div
						class="grid transition-all duration-300 {faq.open
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0'}"
					>
						<div class="overflow-hidden">
							<div class="px-6 pb-6 text-base-content/70 leading-relaxed">
								{faq.answer}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import WhatsAppButton from './WhatsAppButton.svelte';
	import type { FAQ } from '$lib/types/faq';

	interface Props {
		faqs: FAQ[];
	}

	let { faqs }: Props = $props();

	let openIndex = $state<number | null>(0);

	const toggle = (index: number) => {
		openIndex = openIndex === index ? null : index;
	};

	// Generate JSON-LD schema for Google
	const faqSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<div class="max-w-4xl mx-auto py-24">
	<div class="text-center mb-12">
		<h3 class="text-3xl font-bold text-charcoal mb-4">Frequently Asked Questions</h3>
		<p class="text-lg text-gray-600">Find answers to common questions about our services</p>
	</div>

	<div class="space-y-4">
		{#each faqs as faq, index (faq.id)}
			<div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
				<button
					onclick={() => toggle(index)}
					class="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
					aria-expanded={openIndex === index}
				>
					<span class="font-semibold text-gray-900 flex-1">{faq.question}</span>
					<ChevronDown
						size={20}
						class="flex-shrink-0 text-primary transition-transform duration-300 {openIndex === index ? 'rotate-180' : ''}"
					/>
				</button>

				{#if openIndex === index}
					<div class="px-6 pb-6 animate-fade-in">
						<div class="pt-2 border-t border-gray-100">
							<p class="text-gray-600 leading-relaxed">{faq.answer}</p>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="text-center mt-12">
		<p class="text-gray-600 mb-4">Still have questions?</p>
		<WhatsAppButton variant="primary" message="Hi! I still have a question..." text="Chat on WhatsApp"/>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.3s ease-out;
	}
</style>

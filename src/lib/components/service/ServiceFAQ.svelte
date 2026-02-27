<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import WhatsAppButton from '../WhatsAppButton.svelte';	

	interface FAQItem {
		question: string;
		answer: string;
	}

	interface Props {
		faqs: FAQItem[];
		title?: string;
	}

	let { faqs, title = 'Frequently Asked Questions' }: Props = $props();

	// Track which FAQ items are open (using index)
	let openItems = $state<Set<number>>(new Set());

	function toggleItem(index: number) {
		const newSet = new Set(openItems);
		if (newSet.has(index)) {
			newSet.delete(index);
		} else {
			newSet.add(index);
		}
		openItems = newSet;
	}

	// Generate FAQ structured data for Google
	const faqStructuredData = $derived(JSON.stringify({
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqs.map(faq => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer
			}
		}))
	}));
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${faqStructuredData}<\/script>`}
</svelte:head>

<section class="py-16 bg-white">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto">
			<!-- Section Header -->
			<div class="text-center mb-12">
				<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
					{title}
				</h2>
				<p class="text-lg text-gray-600">
					Get answers to common questions about our services
				</p>
			</div>

			<!-- FAQ Items -->
			<div class="space-y-4">
				{#each faqs as faq, index}
					<div class="border-2 border-gray-100 rounded-xl overflow-hidden bg-white hover:border-primary/30 transition-all">
						<button
							onclick={() => toggleItem(index)}
							class="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors"
							aria-expanded={openItems.has(index)}
						>
							<span class="font-semibold text-lg text-charcoal pr-4">
								{faq.question}
							</span>
							<ChevronDown
								class="flex-shrink-0 text-primary transition-transform duration-300 mt-1 {openItems.has(index) ? 'rotate-180' : ''}"
								size={24}
							/>
						</button>

						{#if openItems.has(index)}
							<div class="px-6 pb-5 pt-0">
								<div class="text-gray-700 leading-relaxed prose prose-sm max-w-none">
									{@html faq.answer}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Bottom CTA -->
			<div class="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
				<h3 class="text-2xl font-bold text-charcoal mb-3">
					Still Have Questions?
				</h3>
				<p class="text-gray-700 mb-6">
					We're here to help. Chat with us and get personalized answers.
				</p>
				<WhatsAppButton/>
			</div>
		</div>
	</div>
</section>

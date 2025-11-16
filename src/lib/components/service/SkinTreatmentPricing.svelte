<script lang="ts">
	import { Check, Info } from '@lucide/svelte';

	interface PricingTier {
		name: string;
		price: number | string;
		priceNote?: string;
		description: string;
		features: string[];
	}

	const pricingTiers: PricingTier[] = [
		{
			name: 'Initial Consultation',
			price: 60,
			priceNote: '',
			description: 'Comprehensive skin lesion assessment and identification',
			features: ['Professional evaluation', 'Lesion identification', 'Treatment plan discussion']
		},
		{
			name: 'Per Lesion Treatment',
			price: '$20-$25',
			priceNote: 'per lesion',
			description: 'Individual lesion removal based on size and location',
			features: ['Price varies by size', 'Location-dependent', 'Plus applicable taxes']
		}
	];
</script>

<section class="py-16 bg-gradient-to-br from-warm-white to-sage-light/10">
	<div class="container-custom">
		<div class="text-center mb-12">
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Transparent Pricing
			</h2>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Clear, straightforward pricing based on the number of lesions you want removed
			</p>
		</div>

		<div class="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 mb-12">
			{#each pricingTiers as tier}
				<div
					class="rounded-2xl p-6 shadow-lg hover-lift border-2 transition-all bg-white border-gray-100"
				>
					<div class="mb-4">
						<h3 class="text-lg font-bold text-charcoal mb-2">
							{tier.name}
						</h3>
						<div class="flex items-baseline gap-2 mb-3">
							{#if typeof tier.price === 'number'}
								<span class="text-3xl font-bold text-primary">${tier.price}</span>
								<span class="text-sm text-gray-500">CAD</span>
								{#if tier.priceNote}
									<span class="text-sm text-gray-600">{tier.priceNote}</span>
								{/if}
							{:else}
								<span class="text-3xl font-bold text-primary">{tier.price}</span>
								<span class="text-sm text-gray-600">Quote</span>
							{/if}
						</div>
						<p class="text-sm text-gray-700 mb-4">
							{tier.description}
						</p>
						<div class="space-y-2">
							{#each tier.features as feature}
								<div class="flex items-center gap-2">
									<Check class="text-primary flex-shrink-0" size={16} />
									<span class="text-sm text-gray-700">{feature}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Important Notes -->
		<div class="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-xl p-6">
			<div class="flex items-start gap-3">
				<Info class="text-primary flex-shrink-0 mt-1" size={24} />
				<div class="text-sm text-gray-700 space-y-2">
					<p class="font-semibold text-charcoal">Important to Know:</p>
					<ul class="space-y-1 list-disc list-inside">
						<li>Consultation fee: $60 CAD + taxes</li>
						<li>Treatment pricing: $20-$25 per lesion (based on size and location) + taxes</li>
						<li>Payment required at time of service</li>
						<li>These are cosmetic procedures not covered by OHIP</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="text-center mt-12">
			<p class="text-xl text-gray-700 mb-6">
				Ready to get started?
			</p>
			<a
				href="#contact"
				class="btn btn-secondary btn-lg text-lg px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-0 inline-flex items-center gap-2"
			>
				Book Your Consultation
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
			<p class="text-sm text-gray-600 mt-4">
				$60 consultation includes comprehensive lesion assessment
			</p>
		</div>
	</div>
</section>

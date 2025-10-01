<script lang="ts">
	import { Check } from 'lucide-svelte';

	interface PricingTier {
		title: string;
		price: string;
		duration?: string;
		features: string[];
		cta: string;
	}

	interface Props {
		pricing: PricingTier[];
	}

	let { pricing }: Props = $props();
</script>

<section class="py-32 bg-base-100">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="text-center mb-20">
			<p class="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
				Investment in Your Health
			</p>
			<h2 class="text-5xl font-light mb-4">Pricing & Packages</h2>
			<p class="text-xl text-base-content/70 max-w-2xl mx-auto">
				Choose the option that works best for you. All packages include our commitment to your
				success.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-{pricing.length > 2 ? '3' : '2'} gap-8">
			{#each pricing as tier, index}
				<div
					class="bg-base-200 rounded-3xl p-8 flex flex-col {index === 1 && pricing.length === 3
						? 'border-2 border-primary shadow-2xl scale-105'
						: 'shadow-lg'}"
				>
					<div class="mb-6">
						<h3 class="text-2xl font-semibold mb-2">{tier.title}</h3>
						{#if tier.duration}
							<p class="text-base-content/60 text-sm">{tier.duration}</p>
						{/if}
					</div>

					<div class="mb-8">
						<div class="flex items-baseline gap-2">
							<span class="text-5xl font-light">{tier.price}</span>
							{#if tier.price.includes('$') && !tier.price.includes('Custom')}
								<span class="text-base-content/60"></span>
							{/if}
						</div>
					</div>

					<ul class="space-y-4 mb-8 flex-grow">
						{#each tier.features as feature}
							<li class="flex gap-3">
								<div class="flex-shrink-0 mt-0.5">
									<Check class="w-5 h-5 text-success" />
								</div>
								<span class="text-base-content/80">{feature}</span>
							</li>
						{/each}
					</ul>

					<a
						href="tel:+13653369757"
						class="btn {index === 1 && pricing.length === 3
							? 'btn-primary'
							: 'btn-outline btn-primary'} btn-lg w-full hover:scale-105 transition-transform"
					>
						{tier.cta}
					</a>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<p class="text-base-content/70 mb-4">
				Not sure which option is right for you? We're here to help.
			</p>
			<a href="tel:+13653369757" class="btn btn-outline">
				<Phone class="w-5 h-5" />
				Call to Discuss Your Needs
			</a>
		</div>
	</div>
</section>

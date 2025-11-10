<script lang="ts">
	import { Check, Users, Star } from '@lucide/svelte';

	interface PricingPlan {
		name: string;
		price: number;
		pricePerSession?: string;
		description: string;
		features: string[];
		ctaText: string;
		isPopular?: boolean;
		highlighted?: boolean;
	}

	const plans: PricingPlan[] = [
		{
			name: 'Single Session',
			price: 85,
			pricePerSession: 'per session',
			description: 'Your 60-minute deep dive: pinpoint your challenge, get clarity and walk away with an actionable next step.',
			features: ['60-min session', 'Action plan', 'Testing the waters'],
			ctaText: 'Book Session'
		},
		{
			name: '3-Session Package',
			price: 240,
			pricePerSession: '$80/session',
			description: 'Get momentum: start building healthier habits with structure and direction.',
			features: ['3 sessions', 'Action plan', 'Email support'],
			ctaText: 'Get Started'
		},
		{
			name: '6-Session Package',
			price: 450,
			pricePerSession: '$75 per session',
			description: "Sustain your progress. Ideal if you're ready to commit to meaningful change.",
			features: ['6 sessions', 'Ongoing support', 'Progress reviews'],
			ctaText: 'Start Your Journey',
		},
		{
			name: '3-Month Program',
			price: 840,
			pricePerSession: '$70 per session',
			description: 'Transform your lifestyle and mindset with lasting results, not just quick fixes.',
			features: ['12 sessions', 'Continuous support', 'Custom wellness plan'],
			ctaText: 'Transform Your Life'
		}
	];

	interface Addon {
		icon: any;
		title: string;
		price: number;
		description: string;
	}

	const addons: Addon[] = [
		{
			icon: Users,
			title: 'Couple or Family Session',
			price: 120,
			description: 'Bring your partner or family into your wellness journey'
		},
		{
			icon: Check,
			title: 'Initial Wellness Assessment',
			price: 50,
			description: 'Free when you enroll in a package'
		}
	];
</script>

<section class="py-16 bg-gradient-to-br from-warm-white to-sage-light/10">
	<div class="container-custom">
		<div class="text-center mb-12">
		<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Health Coaching Plans
			</h2>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Choose the support level that fits your goals, no hidden fees, no commitments beyond what you choose
			</p>
		</div>

		<div class="space-y-6 mb-12">
			{#each plans as plan}
				<div
					class="rounded-2xl p-6 shadow hover-lift border-2 transition-all relative {plan.highlighted ? 'bg-primary border-primary shadow-2xl' : 'bg-white border-gray-100'}"
				>
					<!-- Popular Badge -->
					{#if plan.isPopular}
						<div class="absolute -top-3 left-6">
							<div class="bg-secondary text-white px-3 py-1 rounded-full  font-bold shadow-lg flex items-center gap-1">
								<Star size={12} fill="currentColor" />
								MOST POPULAR
							</div>
						</div>
					{/if}

					<div class="flex flex-col md:flex-row md:items-center gap-6 {plan.isPopular ? 'pt-2' : ''}">
						<!-- Left Column: Title & Details -->
						<div class="flex-grow">
							<h3 class=" font-bold mb-2 uppercase tracking-wide {plan.highlighted ? 'text-white/90' : 'text-primary'}">
								{plan.name}
							</h3>
							<p class="mb-3  leading-relaxed {plan.highlighted ? 'text-white/95' : 'text-gray-700'}">
								{plan.description}
							</p>
							<div class="flex flex-wrap gap-x-4 gap-y-1">
								{#each plan.features as feature}
									<div class="flex items-center gap-1.5">
										<Check class="flex-shrink-0 {plan.highlighted ? 'text-white' : 'text-primary'}" size={14} />
										<span class=" {plan.highlighted ? 'text-white/95' : 'text-gray-700'}">{feature}</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- Right Column: Price & CTA -->
						<div class="md:w-56 flex-shrink-0 flex flex-col items-end gap-4">
							<div class="text-right">
								<div class="flex items-baseline justify-end gap-1">
									<span class="text-3xl font-bold {plan.highlighted ? 'text-white' : 'text-charcoal'}">${plan.price}</span>
									<span class=" {plan.highlighted ? 'text-white/80' : 'text-gray-500'}">CAD</span>
								</div>
								{#if plan.pricePerSession}
									<p class=" mt-1 text-gray-600 font-semibold">
										{plan.pricePerSession}
									</p>
								{/if}
							</div>
					</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Optional Add-ons -->
		<div class="max-w-3xl mx-auto">
			<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
				<h3 class="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
					<Users class="text-primary" size={28} />
					Optional Add-ons
				</h3>

				<div class="grid sm:grid-cols-2 gap-6">
					{#each addons as addon}
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
								<svelte:component this={addon.icon} class="text-primary" size={20} />
							</div>
							<div>
								<div class="font-semibold text-charcoal mb-1">{addon.title}</div>
								<div class="text-2xl font-bold text-primary mb-1">
									${addon.price} <span class="text-base font-normal text-gray-600">CAD</span>
								</div>
								<p class=" text-gray-600">{addon.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="text-center mt-12">
			<p class="text-xl text-gray-700 mb-6">
				Ready to take the next step?
			</p>
			<a
				href="#contact"
				class="btn btn-secondary btn-lg text-lg px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-0 inline-flex items-center gap-2"
			>
				Book Your Free Discovery Call
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
			<p class=" text-gray-600 mt-4">
				No pressure. Just an honest conversation about your health goals.
			</p>
		</div>
	</div>
</section>

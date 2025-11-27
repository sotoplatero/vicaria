<script lang="ts">
	import { Clock, Calendar, Sparkles, Shield } from "@lucide/svelte";
	import CTA from "$lib/components/CTA.svelte";
	import HealthCoachingPricing from "$lib/components/service/HealthCoachingPricing.svelte";
	import SkinTreatmentPricing from "$lib/components/service/SkinTreatmentPricing.svelte";

	const processSteps = [
		{
			step: "01",
			title: "Discovery Call",
			description:
				"We start with a free 15-minute chat to see if we are a good fit. We discuss your main struggles and how I can help.",
			icon: Clock,
		},
		{
			step: "02",
			title: "Initial Assessment",
			description:
				"In our first deep-dive session, we uncover the root causes of your symptoms through a detailed health history review.",
			icon: Shield,
		},
		{
			step: "03",
			title: "Your Unique Plan",
			description:
				"I create a personalized nutrition and lifestyle protocol tailored specifically to your body and goals.",
			icon: Sparkles,
		},
		{
			step: "04",
			title: "Ongoing Support",
			description:
				"We work together over weeks or months to implement changes, adjust as needed, and ensure sustainable results.",
			icon: Calendar,
		},
	];
</script>

<svelte:head>
	<title>Pricing & Process - Vicaria Health</title>
	<meta
		name="description"
		content="Transparent pricing for nutrition coaching and skin treatments. Choose from single sessions or comprehensive packages."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-32 pb-12 overflow-hidden bg-warm-white">
	<div
		class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"
	></div>
	<div class="container-custom text-center">
		<div
			class="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 mb-6"
		>
			<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
			<span class="text-sm font-medium text-primary"
				>Invest in Your Health</span
			>
		</div>
		<h1
			class="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight"
		>
			Simple, Transparent <span class="text-primary">Pricing</span>
		</h1>
		<p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
			Choose the level of support that fits your needs. No hidden fees,
			just expert care dedicated to your well-being.
		</p>
	</div>
</section>

<!-- Health Coaching Pricing -->
<HealthCoachingPricing />

<!-- Skin Treatment Pricing -->
<SkinTreatmentPricing />

<!-- Process Section -->
<section
	class="py-24 bg-gradient-to-b from-warm-white to-white overflow-hidden"
>
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-charcoal mb-4">
				Your Journey to Wellness
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Here is what you can expect when we work together. A structured
				path designed for your success.
			</p>
		</div>

		<div class="relative max-w-5xl mx-auto">
			<!-- Connecting Line (Desktop) -->
			<div
				class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20 -translate-x-1/2"
			></div>

			<div class="space-y-12 md:space-y-24">
				{#each processSteps as step, i}
					<div
						class="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 {i %
							2 ===
						0
							? ''
							: 'md:flex-row-reverse'}"
					>
						<!-- Step Number/Icon Bubble -->
						<div
							class="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-warm-white shadow-lg flex items-center justify-center z-10 hidden md:flex"
						>
							<div
								class="w-3 h-3 rounded-full bg-{i % 2 === 0
									? 'primary'
									: 'secondary'}"
							></div>
						</div>

						<!-- Content -->
						<div
							class="flex-1 text-center md:text-{i % 2 === 0
								? 'right'
								: 'left'}"
						>
							<div
								class="inline-block p-4 rounded-2xl bg-{i %
									2 ===
								0
									? 'primary'
									: 'secondary'}/10 mb-4 text-{i % 2 === 0
									? 'primary'
									: 'secondary'}"
							>
								<svelte:component this={step.icon} size={32} />
							</div>
							<h3 class="text-2xl font-bold text-charcoal mb-3">
								{step.title}
							</h3>
							<p class="text-gray-600 leading-relaxed">
								{step.description}
							</p>
						</div>

						<!-- Empty side for balance -->
						<div class="flex-1 hidden md:block"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<CTA
	title="Ready to Get Started?"
	description="Your health is your most valuable asset. Take the first step today with a free discovery call."
	badge="No Commitment"
/>

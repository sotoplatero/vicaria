<script lang="ts">
	import {
		Tag,
		Sparkles,
		Heart,
		CheckCircle2,
		Clock,
		ArrowRight,
		Gift,
		Shield,
		Users,
	} from "@lucide/svelte";
	import CTA from "$lib/components/CTA.svelte";
	import Testimonials from "$lib/components/Testimonials.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import offerData from "$lib/data/current-offer.json";

	// No props needed - Testimonials component loads its own data

	const offer = offerData.isActive ? offerData : null;

	// Transform FAQs to add IDs
	const faqs = offer?.faqs.map((faq, index) => ({
		id: `faq-${index}`,
		question: faq.question,
		answer: faq.answer
	})) || [];

	// Map service pillar IDs to categories for styling
	const categoryMap: Record<string, "health-coaching" | "skin-treatments"> = {
		"digestive-relief": "health-coaching",
		"diabetes-clarity": "health-coaching",
		"blood-pressure-balance": "health-coaching",
		"menopause-health": "health-coaching",
		"uti-pelvic-health": "health-coaching",
		"cancer-recovery": "health-coaching",
		"general-wellness": "health-coaching",
		"skin-services": "skin-treatments",
	};

	const category = offer
		? categoryMap[offer.servicePillarId] || "health-coaching"
		: "health-coaching";
	const colorClass = category === "health-coaching" ? "primary" : "secondary";

	// WhatsApp CTA URL with personalized message
	const whatsappUrl = offer
		? `https://wa.me/13653369757?text=${encodeURIComponent(`Hi! I'm interested in the ${offer.servicePillar} offer (${offer.offerFormat}). Can you help me get started?`)}`
		: "https://wa.me/13653369757?text=Hi!%20Can%20you%20help%20me%20get%20started%3F";
</script>

<svelte:head>
	<title
		>{offer ? offer.title : "Monthly Special Offer"} - Vicaria Health</title
	>
	<meta
		name="description"
		content={offer?.subtitle ||
			"Check out our monthly special offer for wellness services."}
	/>
</svelte:head>

{#if offer}
	<!-- Hero Section - Centered with Background Image -->
	<section
		class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
		style="background-image: url('/images/vicaria-4.webp'); background-position: top;"
	>
		<!-- Dark overlay for text readability -->
		<div class="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-warm-white/95"></div>

		<div class="container-custom text-center relative z-10 py-20">
			<div class="flex items-center justify-center gap-3 mb-4">
				<span
					class="text-sm uppercase tracking-widest font-bold text-{colorClass}"
				>
					{offer.theme}
				</span>
			</div>
			<!-- Urgency Badge -->
			<div
				class="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-full shadow-2xl mb-8 animate-pulse"
			>
				<Gift class="text-{colorClass}" size={32} />
				<span class="text-sm font-bold uppercase tracking-wide">
					{offer.scarcity}
				</span>
			</div>

			<!-- Main Title -->
			<h1
				class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-5xl mx-auto drop-shadow-2xl leading-16"
			>
				{offer.title}
			</h1>

			<!-- Subtitle -->
			<p
				class="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg font-medium"
			>
				{offer.subtitle}
			</p>

			<div>
				<!-- Primary CTA -->
				<a
					href={whatsappUrl}
					class="btn btn-{colorClass} btn-lg text-xl px-12 py-4 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all border-0 inline-flex items-center gap-3 rounded-full font-bold"
				>
					{offer.softCTA}
					<ArrowRight size={24} />
				</a>
			</div>
			<!-- Trust Indicators Mini -->
			<div
				class="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mt-8"
			>
				<div class="flex items-center gap-2">
					<Shield size={18} class="text-{colorClass}" />
					<span>No commitment required</span>
				</div>
				<div class="flex items-center gap-2">
					<Users size={18} class="text-{colorClass}" />
					<span>Trusted by 150+ clients</span>
				</div>
			</div>

			<!-- Scroll indicator (optional) -->
			<div class="text-white/60 animate-bounce">
				<svg
					class="w-6 h-6 mx-auto"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					></path>
				</svg>
			</div>
		</div>
	</section>

	<!-- What You Get Section - Grid Cards -->
	<section class="py-24 bg-gradient-to-b from-white to-warm-white">
		<div class="container-custom">
			<div class="text-center mb-16">
				<div
					class="inline-flex items-center gap-3 bg-{colorClass}/10 px-6 py-3 rounded-full mb-4"
				>
					<Sparkles class="text-{colorClass}" size={24} />
					<span
						class="text-{colorClass} font-bold uppercase tracking-wide text-sm"
					>
						What's Included
					</span>
				</div>
				<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
					Everything You Need to Succeed
				</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					This isn't just another offer. It's a complete
					transformation package.
				</p>
			</div>

			<div
				class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
			>
				{#each offer.whatYouGet as item, index}
					<div
						class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-{colorClass}/10 group"
					>
						<div class="flex items-start gap-4">
							<div
								class="flex-shrink-0 w-12 h-12 rounded-xl bg-{colorClass}/10 flex items-center justify-center text-{colorClass} group-hover:bg-{colorClass} group-hover:text-white transition-all"
							>
								<CheckCircle2 size={24} />
							</div>
							<div>
								<p class="text-gray-700 leading-relaxed">
									{item}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Why It Matters Section - Emotional -->
	<section class="py-24 bg-white relative overflow-hidden">
		<!-- Decorative elements -->
		<div
			class="absolute top-0 left-0 w-64 h-64 bg-{colorClass}/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
		></div>
		<div
			class="absolute bottom-0 right-0 w-64 h-64 bg-{colorClass}/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
		></div>

		<div class="container-custom relative z-10">
			<div class="max-w-4xl mx-auto">
				<div class="text-center mb-12">
					<div
						class="inline-flex items-center gap-3 bg-{colorClass}/10 px-6 py-3 rounded-full mb-4"
					>
						<Heart class="text-{colorClass}" size={24} />
						<span
							class="text-{colorClass} font-bold uppercase tracking-wide text-sm"
						>
							Why This Works
						</span>
					</div>
					<h2
						class="text-4xl md:text-5xl font-bold text-charcoal mb-4"
					>
						This Could Change Everything
					</h2>
				</div>

				<div class="space-y-8">
					{#each offer.whyItMatters as point, index}
						<div class="relative">
							<div
								class="flex items-start gap-6 bg-gradient-to-r from-{colorClass}/5 to-transparent rounded-2xl p-6 md:p-8 hover:from-{colorClass}/10 transition-all"
							>
								<div
									class="flex-shrink-0 w-12 h-12 rounded-full bg-{colorClass} text-white flex items-center justify-center font-bold text-xl shadow-lg"
								>
									{index + 1}
								</div>
								<p
									class="text-lg md:text-xl text-gray-700 leading-relaxed pt-2"
								>
									{point}
								</p>
							</div>
						</div>
					{/each}
				</div>

		</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<Testimonials />

	<!-- FAQ Section -->
	<section class="py-24 bg-white">
		<div class="container-custom">
			<FAQ {faqs} />
		</div>
	</section>

	<!-- How to Claim - Simple Steps -->
	<section class="py-24 bg-gradient-to-b from-warm-white to-white">
		<div class="container-custom">
			<div class="max-w-5xl mx-auto">
				<div class="text-center mb-16">
					<div
						class="inline-flex items-center gap-3 bg-{colorClass}/10 px-6 py-3 rounded-full mb-4"
					>
						<Tag class="text-{colorClass}" size={24} />
						<span
							class="text-{colorClass} font-bold uppercase tracking-wide text-sm"
						>
							Getting Started
						</span>
					</div>
					<h2
						class="text-4xl md:text-5xl font-bold text-charcoal mb-4"
					>
						It's Easier Than You Think
					</h2>
					<p class="text-xl text-gray-600">
						Three simple steps to claim your offer
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-8 mb-12">
					{#each offer.howToClaim.slice(0, 3) as step, index}
						<div class="text-center group">
							<div class="relative mb-6">
								<div
									class="w-20 h-20 rounded-full bg-gradient-to-br from-{colorClass} to-{colorClass}/70 text-white flex items-center justify-center font-bold text-3xl shadow-2xl mx-auto group-hover:scale-110 transition-transform"
								>
									{index + 1}
								</div>
								{#if index < 2}
									<div
										class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-{colorClass}/20"
									>
										<ArrowRight
											class="absolute right-0 top-1/2 -translate-y-1/2 text-{colorClass}/40"
											size={24}
										/>
									</div>
								{/if}
							</div>
							<p
								class="text-lg text-gray-700 leading-relaxed px-4"
							>
								{step}
							</p>
						</div>
					{/each}
				</div>

				<!-- Final CTA Box -->
				<div
					class="bg-gradient-to-br from-{colorClass} to-{colorClass}/80 rounded-3xl p-10 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
				>
					<!-- Decorative pattern -->
					<div
						class="absolute inset-0 opacity-10"
						style="background-image: url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E');"
					></div>

					<div class="relative z-10">
						<div
							class="flex items-center justify-center gap-2 mb-4"
						>
							<Clock size={20} />
							<span
								class="text-sm font-bold uppercase tracking-widest"
							>
								{offer.scarcity}
							</span>
						</div>

						<h3 class="text-3xl md:text-4xl font-bold mb-4">
							Don't Miss This Opportunity
						</h3>

						<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
							Take the first step toward better health today. No
							commitment, no pressure—just real support.
						</p>

						<a
							href={whatsappUrl}
							class="btn btn-white hover:bg-gray-50 btn-lg text-xl px-12 py-4 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all inline-flex items-center gap-3 rounded-full font-bold text-{colorClass}"
						>
							{offer.softCTA}
							<ArrowRight size={24} />
						</a>

						<p class="text-sm mt-6 text-white/80">
							✓ Free consultation • ✓ No obligation • ✓ Results
							guaranteed
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- No Active Offer State -->
	<section
		class="relative pt-32 pb-24 overflow-hidden bg-warm-white min-h-screen flex items-center"
	>
		<div class="container-custom text-center">
			<div class="inline-block p-6 rounded-2xl bg-primary/10 mb-6">
				<Tag size={80} class="text-primary/30" />
			</div>
			<h1 class="text-4xl md:text-5xl font-bold text-charcoal mb-6">
				No Active Offers Right Now
			</h1>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
				Check back at the beginning of next month for our new special
				offer. In the meantime, explore our regular services and
				pricing.
			</p>
			<a
				href="/pricing"
				class="btn btn-primary btn-lg text-lg px-10 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
			>
				View Regular Pricing
				<ArrowRight size={20} />
			</a>
		</div>
	</section>
{/if}

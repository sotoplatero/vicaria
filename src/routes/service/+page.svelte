<script lang="ts">
	import {
		Activity,
		Heart,
		Users,
		Droplets,
		Sparkles,
		ArrowRight,
		Search,
	} from "@lucide/svelte";
	import {
		getHealthCoachingServices,
		getSkinTreatmentServices,
	} from "$lib/utils/services";
	import WhatsAppButton from "$lib/components/WhatsAppButton.svelte";

	const healthCoachingServices = getHealthCoachingServices();
	const skinTreatmentServices = getSkinTreatmentServices();

	const iconMap: Record<string, any> = {
		activity: Activity,
		heart: Heart,
		users: Users,
		droplets: Droplets,
		sparkles: Sparkles,
	};

	// Schema markup for search engines
	const medicalBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "MedicalBusiness",
		name: "Vicaria Health - Professional Health Coaching & Skin Treatment Services",
		description:
			"Expert nutrition counseling, health coaching, and professional skin treatments in Hamilton, Ontario. Specialized care for digestive health, diabetes, cancer support, menopause, and skin concerns.",
		url: "https://vicaria.ca/service",
		telephone: "+1-365-336-9757",
		email: "[email protected]",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Unit 2B 144 James St S",
			addressLocality: "Hamilton",
			addressRegion: "ON",
			postalCode: "L8P 3A2",
			addressCountry: "CA",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 43.2557,
			longitude: -79.8711,
		},
		priceRange: "$$",
		areaServed: {
			"@type": "City",
			name: "Hamilton",
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Health Coaching & Skin Treatment Services",
			itemListElement: [
				...healthCoachingServices.map((service, index) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "MedicalTherapy",
						name: service.service,
						description: service.description,
					},
					position: index + 1,
				})),
				...skinTreatmentServices.map((service, index) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "MedicalProcedure",
						name: service.service,
						description: service.description,
					},
					position: healthCoachingServices.length + index + 1,
				})),
			],
		},
	};

	// Breadcrumb schema
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://vicaria.ca",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Services",
				item: "https://vicaria.ca/service",
			},
		],
	};

	// ItemList schema for all services
	const itemListSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Vicaria Health Services",
		description:
			"Complete list of health coaching and skin treatment services offered by Vicaria Health in Hamilton, Ontario.",
		itemListElement: [
			...healthCoachingServices.map((service, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: service.service,
				url: `https://vicaria.ca/service/${service.slug}`,
			})),
			...skinTreatmentServices.map((service, index) => ({
				"@type": "ListItem",
				position: healthCoachingServices.length + index + 1,
				name: service.service,
				url: `https://vicaria.ca/service/${service.slug}`,
			})),
		],
	};
</script>

<svelte:head>
	<title
		>Professional Health Coaching & Skin Treatment Services in Hamilton, ON
		| Vicaria Health</title
	>
	<meta
		name="description"
		content="Expert nutrition counseling, health coaching, and professional skin treatments in Hamilton. Specialized care for digestive health, diabetes, cancer recovery, menopause, skin tags, milia removal, and more. Book your free consultation today."
	/>
	<meta
		name="keywords"
		content="health coaching Hamilton, nutrition counseling Hamilton, dietitian Hamilton, skin treatment Hamilton, diabetes coach, digestive health, menopause support, skin tag removal, milia removal Hamilton"
	/>

	<!-- Open Graph / Social Media -->
	<meta
		property="og:title"
		content="Professional Health Coaching & Skin Treatment Services | Vicaria Health"
	/>
	<meta
		property="og:description"
		content="Expert nutrition counseling, health coaching, and professional skin treatments in Hamilton. Specialized care for digestive health, diabetes, cancer recovery, and skin concerns."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://vicaria.ca/service" />
	<meta
		property="og:image"
		content="https://vicaria.ca/images/vicaria-hero.webp"
	/>
	<meta property="og:site_name" content="Vicaria Health" />
	<meta property="og:locale" content="en_CA" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Professional Health Coaching & Skin Treatment Services | Vicaria Health"
	/>
	<meta
		name="twitter:description"
		content="Expert nutrition counseling and skin treatments in Hamilton, Ontario."
	/>
	<meta
		name="twitter:image"
		content="https://vicaria.ca/images/vicaria-hero.webp"
	/>

	<!-- Canonical URL -->
	<link rel="canonical" href="https://vicaria.ca/service" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(medicalBusinessSchema)}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(itemListSchema)}<\/script>`}
</svelte:head>

<!-- Hero Section -->
<section
	class="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-white to-white"
>
	<!-- Decorative Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"
		></div>
		<div
			class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"
		></div>
		<div
			class="absolute inset-0 opacity-[0.03]"
			style="background-image: radial-gradient(circle, #2c2c2c 1px, transparent 1px); background-size: 50px 50px;"
		></div>
	</div>

	<div class="container-custom relative z-10 py-20">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<!-- Breadcrumb -->
			<nav class="text-sm text-gray-500" aria-label="Breadcrumb">
				<a href="/" class="hover:text-primary transition-colors">Home</a
				>
				<span class="mx-2">/</span>
				<span class="text-charcoal">Services</span>
			</nav>

			<!-- Badge -->
			<div
				class="inline-flex items-center justify-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm"
			>
				<span class="w-2 h-2 rounded-full bg-primary animate-pulse"
				></span>
				<span class="text-sm font-medium text-primary"
					>Our Services</span
				>
			</div>

			<!-- Title -->
			<h1
				class="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[0.95] tracking-tight"
			>
				Professional Health Coaching & <span class="text-primary block"
					>Skin Treatment Services</span
				> in Hamilton
			</h1>

			<!-- Description -->
			<p
				class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
			>
				Expert nutrition counseling, personalized health coaching, and
				professional skin treatments to help you feel like yourself
				again.
			</p>

			<!-- CTA -->
			<div class="pt-4">
				<WhatsAppButton
					text="Free 15-Min Consultation"
					variant="secondary"
					size="xl"
				/>
			</div>

			<!-- Trust Indicators -->
			<div
				class="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-gray-600"
			>
				<div class="flex items-center gap-2">
					<svg
						class="w-5 h-5 text-primary"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Licensed & Certified</span>
				</div>
				<div class="flex items-center gap-2">
					<svg
						class="w-5 h-5 text-primary"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Located in Hamilton, ON</span>
				</div>
				<div class="flex items-center gap-2">
					<svg
						class="w-5 h-5 text-primary"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>In-Person & Virtual</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Health Coaching Services -->
<section id="health-coaching" class="section-padding bg-white">
	<div class="container-custom">
		<header class="text-center mb-16">
			<div
				class="inline-flex items-center justify-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm mb-6"
			>
				<Heart class="text-primary" size={18} />
				<span class="text-sm font-medium text-primary"
					>Health Coaching</span
				>
			</div>
			<h2
				class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-4"
			>
				Personalized Nutrition & <span class="text-primary"
					>Wellness Coaching</span
				>
			</h2>
			<p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
				Evidence-based nutrition counseling tailored to your unique
				health needs and goals.
			</p>
		</header>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each healthCoachingServices as service, index}
				{@const IconComponent =
					iconMap[service.cardIcon.toLowerCase()] || Activity}
				<a
					href="/service/{service.slug}"
					class="group relative bg-warm-white rounded-3xl p-8 hover-lift border border-gray-100 transition-all duration-300"
					style="animation-delay: {index * 100}ms"
				>
					<!-- Icon -->
					<div class="mb-6 relative">
						<div
							class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
						>
							<IconComponent class="text-primary" size={32} />
						</div>
					</div>

					<!-- Content -->
					<div class="space-y-4">
						<h3
							class="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors"
						>
							{service.service}
						</h3>

						<p class="text-gray-600 leading-relaxed text-base">
							{service.pain}
						</p>

						<!-- Solution -->
						<div class="pt-2 pb-4">
							<blockquote
								class="text-sm text-gray-700 leading-relaxed italic border-l-2 border-primary pl-4"
							>
								{service.solution}
							</blockquote>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Skin Treatment Services -->
<section id="skin-treatments" class="section-padding bg-warm-white">
	<div class="container-custom">
		<header class="text-center mb-16">
			<div
				class="inline-flex items-center justify-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm mb-6"
			>
				<Sparkles class="text-secondary" size={18} />
				<span class="text-sm font-medium text-secondary"
					>Skin Treatments</span
				>
			</div>
			<h2
				class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-4"
			>
				Professional <span class="text-secondary">Skin Treatment</span> Services
			</h2>
			<p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
				Safe, effective, and professional treatments for common skin
				concerns.
			</p>
		</header>

		<div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
			{#each skinTreatmentServices as service, index}
				{@const IconComponent =
					iconMap[service.cardIcon.toLowerCase()] || Sparkles}
				<article
					class="group relative bg-white rounded-3xl p-8 hover-lift border border-gray-100 transition-all duration-300"
					style="animation-delay: {index * 100}ms"
				>
					<!-- Icon -->
					<div class="mb-6 relative">
						<div
							class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
						>
							<IconComponent class="text-secondary" size={32} />
						</div>
					</div>

					<!-- Content -->
					<div class="space-y-4">
						<h3
							class="text-xl font-bold text-charcoal group-hover:text-secondary transition-colors"
						>
							{service.service}
						</h3>

						<p class="text-gray-600 leading-relaxed">
							{service.pain}
						</p>

						<!-- Solution (if available) -->
						{#if service.solution}
							<div class="pt-2">
								<p
									class="text-sm text-gray-700 leading-relaxed"
								>
									{service.solution}
								</p>
							</div>
						{/if}

						<!-- CTA -->
						<div class="pt-2">
							<a
								href="/service/{service.slug}"
								class="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all"
							>
								Learn More
								<ArrowRight
									size={16}
									class="group-hover:translate-x-1 transition-transform"
								/>
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="relative bg-primary rounded-3xl overflow-hidden shadow-2xl">
			<!-- Decorative elements -->
			<div
				class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
			></div>
			<div
				class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
			></div>

			<div class="relative z-10 p-12 md:p-16 text-center">
				<div class="space-y-6">
					<div
						class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full"
					>
						<Search class="text-white" size={18} />
						<span class="text-sm font-medium text-white"
							>Free Consultation Available</span
						>
					</div>

					<h2
						class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
					>
						Not Sure Which Service Is Right for You?
					</h2>

					<p
						class="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
					>
						Book a free 15-minute consultation and we'll help
						determine the best path forward for your health goals.
						No commitment required.
					</p>

					<div class="pt-4">
						<WhatsAppButton
							text="Chat With Us - It's Free"
							size="lg"
							variant="secondary"
						/>
					</div>

					<!-- Trust indicators -->
					<div
						class="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80 text-sm"
					>
						<div class="flex items-center gap-2">
							<svg
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>No credit card required</span>
						</div>
						<div class="hidden sm:block h-4 w-px bg-white/30"></div>
						<div class="flex items-center gap-2">
							<svg
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>15 minutes of your time</span>
						</div>
						<div class="hidden sm:block h-4 w-px bg-white/30"></div>
						<div class="flex items-center gap-2">
							<svg
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Expert guidance</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hover-lift {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.hover-lift:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	.glass {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>

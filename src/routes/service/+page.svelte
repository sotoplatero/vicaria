<script lang="ts">
	import { Heart, Sparkles, Search } from "@lucide/svelte";
	import {
		getHealthCoachingServices,
		getSkinTreatmentServices,
	} from "$lib/utils/services";
	import WhatsAppButton from "$lib/components/WhatsAppButton.svelte";
	import ServiceCard from "$lib/components/service/ServiceCard.svelte";

	const healthCoachingServices = getHealthCoachingServices();
	const skinTreatmentServices = getSkinTreatmentServices();

	const cardImageMap: Record<string, { src: string; alt: string }> = {
		"bloating-relief": {
			src: "/images/services/bloating-triggers-diagram.webp",
			alt: "Diagram showing common bloating triggers and digestive pathways",
		},
		"ibs-nutrition-support": {
			src: "/images/services/ibs-fodmap-phases.webp",
			alt: "Infographic showing the 3 phases of Low FODMAP diet management",
		},
		"diabetes-clarity": {
			src: "/images/services/diabetes-blood-sugar-chart.webp",
			alt: "Chart showing blood sugar levels and diabetes management targets",
		},
		"prediabetes-nutrition-support": {
			src: "/images/services/prediabetes-reversal-timeline.webp",
			alt: "Timeline showing prediabetes reversal milestones with nutrition",
		},
		"blood-pressure-balance": {
			src: "/images/services/blood-pressure-lifestyle-factors.webp",
			alt: "Diagram of lifestyle factors that affect blood pressure",
		},
		"cancer-recovery": {
			src: "/images/services/cancer-recovery-nutrition-pillars.webp",
			alt: "Infographic showing nutrition pillars for cancer recovery support",
		},
		"menopause-health-coaching": {
			src: "/images/services/menopause-symptom-management.webp",
			alt: "Infographic showing menopause symptom management strategies",
		},
		"chronic-digestive-problems": {
			src: "/images/services/digestive-root-causes-diagram.webp",
			alt: "Diagram showing root causes of chronic digestive problems",
		},
		"uti-pelvic-health": {
			src: "/images/services/uti-prevention-strategy.webp",
			alt: "Infographic showing UTI prevention and pelvic health strategies",
		},
		"skin-tag-removal": {
			src: "/images/services/skin-tag-removal-process.webp",
			alt: "Step-by-step illustration of professional skin tag removal",
		},
		"milia-removal": {
			src: "/images/services/milia-extraction-process.webp",
			alt: "Illustration of professional milia extraction process",
		},
		"ruby-points-treatment": {
			src: "/images/services/ruby-points-electrocautery-process.webp",
			alt: "Illustration of cherry angioma treatment with electrocautery",
		},
		"seborrheic-keratosis-removal": {
			src: "/images/services/sk-removal-electrocautery-process.webp",
			alt: "Illustration of seborrheic keratosis removal process",
		},
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
	<title>Health Coaching & Skin Treatments in Hamilton | Vicaria Health</title>
	<meta
		name="description"
		content="Nutrition coaching and skin treatments by medical doctors in Hamilton. Specializing in IBS, diabetes, cancer recovery, skin tags, and milia removal. Free consultation."
	/>

	<!-- Open Graph / Social Media -->
	<meta
		property="og:title"
		content="Health Coaching & Skin Treatments in Hamilton | Vicaria Health"
	/>
	<meta
		property="og:description"
		content="Nutrition coaching and skin treatments by medical doctors in Hamilton. Specializing in IBS, diabetes, cancer recovery, skin tags, and milia removal."
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
		content="Health Coaching & Skin Treatments in Hamilton | Vicaria Health"
	/>
	<meta
		name="twitter:description"
		content="Nutrition coaching and skin treatments by medical doctors in Hamilton. Free consultation available."
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

			<!-- Title -->
			<h1
				class="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[0.95] tracking-tight"
			>
				Health Coaching & <span class="text-primary block"
					>Skin Treatments</span
				> in Hamilton
			</h1>

			<!-- Description -->
			<p
				class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
			>
				Every service at Vicaria Health is delivered by medical doctors
				with 40+ years of combined clinical experience. We treat
				the root cause, not just the symptoms.
			</p>

			<!-- CTA -->
			<div class="pt-4">
				<WhatsAppButton
					text="Book My Free Consultation"
					callText="Book My Free Consultation"
					variant="secondary"
					size="xl"
					message="Hi! I'd like to learn more about your services."
				/>
			</div>
		</div>
	</div>
</section>

<!-- Health Coaching Services -->
<section id="health-coaching" class="section-padding bg-white">
	<div class="container-custom">
		<header class="text-center mb-12">
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
		</header>

		<div class="max-w-3xl mx-auto mb-16 space-y-4 text-lg text-gray-700 leading-relaxed">
			<p>
				Most nutrition advice fails because it ignores your medical history.
				Generic meal plans don't account for how your medications affect absorption,
				why your gut reacts to certain foods, or what your lab results actually mean.
			</p>
			<p>
				Our health coaching programs are built by medical doctors who understand
				the clinical picture behind your symptoms. Whether you're managing a
				chronic condition or trying to feel like yourself again, each program
				starts with understanding YOUR body — not applying a template.
			</p>
		</div>

		<div class="space-y-8 max-w-6xl mx-auto">
			{#each healthCoachingServices as service, index}
				{@const imageData = cardImageMap[service.slug]}
				<ServiceCard
					service={service.service}
					slug={service.slug}
					pain={service.pain}
					solution={service.solution}
					image={imageData?.src ?? service.image}
					imageAlt={imageData?.alt ?? service.service}
					reverse={index % 2 !== 0}
					accentColor="primary"
				/>
			{/each}
		</div>
	</div>
</section>

<!-- Skin Treatment Services -->
<section id="skin-treatments" class="section-padding bg-warm-white">
	<div class="container-custom">
		<header class="text-center mb-12">
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
		</header>

		<div class="max-w-3xl mx-auto mb-16 space-y-4 text-lg text-gray-700 leading-relaxed">
			<p>
				Skin tags, milia, cherry angiomas, and seborrheic keratoses are harmless —
				but that doesn't mean you have to live with them. The difference at Vicaria
				Health is that your treatment is performed by physicians, not estheticians.
			</p>
			<p>
				We identify exactly what each lesion is before removing it, use proper
				medical-grade sterilization, and know when something needs a closer look.
				Quick procedures, minimal discomfort, and you're done in one visit.
			</p>
		</div>

		<div class="space-y-8 max-w-6xl mx-auto">
			{#each skinTreatmentServices as service, index}
				{@const imageData = cardImageMap[service.slug]}
				<ServiceCard
					service={service.service}
					slug={service.slug}
					pain={service.pain}
					solution={service.solution}
					image={imageData?.src ?? service.image}
					imageAlt={imageData?.alt ?? service.service}
					reverse={index % 2 !== 0}
					accentColor="secondary"
				/>
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
	.glass {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>

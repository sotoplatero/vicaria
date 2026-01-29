<script lang="ts">
	import type { PageData } from "./$types";
	import Header from "$lib/components/Header.svelte";
	import CTA from "$lib/components/CTA.svelte";
	import RelatedServices from "$lib/components/service/RelatedServices.svelte";
	import HealthCoachingPricing from "$lib/components/service/HealthCoachingPricing.svelte";
	import SkinTreatmentPricing from "$lib/components/service/SkinTreatmentPricing.svelte";
	import ServiceFAQ from "$lib/components/service/ServiceFAQ.svelte";
	import WhatsAppButton from "$lib/components/WhatsAppButton.svelte";
	import { getRelatedServices } from "$lib/utils/services";
	import { page } from "$app/stores";
	import { ArrowRight, Check, Calendar } from "@lucide/svelte";

	let { data }: { data: PageData } = $props();

	const metadata = $derived(data?.metadata || {});
	const currentSlug = $derived($page.url.pathname.split("/").pop() || "");
	const relatedServices = $derived(getRelatedServices(currentSlug));
	const isHealthCoaching = $derived(metadata.category === "health-coaching");
	const isSkinTreatment = $derived(metadata.category === "skin-treatments");
	const hasFAQs = $derived(metadata.faqs && metadata.faqs.length > 0);

	// CTA customization based on service type
	const ctaTitle = $derived(
		isSkinTreatment
			? "Feel Comfortable in Your Skin Again"
			: "Ready to Transform Your Health?",
	);

	const ctaDescription = $derived(
		isSkinTreatment
			? `Chat with us for 15 minutes and take the first step towards clearer, healthier skin with our professional ${metadata.service}.`
			: `Chat with us for 15 minutes consultation and discover how our personalized ${metadata.service} program can help you feel better, starting today.`,
	);
</script>

<svelte:head>
	<title>{metadata.title || "Vicaria Health Services"}</title>
	<meta
		name="description"
		content={metadata.description ||
			"Professional health coaching services in Hamilton"}
	/>
	<link rel="canonical" href={data?.canonical} />
	<!-- Open Graph -->
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="website" />

	<!-- Structured Data -->
	{#if metadata.service}
		{@html `
			<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "MedicalBusiness",
				"name": "${metadata.title} - Vicaria Health",
				"description": "${metadata.description}",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Unit 2B 144 James St S",
					"addressLocality": "Hamilton",
					"addressRegion": "ON",
					"postalCode": "L8P3A2",
					"addressCountry": "CA"
				},
				"telephone": "+1365-336-9757",
				"email": "[email protected]",
				"url": "https://vicaria.ca",
				"priceRange": "$$",
				"areaServed": {
					"@type": "City",
					"name": "${metadata.city}"
				}
			}
			<\/script>
		`}
	{/if}
</svelte:head>

<!-- Hero Section with Image -->
{#if metadata.service}
	<section
		class="relative min-h-[70vh] flex items-center overflow-hidden bg-base-100"
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

		<div class="container-custom relative z-10">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Left Column: Content -->
				<div class="space-y-8">
					<!-- Breadcrumb -->
					<nav class="text-sm text-gray-500">
						<a href="/" class="hover:text-primary transition-colors"
							>Home</a
						>
						<span class="mx-2">/</span>
						<a
							href="/service"
							class="hover:text-primary transition-colors"
							>Services</a
						>
						<span class="mx-2">/</span>
						<span class="text-charcoal">{metadata.title}</span>
					</nav>

					<!-- Title -->
					<h1
						class="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[0.9] tracking-tight"
					>
						{metadata.title}
					</h1>

					<!-- Pain Point -->
					<div class="">
						<p class="text-lg text-gray-700 leading-relaxed">
							{metadata.pain}
						</p>
					</div>

					<!-- Solution -->
					<!-- <div class="alert alert-accent p-4 bg-primary/10 border-l-4 border-primary alert-soft">
							<div class="flex items-start gap-4">
								<div class="text-left">
									<h2 class="font-bold text-xl mb-2">Here's How We Help</h2>
									<p class="text-lg leading-relaxed">{metadata.solution}</p>
								</div>
							</div>
						</div> -->

					<!-- CTA -->

					<div class="pt-4">
						<WhatsAppButton variant="secondary" size="xl" />
					</div>

					<!-- Trust Indicators -->
					<div
						class="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600"
					>
						<div class="flex items-center gap-2">
							<Check class="text-primary" size={18} />
							<span>Free 15-Min Consultation</span>
						</div>
						<div class="flex items-center gap-2">
							<Check class="text-primary" size={18} />
							<span>No Commitment Required</span>
						</div>
						<div class="flex items-center gap-2">
							<Check class="text-primary" size={18} />
							<span>Serving {metadata.city}</span>
						</div>
					</div>
				</div>

				<!-- Right Column: Image -->
				<div class="relative hidden lg:block">
					<div
						class="relative rounded-3xl overflow-hidden shadow-2xl"
					>
						<img
							src={metadata.image}
							alt="{metadata.service} in {metadata.city}"
							class="w-full h-[600px] object-cover"
						/>
						<!-- Image Overlay -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"
						></div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<!-- Main Content from MD -->
<article class="section-padding bg-white">
	<div class="container-custom">
		<div
			class="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-charcoal prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-primary prose-ul:text-gray-700 prose-ol:text-gray-700"
		>
			<data.content />
		</div>
	</div>
</article>

{#if isHealthCoaching}
	<HealthCoachingPricing />
{/if}

{#if isSkinTreatment}
	<SkinTreatmentPricing />
{/if}

{#if hasFAQs}
	<ServiceFAQ faqs={metadata.faqs} />
{/if}

{#if relatedServices.length > 0}
	<RelatedServices services={relatedServices} />
{/if}

{#if metadata.service}
	<CTA
		badge="Start Today"
		badgeIcon={Calendar}
		title={ctaTitle}
		description={ctaDescription}
		backgroundColor="primary"
	/>
{/if}

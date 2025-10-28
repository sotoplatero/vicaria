<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import ServiceCTA from '$lib/components/service/ServiceCTA.svelte';
	import RelatedServices from '$lib/components/service/RelatedServices.svelte';
	import { getRelatedServices } from '$lib/utils/services';
	import { page } from '$app/stores';
	import { ArrowRight, Check } from '@lucide/svelte';

	let { data }: { data: PageData } = $props();

	const metadata = $derived(data?.metadata || {});
	const currentSlug = $derived($page.url.pathname.split('/').pop() || '');
	const relatedServices = $derived(getRelatedServices(currentSlug));
</script>

<svelte:head>
	<title>{metadata.title || 'Vicaria Health Services'}</title>
	<meta name="description" content={metadata.description || 'Professional health coaching services in Hamilton'} />
	<meta name="keywords" content="{metadata.service}, {metadata.city}, health coaching, nutrition" />

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
				"name": "Vicaria Health",
				"description": "${metadata.description}",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Unit 2B 144 James St S",
					"addressLocality": "Hamilton",
					"addressRegion": "ON",
					"postalCode": "L8P3A2",
					"addressCountry": "CA"
				},
				"telephone": "+1-365-336-9757",
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

<Header />

<main class="pt-20">
	<!-- Hero Section with Image -->
	{#if metadata.service}
		<section class="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-white via-blush/20 to-sage-light/10">
			<!-- Decorative Elements -->
			<div class="absolute inset-0 overflow-hidden pointer-events-none">
				<div class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"></div>
				<div class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"></div>
				<div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, #2c2c2c 1px, transparent 1px); background-size: 50px 50px;"></div>
			</div>

			<div class="container-custom relative z-10 py-20">
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<!-- Left Column: Content -->
					<div class="space-y-8">
						<!-- Breadcrumb -->
						<nav class="text-sm text-gray-500">
							<a href="/" class="hover:text-primary transition-colors">Home</a>
							<span class="mx-2">/</span>
							<a href="/#services" class="hover:text-primary transition-colors">Services</a>
							<span class="mx-2">/</span>
							<span class="text-charcoal">{metadata.city}</span>
						</nav>

						<!-- Title -->
						<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[0.9] tracking-tight">
							{metadata.title}
						</h1>

						<!-- Pain Point -->
						<div class="">
							<p class="text-lg text-gray-700 leading-relaxed">{metadata.pain}</p>
						</div>

						<!-- Solution -->
						<div class="alert alert-accent p-4 bg-primary/10 border-l-4 border-primary alert-soft">
							<div class="flex items-start gap-4">
								<div class="text-left">
									<h2 class="font-bold text-xl mb-2">Here's How We Help</h2>
									<p class="text-lg leading-relaxed">{metadata.solution}</p>
								</div>
							</div>
						</div>

						<!-- CTA -->
						<div class="pt-4">
							<a
								href="#contact"
								class="btn btn-secondary btn-xl text-lg px-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group border-0"
							>
								Book Your Free Consultation
								<ArrowRight class="transition-transform group-hover:translate-x-2" size={20} />
							</a>
						</div>

						<!-- Trust Indicators -->
						<div class="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
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
						<div class="relative rounded-3xl overflow-hidden shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=900&fit=crop&q=80"
								alt="{metadata.service} in {metadata.city}"
								class="w-full h-[600px] object-cover"
							/>
							<!-- Image Overlay -->
							<div class="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
						</div>
						<!-- Decorative Frame -->
						<div class="absolute -bottom-6 -right-6 w-64 h-64 border-4 border-primary rounded-3xl -z-10"></div>
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Main Content from MD -->
	<article class="section-padding bg-warm-white">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-charcoal prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-primary prose-ul:text-gray-700 prose-ol:text-gray-700">
				<svelte:component this={data.content} />
			</div>
		</div>
	</article>

	{#if relatedServices.length > 0}
		<RelatedServices services={relatedServices} />
	{/if}

	{#if metadata.service}
		<ServiceCTA service={metadata.service} category={metadata.category} />
	{/if}
</main>

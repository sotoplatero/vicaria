<script lang="ts">
	import type { PageData } from './$types';
	import CTA from '$lib/components/CTA.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
	import { Calendar, ChevronDown, ChevronUp } from '@lucide/svelte';

	let { data }: { data: PageData } = $props();

	const metadata = $derived(data?.metadata || {});
	const hasFAQs = $derived(metadata.faq && metadata.faq.length > 0);

	// FAQ accordion state
	let openFAQIndex = $state<number | null>(null);

	function toggleFAQ(index: number) {
		openFAQIndex = openFAQIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>{metadata.title || 'Blog Post'} - Vicaria Health</title>
	<meta name="description" content={metadata.description || 'Health and wellness insights from Vicaria Health'} />

	<!-- Open Graph -->
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="article" />

	<!-- Structured Data for Article -->
	{#if metadata.title}
		{@html `
			<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				"headline": "${metadata.title}",
				"description": "${metadata.description}",
				"author": {
					"@type": "Organization",
					"name": "Vicaria Health"
				},
				"publisher": {
					"@type": "Organization",
					"name": "Vicaria Health",
					"logo": {
						"@type": "ImageObject",
						"url": "https://vicaria.ca/logo.png"
					}
				}
			}
			<\/script>
		`}
	{/if}

	<!-- FAQ Structured Data -->
	{#if hasFAQs}
		{@html `
			<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "FAQPage",
				"mainEntity": [
					${metadata.faq.map((item: any) => `
						{
							"@type": "Question",
							"name": "${item.question}",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "${item.answer}"
							}
						}
					`).join(',')}
				]
			}
			<\/script>
		`}
	{/if}
</svelte:head>

<main class="pt-16">
	<!-- Hero Section -->
	<section class="relative min-h-[40vh] flex items-center overflow-hidden bg-base-100">
		<!-- Decorative Elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"></div>
			<div class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"></div>
			<div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, #2c2c2c 1px, transparent 1px); background-size: 50px 50px;"></div>
		</div>

		<div class="container-custom relative z-10 py-20">
			<div class="max-w-4xl mx-auto">
				<!-- Breadcrumb -->
				<nav class="text-sm text-gray-500 mb-6">
					<a href="/" class="hover:text-primary transition-colors">Home</a>
					<span class="mx-2">/</span>
					<a href="/blog" class="hover:text-primary transition-colors">Blog</a>
					<span class="mx-2">/</span>
					<span class="text-charcoal">Article</span>
				</nav>

				<!-- Title -->
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-6">
					{metadata.title}
				</h1>

				<!-- Description -->
				{#if metadata.description}
					<p class="text-xl text-gray-700 leading-relaxed">
						{metadata.description}
					</p>
				{/if}

				<!-- CTA Button -->
				<div class="mt-8">
					<WhatsAppButton variant="secondary" size="lg"/>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<article class="section-padding bg-white">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-charcoal prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-primary prose-ul:text-gray-700 prose-ol:text-gray-700 prose-img:rounded-lg prose-img:shadow-lg">
				<data.content />
			</div>
		</div>
	</article>

	<!-- FAQ Section -->
	{#if hasFAQs}
		<section class="section-padding bg-base-100">
			<div class="container-custom">
				<div class="max-w-4xl mx-auto">
					<h2 class="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
						Frequently Asked Questions
					</h2>

					<div class="space-y-4">
						{#each metadata.faq as item, index}
							<div class="card bg-white shadow-md">
								<button
									class="card-body p-6 text-left cursor-pointer hover:bg-gray-50 transition-colors"
									onclick={() => toggleFAQ(index)}
								>
									<div class="flex justify-between items-start gap-4">
										<h3 class="text-xl font-bold text-charcoal flex-1">
											{item.question}
										</h3>
										<div class="flex-shrink-0 text-primary">
											{#if openFAQIndex === index}
												<ChevronUp size={24} />
											{:else}
												<ChevronDown size={24} />
											{/if}
										</div>
									</div>

									{#if openFAQIndex === index}
										<div class="mt-4 text-gray-700 leading-relaxed">
											{item.answer}
										</div>
									{/if}
								</button>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- CTA Section -->
	<CTA
		badge="Get Started"
		badgeIcon={Calendar}
		title="Ready to Feel Better?"
		description="Book a free 15-minute consultation and discover how we can help you achieve your health goals."
		backgroundColor="primary"
	/>
</main>

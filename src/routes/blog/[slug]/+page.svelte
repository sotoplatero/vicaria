<script lang="ts">
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
	import CTA from "$lib/components/CTA.svelte";
	import { Heart } from "@lucide/svelte";

	let { data } = $props();
	const { metadata } = data;
	const Content = data.content;

	const siteUrl = "https://vicaria.ca";

	// Article schema for SEO
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: metadata.title,
		description: metadata.description,
		url: `${siteUrl}/blog/${metadata.slug}`,
		author: {
			"@type": "Person",
			name: "Dr. Yamilet Pina",
			jobTitle: "MD, Certified Health Coach (IIN)",
			worksFor: { "@id": `${siteUrl}/#organization` }
		},
		publisher: { "@id": `${siteUrl}/#organization` },
		mainEntityOfPage: `${siteUrl}/blog/${metadata.slug}`,
		datePublished: metadata.publishedAt || "2026-02-20",
		dateModified: metadata.updatedAt || metadata.publishedAt || "2026-02-20"
	};

	// FAQ schema if article has FAQs
	const faqSchema = metadata.faq?.length ? {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: metadata.faq.map((f: { question: string; answer: string }) => ({
			"@type": "Question",
			name: f.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.answer
			}
		}))
	} : null;
</script>

<svelte:head>
	<title>{metadata.title} | Vicaria Health</title>
	<meta name="description" content={metadata.description} />
	<link rel="canonical" href="{siteUrl}/blog/{metadata.slug}" />
	<meta property="og:title" content="{metadata.title} | Vicaria Health" />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="{siteUrl}/blog/{metadata.slug}" />
	<meta property="og:image" content="{siteUrl}/images/vicaria-hero.webp" />
	<meta property="og:site_name" content="Vicaria Health" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
	{@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}<\/script>`}
	{#if faqSchema}
		{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
	{/if}
</svelte:head>

<article class="section-padding bg-warm-white">
	<div class="container-custom max-w-3xl">
		<Breadcrumbs items={[
			{ label: "Home", href: "/" },
			{ label: "Blog", href: "/blog" },
			{ label: metadata.title }
		]} />

		<div class="mt-8 prose prose-lg max-w-none">
			<Content />
		</div>

		{#if metadata.faq?.length}
			<section class="mt-16">
				<h2 class="text-2xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
				<div class="space-y-4">
					{#each metadata.faq as item}
						<details class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group">
							<summary class="font-semibold text-charcoal cursor-pointer list-none flex items-center justify-between">
								{item.question}
								<span class="text-primary ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
							</summary>
							<p class="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
						</details>
					{/each}
				</div>
			</section>
		{/if}
	</div>
</article>

<CTA
	badge="Get Help Now"
	badgeIcon={Heart}
	title="Ready to Fix Your Digestive Issues?"
	description="Book a free 15-minute consultation with our medical doctors. We'll discuss your symptoms and create a personalized plan."
	backgroundColor="primary"
/>

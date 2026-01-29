<script lang="ts">
	import { onMount } from "svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Services from "$lib/components/Services.svelte";
	import HowItWorks from "$lib/components/HowItWorks.svelte";
	import About from "$lib/components/About.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import CTA from "$lib/components/CTA.svelte";
	import { Heart } from "@lucide/svelte";
	import { faqs } from "$lib/data/faqs";

	// Lazy load Testimonials
	let TestimonialsComponent = $state<any>(null);
	let testimonialsContainer = $state<HTMLElement | null>(null);

	interface Props {
		data: {
			googleRating: number;
			totalReviews: number;
		};
	}

	let { data }: Props = $props();

	// Load Testimonials when container is near viewport
	onMount(() => {
		if (!testimonialsContainer) return;

		const observer = new IntersectionObserver(
			async (entries) => {
				if (entries[0].isIntersecting && !TestimonialsComponent) {
					// Load component when visible
					const module = await import(
						"$lib/components/Testimonials.svelte"
					);
					TestimonialsComponent = module.default;
					observer.disconnect();
				}
			},
			{
				rootMargin: "200px", // Start loading 200px before visible
			},
		);

		observer.observe(testimonialsContainer);

		return () => observer.disconnect();
	});

	// Local Business Schema for Google
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Vicaria Health",
		image: "https://vicaria.ca/logo.png",
		"@id": "https://vicaria.ca",
		url: "https://vicaria.ca",
		telephone: "+1-365-336-9757",
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
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
				],
				opens: "09:00",
				closes: "18:00",
			},
		],
		priceRange: "$$",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: data.googleRating,
			reviewCount: data.totalReviews,
		},
		sameAs: ["https://www.instagram.com/vicaria.ca"],
	};
</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href="/images/vicaria-hero.webp"
		fetchpriority="high"
	/>
	<title>Vicaria Health - Expert Nutrition Counseling in Hamilton, ON</title>
	<meta
		name="description"
		content="Professional nutrition counseling for digestive health, diabetes, cancer support, and more. Located in Hamilton, Ontario. Book your free consultation today."
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}<\/script>`}
</svelte:head>

<Hero />
<Services />
<HowItWorks />

<!-- Lazy loaded Testimonials -->
<div bind:this={testimonialsContainer}>
	{#if TestimonialsComponent}
		<TestimonialsComponent />
	{:else}
		<!-- Loading placeholder with similar height to prevent layout shift -->
		<div class="section-padding bg-warm-white" style="min-height: 800px;">
			<div class="container-custom">
				<div class="text-center">
					<div
						class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"
					></div>
					<p class="mt-4 text-gray-600">Loading testimonials...</p>
				</div>
			</div>
		</div>
	{/if}
</div>

<About />
<FAQ {faqs} />
<CTA
	badge="Take the First Step"
	badgeIcon={Heart}
	title="Ready to Feel Like Yourself Again?"
	description="Join hundreds of satisfied clients who've transformed their health with personalized nutrition coaching in Hamilton. Start your journey today with a free 15-minute consultation no commitment required."
	backgroundColor="primary"
/>

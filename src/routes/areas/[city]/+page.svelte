<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
	import { getAllAreas, getAreaBySlug } from '$lib/data/areas';
	import reviewsData from '$lib/data/google-reviews.json';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const area = data.area;

	const siteUrl = 'https://vicaria.ca';

	const breadcrumbItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Areas We Serve' },
		{ label: area.name },
	];

	// All other areas for cross-linking (exclude current)
	const otherAreas = getAllAreas().filter((a) => a.slug !== area.slug);

	// Pick 2 reviews to display (rotate based on slug hash for variety)
	const slugHash = area.slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
	const reviews = reviewsData.testimonials;
	const displayReviews = [
		reviews[slugHash % reviews.length],
		reviews[(slugHash + 2) % reviews.length],
	];

	// LocalBusiness schema
	const localBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'MedicalBusiness',
		'@id': `${siteUrl}/#organization`,
		name: 'Vicaria Health',
		url: siteUrl,
		telephone: '+1-365-336-9757',
		email: 'hello@vicaria.ca',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Unit 2B 144 James St S',
			addressLocality: 'Hamilton',
			addressRegion: 'ON',
			postalCode: 'L8P 3A2',
			addressCountry: 'CA',
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 43.2557,
			longitude: -79.8711,
		},
		areaServed: {
			'@type': 'City',
			name: area.name,
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00',
			},
		],
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: reviewsData.googleRating,
			reviewCount: reviewsData.totalReviews,
			bestRating: 5,
		},
		priceRange: '$$',
		image: `${siteUrl}/logo.png`,
	};

	// FAQPage schema
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: area.faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
</script>

<svelte:head>
	<title>{area.metaTitle}</title>
	<meta name="description" content={area.metaDescription} />
	<link rel="canonical" href={`${siteUrl}/areas/${area.slug}`} />

	<!-- Open Graph -->
	<meta property="og:title" content={area.metaTitle} />
	<meta property="og:description" content={area.metaDescription} />
	<meta property="og:url" content={`${siteUrl}/areas/${area.slug}`} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${siteUrl}${area.heroImage}`} />
	<meta property="og:site_name" content="Vicaria Health" />
	<meta property="og:locale" content="en_CA" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={area.metaTitle} />
	<meta name="twitter:description" content={area.metaDescription} />
	<meta name="twitter:image" content={`${siteUrl}${area.heroImage}`} />

	{@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>`}
</svelte:head>

<div class="min-h-screen">
	<!-- Breadcrumbs -->
	<div class="container-custom pt-6 pb-2">
		<Breadcrumbs items={breadcrumbItems} />
	</div>

	<!-- Hero Section with Image -->
	<section class="section-padding bg-gradient-to-br from-primary/5 via-white to-secondary/5">
		<div class="container-custom">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						{area.distance} from Hamilton &middot; {area.driveMinutes} min drive
					</div>
					<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
						{area.heroTitle}
					</h1>
					<p class="text-lg text-gray-600 leading-relaxed">
						{area.description}
					</p>
					<div class="flex flex-col sm:flex-row gap-4 pt-2">
						<WhatsAppButton
							text="Free Consultation"
							callText="Call for Free Consultation"
							message={`Hi! I'm from ${area.name} and I'd like to book a free consultation.`}
							size="lg"
							variant="primary"
						/>
					</div>
					<!-- Rating badge -->
					<div class="flex items-center gap-2 text-sm text-gray-500">
						<div class="flex">
							{#each Array(5) as _}
								<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							{/each}
						</div>
						<span>{reviewsData.googleRating}/5 from {reviewsData.totalReviews} Google Reviews</span>
					</div>
				</div>
				<div class="relative">
					<img
						src={area.heroImage}
						alt={area.heroImageAlt}
						class="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
						loading="eager"
					/>
					<div class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 hidden md:block">
						<p class="text-sm font-semibold text-charcoal">Physician-Led Care</p>
						<p class="text-xs text-gray-500">By medical doctors, not coaches</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Local Context Section -->
	<section class="section-padding bg-white">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-2xl md:text-3xl font-bold text-charcoal mb-6">
					Why {area.name} Residents Choose Vicaria Health
				</h2>
				<p class="text-gray-600 leading-relaxed text-lg mb-6">
					{area.localContext}
				</p>

				<!-- Trust Points -->
				<div class="grid sm:grid-cols-3 gap-6 mt-10">
					<div class="flex items-start gap-3">
						<div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<div>
							<p class="font-semibold text-charcoal">Physician-Led</p>
							<p class="text-sm text-gray-500">Coaching by medical doctors</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
							</svg>
						</div>
						<div>
							<p class="font-semibold text-charcoal">Virtual Available</p>
							<p class="text-sm text-gray-500">Video consultations from home</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<p class="font-semibold text-charcoal">Free Consultation</p>
							<p class="text-sm text-gray-500">15-minute intro, no obligation</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Nutrition Coaching & Services in {City} -->
	<section class="section-padding bg-base-200/50">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-2xl md:text-3xl font-bold text-charcoal mb-2">
					Nutrition Coaching in {area.name}
				</h2>
				<p class="text-gray-600 leading-relaxed text-lg mb-8">
					{area.serviceContext}
				</p>

				<h3 class="text-xl font-bold text-charcoal mb-4">
					Popular Services for {area.name} Clients
				</h3>
				<div class="grid sm:grid-cols-2 gap-4">
					{#each area.popularServices as service}
						<a
							href="/service/{service.slug}"
							class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary/30"
						>
							<h4 class="font-semibold text-charcoal group-hover:text-primary transition-colors mb-2">
								{service.label}
							</h4>
							<p class="text-sm text-gray-500 leading-relaxed mb-3">
								{service.snippet}
							</p>
							<span class="text-sm text-primary font-medium">Learn more →</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Google Reviews / Social Proof -->
	<section class="section-padding bg-white">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto">
				<div class="flex items-center gap-3 mb-8">
					<h2 class="text-2xl md:text-3xl font-bold text-charcoal">
						What Our Clients Say
					</h2>
					<div class="flex items-center gap-1 bg-base-200/50 px-3 py-1.5 rounded-full">
						<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<span class="text-sm font-semibold text-charcoal">{reviewsData.googleRating}/5</span>
						<span class="text-xs text-gray-500">({reviewsData.totalReviews} reviews)</span>
					</div>
				</div>
				<div class="grid md:grid-cols-2 gap-6">
					{#each displayReviews as review}
						<div class="bg-base-200/30 rounded-2xl p-6 border border-gray-100">
							<div class="flex items-center gap-3 mb-4">
								<img
									src={review.avatar}
									alt={review.name}
									class="w-10 h-10 rounded-full"
									loading="lazy"
								/>
								<div>
									<p class="font-semibold text-charcoal text-sm">{review.name}</p>
									<div class="flex gap-0.5">
										{#each Array(review.rating) as _}
											<svg class="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										{/each}
									</div>
								</div>
								<!-- Google icon -->
								<svg class="w-5 h-5 ml-auto text-gray-400" viewBox="0 0 24 24" fill="currentColor">
									<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
									<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
									<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
									<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
								</svg>
							</div>
							<p class="text-gray-600 text-sm leading-relaxed line-clamp-4">
								"{review.quote}"
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Getting Here -->
	<section class="section-padding bg-base-200/50">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-2xl md:text-3xl font-bold text-charcoal mb-6">
					Getting to Vicaria Health from {area.name}
				</h2>
				<div class="bg-white rounded-2xl p-6 md:p-8 space-y-4 shadow-sm border border-gray-100">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</div>
						<div>
							<p class="font-semibold text-charcoal">Vicaria Health</p>
							<p class="text-gray-600">Unit 2B, 144 James St S, Hamilton, ON L8P 3A2</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<p class="font-semibold text-charcoal">Drive Time</p>
							<p class="text-gray-600">Approximately {area.driveMinutes} minutes from {area.name} ({area.distance})</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
							<svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div>
							<p class="font-semibold text-charcoal">Book by Phone</p>
							<p class="text-gray-600">
								<a href="tel:+13653369757" class="text-primary hover:underline">+1 (365) 336-9757</a>
								&middot; Mon–Fri 9 AM – 6 PM
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQs -->
	<section class="section-padding bg-white">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-2xl md:text-3xl font-bold text-charcoal mb-8">
					Frequently Asked Questions — {area.name}
				</h2>
				<div class="space-y-4">
					{#each area.faqs as faq}
						<details class="group bg-base-200/30 rounded-2xl border border-gray-100">
							<summary class="flex items-center justify-between cursor-pointer p-6 font-semibold text-charcoal hover:text-primary transition-colors">
								{faq.question}
								<svg class="w-5 h-5 flex-shrink-0 ml-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
								</svg>
							</summary>
							<div class="px-6 pb-6 text-gray-600 leading-relaxed">
								{faq.answer}
							</div>
						</details>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- All Areas Cross-Links -->
	<section class="section-padding bg-base-200/50">
		<div class="container-custom">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-2xl md:text-3xl font-bold text-charcoal mb-2">
					Also Serving Nearby Communities
				</h2>
				<p class="text-gray-500 mb-6">
					Vicaria Health proudly serves Hamilton and surrounding areas with physician-led nutrition coaching and skin treatments.
				</p>
				<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{#each otherAreas as other}
						<a
							href="/areas/{other.slug}"
							class="group bg-white rounded-2xl p-5 hover:shadow-md transition-all border border-gray-100 hover:border-primary/30"
						>
							<h3 class="font-semibold text-charcoal group-hover:text-primary transition-colors">
								{other.name}
							</h3>
							<p class="text-sm text-gray-500 mt-1">
								{other.distance} &middot; {other.driveMinutes} min drive
							</p>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<CTA
		badge="Serving {area.name}"
		title="Ready to Take Control of Your Health?"
		description="Book a free 15-minute consultation and discover how evidence-based nutrition coaching can help you feel better."
		primaryButtonText="Free Consultation"
		whatsappMessage={`Hi! I'm from ${area.name} and I'd like to book a free consultation.`}
		trustIndicators={['No Referral Needed', 'Virtual or In-Person', 'Physician-Led Care']}
	/>
</div>

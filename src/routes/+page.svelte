<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import About from '$lib/components/About.svelte';

	interface Props {
		data: {
			testimonials: Array<any>;
			googleRating: number;
			totalReviews: number;
		};
	}

	let { data }: Props = $props();

	// Local Business Schema for Google
	const localBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'HealthConsultant',
		name: 'Vicaria Health',
		image: 'https://vicaria.ca/logo.png',
		'@id': 'https://vicaria.ca',
		url: 'https://vicaria.ca',
		telephone: '+1-365-336-9757',
		email: '[email protected]',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Unit 2B 144 James St S',
			addressLocality: 'Hamilton',
			addressRegion: 'ON',
			postalCode: 'L8P 3A2',
			addressCountry: 'CA'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 43.2557,
			longitude: -79.8711
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00'
			}
		],
		priceRange: '$$',
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: data.googleRating,
			reviewCount: data.totalReviews
		},
		sameAs: [
			'https://www.instagram.com/vicaria.ca'
		]
	};
</script>

<svelte:head>
	<title>Vicaria Health - Expert Nutrition Counseling in Hamilton, ON</title>
	<meta name="description" content="Professional nutrition counseling for digestive health, diabetes, cancer support, and more. Located in Hamilton, Ontario. Book your free consultation today." />
	{@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}<\/script>`}
</svelte:head>

<Hero />
<Services />
<HowItWorks />
<Testimonials testimonials={data.testimonials} googleRating={data.googleRating} totalReviews={data.totalReviews} />
<About />


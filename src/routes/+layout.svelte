<script lang="ts">
	import "@fontsource/inter/400.css";
	import "@fontsource/inter/500.css";
	import "@fontsource/inter/600.css";
	import "@fontsource/inter/700.css";
	import "@fontsource/inter/800.css";
	import "../app.css";
	import OfferBanner from "$lib/components/OfferBanner.svelte";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { page } from "$app/stores";

	let { children } = $props();

	const siteUrl = "https://vicaria.ca";
	const path = $derived($page.url.pathname);

	// WebSite schema - helps Google understand site structure and enables sitelinks
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${siteUrl}/#website`,
		name: "Vicaria Health",
		url: siteUrl,
		description: "Personalized nutrition coaching and skin treatments by medical doctors in Hamilton, Ontario.",
		inLanguage: ["en", "es"],
		publisher: { "@id": `${siteUrl}/#organization` },
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${siteUrl}/service?q={search_term_string}`
			},
			"query-input": "required name=search_term_string"
		}
	};

	// Organization schema - builds E-E-A-T and brand recognition
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "MedicalOrganization",
		"@id": `${siteUrl}/#organization`,
		name: "Vicaria Health",
		alternateName: "Vicaria",
		url: siteUrl,
		logo: {
			"@type": "ImageObject",
			url: `${siteUrl}/logo.png`,
			width: 512,
			height: 512
		},
		image: `${siteUrl}/images/vicaria-hero.webp`,
		description: "Evidence-based nutrition coaching and wellness services in downtown Hamilton. Personalized care for digestive health, chronic conditions, and skin treatments.",
		telephone: "+1-365-336-9757",
		email: "hello@vicaria.ca",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Unit 2B 144 James St S",
			addressLocality: "Hamilton",
			addressRegion: "ON",
			postalCode: "L8P 3A2",
			addressCountry: "CA"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 43.2557,
			longitude: -79.8711
		},
		areaServed: [
			{ "@type": "City", name: "Hamilton", "@id": "https://www.wikidata.org/wiki/Q2980" },
			{ "@type": "City", name: "Burlington" },
			{ "@type": "City", name: "Dundas" },
			{ "@type": "City", name: "Ancaster" },
			{ "@type": "City", name: "Stoney Creek" },
			{ "@type": "City", name: "Waterdown" },
			{ "@type": "City", name: "Binbrook" },
			{ "@type": "City", name: "Grimsby" }
		],
		sameAs: [
			"https://www.instagram.com/vicaria.ca",
			"https://www.facebook.com/profile.php?id=100090454398013"
		],
		foundingDate: "2023",
		numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
		medicalSpecialty: [
			"Nutrition",
			"Dietetics",
			"Dermatology"
		]
	};
</script>

<svelte:head>
	<title>Vicaria Health - Personalized Nutrition Coaching in Hamilton</title>
	<meta
		name="description"
		content="Specialized nutrition coaching for digestive disorders, diabetes, hypertension, and cancer support in Hamilton, Ontario. Book your free consultation today."
	/>
	<meta name="geo.region" content="CA-ON" />
	<meta name="geo.placename" content="Hamilton" />
	<meta name="geo.position" content="43.2557;-79.8711" />
	<meta name="ICBM" content="43.2557, -79.8711" />
	<link rel="alternate" hreflang="en" href="{siteUrl}{path}" />
	<link rel="alternate" hreflang="es" href="{siteUrl}/es{path}" />
	<link rel="alternate" hreflang="x-default" href="{siteUrl}{path}" />
	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}<\/script>`}
</svelte:head>

<div data-theme="vicaria">
	<a href="#main-content" class="skip-to-content">Skip to main content</a>
	<OfferBanner />
	<Header />
	<main id="main-content">
		{@render children?.()}
	</main>
	<Footer />
</div>

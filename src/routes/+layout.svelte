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
</script>

<svelte:head>
	<title>Vicaria Health - Personalized Nutrition Coaching in Hamilton</title>
	<meta
		name="description"
		content="Specialized nutrition coaching for digestive disorders, diabetes, hypertension, and cancer support in Hamilton, Ontario. Book your free consultation today."
	/>
	<link rel="alternate" hreflang="en" href="{siteUrl}{path}" />
	<link rel="alternate" hreflang="es" href="{siteUrl}/es{path}" />
	<link rel="alternate" hreflang="x-default" href="{siteUrl}{path}" />
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

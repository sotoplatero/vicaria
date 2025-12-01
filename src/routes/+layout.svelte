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

	let { children } = $props();
</script>

<svelte:head>
	<title>Vicaria Health - Personalized Nutrition Coaching in Hamilton</title>
	<meta
		name="description"
		content="Specialized nutrition coaching for digestive disorders, diabetes, hypertension, and cancer support in Hamilton, Ontario. Book your free consultation today."
	/>
</svelte:head>

<div data-theme="vicaria">
	<OfferBanner />
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>

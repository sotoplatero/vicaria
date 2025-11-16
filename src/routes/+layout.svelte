<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	export const prerender = true;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
	<title>Vicaria Health - Personalized Nutrition Coaching in Hamilton</title>
	<meta name="description" content="Specialized nutrition coaching for digestive disorders, diabetes, hypertension, and cancer support in Hamilton, Ontario. Book your free consultation today." />
</svelte:head>

<div data-theme="vicaria">
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>

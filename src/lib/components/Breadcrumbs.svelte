<script lang="ts">
	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface Props {
		items: BreadcrumbItem[];
	}

	let { items }: Props = $props();

	const siteUrl = "https://vicaria.ca";

	// Generate schema for search engines
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.label,
			...(item.href ? { item: `${siteUrl}${item.href}` } : {})
		}))
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}<\/script>`}
</svelte:head>

<nav class="text-sm text-gray-500" aria-label="Breadcrumb">
	{#each items as item, i}
		{#if i > 0}
			<span class="mx-2">/</span>
		{/if}
		{#if item.href}
			<a href={item.href} class="hover:text-primary transition-colors">{item.label}</a>
		{:else}
			<span class="text-charcoal">{item.label}</span>
		{/if}
	{/each}
</nav>

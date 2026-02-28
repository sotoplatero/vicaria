<script lang="ts">
	import { getAllPosts } from "$lib/utils/blog";
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
	import WhatsAppButton from "$lib/components/WhatsAppButton.svelte";
	import { BookOpen } from "@lucide/svelte";

	const posts = getAllPosts();
</script>

<svelte:head>
	<title>Health & Nutrition Blog | Vicaria Health Hamilton</title>
	<meta
		name="description"
		content="Evidence-based health and nutrition articles from medical doctors in Hamilton. Tips for digestive health, diabetes management, and wellness."
	/>
	<link rel="canonical" href="https://vicaria.ca/blog" />
	<meta property="og:title" content="Health & Nutrition Blog | Vicaria Health Hamilton" />
	<meta property="og:description" content="Evidence-based health and nutrition articles from medical doctors in Hamilton." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://vicaria.ca/blog" />
	<meta property="og:image" content="https://vicaria.ca/images/vicaria-hero.webp" />
</svelte:head>

<section class="section-padding bg-warm-white">
	<div class="container-custom">
		<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

		<div class="max-w-4xl mx-auto mt-8">
			<div class="text-center mb-12">
				<div class="inline-flex items-center justify-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm mb-6">
					<BookOpen class="text-primary" size={18} />
					<span class="text-sm font-medium text-primary">Health Blog</span>
				</div>
				<h1 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
					Health & Nutrition <span class="text-primary">Insights</span>
				</h1>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Evidence-based articles from our medical doctors to help you understand your body and make informed health decisions.
				</p>
			</div>

			{#if posts.length === 0}
				<p class="text-center text-gray-500">Coming soon.</p>
			{:else}
				<div class="space-y-8">
					{#each posts as post}
						<article class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
							<a href="/blog/{post.slug}" class="block group">
								<h2 class="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors mb-3">
									{post.title}
								</h2>
								<p class="text-gray-600 leading-relaxed mb-4">{post.description}</p>
								<span class="text-primary font-medium text-sm">Read article &rarr;</span>
							</a>
						</article>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.glass {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>

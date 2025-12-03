<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowRight } from '@lucide/svelte';

	let { data }: { data: PageData } = $props();

	const posts = $derived(data.posts);
</script>

<svelte:head>
	<title>Blog - Vicaria Health</title>
	<meta name="description" content="Health and wellness insights from Vicaria Health in Hamilton, Ontario. Expert advice on digestive health, nutrition, and natural wellness." />
	<meta name="keywords" content="health blog, digestive health, Hamilton wellness, nutrition tips" />

	<!-- Open Graph -->
	<meta property="og:title" content="Blog - Vicaria Health" />
	<meta property="og:description" content="Health and wellness insights from Vicaria Health in Hamilton, Ontario." />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="pt-16">
	<!-- Hero Section -->
	<section class="relative min-h-[50vh] flex items-center overflow-hidden bg-base-100">
		<!-- Decorative Elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"></div>
			<div class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"></div>
			<div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, #2c2c2c 1px, transparent 1px); background-size: 50px 50px;"></div>
		</div>

		<div class="container-custom relative z-10 py-20">
			<div class="max-w-4xl mx-auto text-center space-y-6">
				<!-- Breadcrumb -->
				<nav class="text-sm text-gray-500">
					<a href="/" class="hover:text-primary transition-colors">Home</a>
					<span class="mx-2">/</span>
					<span class="text-charcoal">Blog</span>
				</nav>

				<!-- Title -->
				<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[0.9] tracking-tight">
					Health Insights
				</h1>

				<!-- Description -->
				<p class="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
					Expert advice on digestive health, nutrition, and natural wellness from our team in Hamilton.
				</p>
			</div>
		</div>
	</section>

	<!-- Blog Posts Grid -->
	<section class="section-padding bg-white">
		<div class="container-custom">
			{#if posts.length > 0}
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each posts as post}
						<article class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
							<div class="card-body p-6">
								<!-- Title -->
								<h2 class="card-title text-2xl font-bold text-charcoal leading-tight mb-3 group-hover:text-primary transition-colors">
									{post.title}
								</h2>

								<!-- Description -->
								{#if post.description}
									<p class="text-gray-700 leading-relaxed mb-4 line-clamp-3">
										{post.description}
									</p>
								{/if}

								<!-- Read More Link -->
								<div class="card-actions justify-end mt-auto pt-4">
									<a
										href="/blog/{post.slug}"
										class="btn btn-primary btn-sm gap-2 group-hover:gap-3 transition-all"
									>
										Read More
										<ArrowRight size={16} />
									</a>
								</div>
							</div>
						</article>
					{/each}
				</div>
			{:else}
				<div class="text-center py-20">
					<p class="text-gray-500 text-lg">No blog posts available yet. Check back soon!</p>
				</div>
			{/if}
		</div>
	</section>
</main>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>

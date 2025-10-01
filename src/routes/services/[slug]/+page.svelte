<script lang="ts">
	import { Calendar } from 'lucide-svelte';
	import Pricing from '$lib/components/Pricing.svelte';

	let { data } = $props();
	const { service } = data;

	// Simple markdown to HTML converter (basic support)
	function renderMarkdown(md: string): string {
		return md
			.replace(/^### (.*$)/gim, '<h3 class="text-3xl font-semibold mb-4 mt-8">$1</h3>')
			.replace(/^## (.*$)/gim, '<h2 class="text-4xl font-light mb-6 mt-12">$1</h2>')
			.replace(/^# (.*$)/gim, '<h1 class="text-5xl font-light mb-8">$1</h1>')
			.replace(/^\*\*(.*)\*\*/gim, '<strong>$1</strong>')
			.replace(/^- (.*$)/gim, '<li class="ml-6">$1</li>')
			.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 list-decimal">$1</li>')
			.replace(/\n\n/g, '</p><p class="mb-4">')
			.replace(/^\*\*([^*]+)\*\*:/gim, '<strong class="text-primary">$1:</strong>');
	}

	const htmlContent = renderMarkdown(service.content);
</script>

<svelte:head>
	<title>{service.title} - Vicaria Health</title>
	<meta name="description" content={service.description} />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10">
	<div class="container mx-auto px-4 py-20">
		<div class="max-w-4xl mx-auto text-center">
			<a href="/" class="text-primary hover:underline mb-4 inline-block">← Back to Home</a>
			<h1 class="text-5xl md:text-6xl font-light leading-tight mb-6 mt-4">
				{service.title}
			</h1>
			<p class="text-xl md:text-2xl text-base-content/80 mb-8 leading-relaxed">
				{service.description}
			</p>
			<a href="tel:+13653369757" class="btn btn-primary btn-lg hover:scale-105 transition-transform">
				<Calendar class="w-5 h-5" />
				Book Your Consultation
			</a>
		</div>
	</div>
</section>

<!-- Content Section -->
<article class="py-20 bg-base-100">
	<div class="container mx-auto px-4">
		<div class="prose prose-lg max-w-4xl mx-auto">
			{@html htmlContent}
		</div>
	</div>
</article>

<!-- Pricing Section -->
<Pricing pricing={service.pricing} />

<!-- CTA Section -->
<section class="py-20 bg-primary text-primary-content">
	<div class="container mx-auto px-4 text-center max-w-3xl">
		<h2 class="text-4xl font-light mb-6">Ready to Get Started?</h2>
		<p class="text-xl mb-8 text-primary-content/90">
			Take the first step towards better health. Book your consultation today.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="tel:+13653369757" class="btn btn-secondary btn-lg hover:scale-105 transition-transform">
				<Calendar class="w-5 h-5" />
				Book Appointment
			</a>
			<a href="/#contact" class="btn btn-outline btn-secondary btn-lg hover:scale-105 transition-transform">
				Contact Us
			</a>
		</div>
	</div>
</section>


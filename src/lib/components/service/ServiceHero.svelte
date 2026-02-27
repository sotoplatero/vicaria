<script lang="ts">
	import { ArrowRight, Check } from "@lucide/svelte";
	import WhatsAppButton from "../WhatsAppButton.svelte";

	interface Props {
		service: string;
		pain: string;
		solution: string;
		city: string;
	}

	let { service, pain, solution, city }: Props = $props();
</script>

<section
	class="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-white via-blush/20 to-sage-light/10"
>
	<!-- Decorative Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"
		></div>
		<div
			class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"
		></div>
		<div
			class="absolute inset-0 opacity-[0.03]"
			style="background-image: radial-gradient(circle, #2c2c2c 1px, transparent 1px); background-size: 50px 50px;"
		></div>
	</div>

	<div class="container-custom relative z-10 py-20">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<!-- Breadcrumb -->
			<nav class="text-sm text-gray-500">
				<a href="/" class="hover:text-primary transition-colors">Home</a
				>
				<span class="mx-2">/</span>
				<a href="/service" class="hover:text-primary transition-colors"
					>Services</a
				>
				<span class="mx-2">/</span>
				<span class="text-charcoal">{city}</span>
			</nav>

			<!-- Title -->
			<h1
				class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight"
			>
				{service}
			</h1>

			<!-- Pain Point -->
			<div
				class="glass rounded-3xl p-8 md:p-10 max-w-3xl mx-auto border border-gray-200"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center"
					>
						<span class="text-2xl">⚠️</span>
					</div>
					<div class="text-left">
						<h2 class="font-bold text-xl text-charcoal mb-2">
							Sound Familiar?
						</h2>
						<p class="text-lg text-gray-700 leading-relaxed">
							{pain}
						</p>
					</div>
				</div>
			</div>

			<!-- Solution -->
			<div
				class="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-10 max-w-3xl mx-auto shadow-xl text-white"
			>
				<div class="flex items-start gap-4">
					<div
						class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
					>
						<Check class="text-white" size={28} />
					</div>
					<div class="text-left">
						<h2 class="font-bold text-xl mb-2">
							Here's How We Help
						</h2>
						<p class="text-lg text-white/90 leading-relaxed">
							{solution}
						</p>
					</div>
				</div>
			</div>

			<!-- CTA -->
			<div class="pt-4">
				<WhatsAppButton />
			</div>

			<!-- Trust Indicators -->
			<div
				class="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-gray-600"
			>
				<div class="flex items-center gap-2">
					<Check class="text-primary" size={18} />
					<span>Free 15-Min Consultation</span>
				</div>
				<div class="flex items-center gap-2">
					<Check class="text-primary" size={18} />
					<span>No Commitment Required</span>
				</div>
				<div class="flex items-center gap-2">
					<Check class="text-primary" size={18} />
					<span>Serving {city}</span>
				</div>
			</div>
		</div>
	</div>
</section>

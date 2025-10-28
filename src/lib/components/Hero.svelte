<script lang="ts">
	import { ArrowRight, Sparkles, Heart, Shield } from '@lucide/svelte';
</script>

<section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-warm-white via-blush/20 to-sage-light/10">
	<!-- Decorative Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<!-- Soft gradient orbs -->
		<div class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"></div>

		<!-- Grid pattern -->
		<div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle, #2c2c2c 1px, transparent 1px); background-size: 50px 50px;"></div>
	</div>

	<div class="container-custom relative z-10 py-20 lg:py-32">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<!-- Content Column -->
			<div class="space-y-8 animate-fade-up">
				<!-- Badge -->
				<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm animate-fade-in delay-100">
					<Sparkles class="text-primary" size={18} />
					<span class="text-sm font-medium text-primary">Hamilton's Most Trusted Health Coach</span>
				</div>

				<!-- Headline -->
				<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[0.9] tracking-tighter">
					Finally, a Way to Feel Better,
					<span class="text-primary block mt-2">Without Waiting Months</span>
				</h1>

				<!-- Subheadline -->
				<p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
					Personalized nutrition coaching for digestive health, diabetes, hypertension, and cancer support—tailored to your unique needs.
				</p>

				<!-- CTA -->
				<div class="flex flex-col sm:flex-row gap-4 pt-4">
					<a
						href="#contact"
						class="btn btn-primary btn-xl text-lg px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group border-0"
					>
						Book Free Consultation
						<ArrowRight class="transition-transform group-hover:translate-x-2" size={24} />
					</a>

				</div>				

				<!-- Trust Indicators -->
				<div class="flex flex-wrap gap-8 py-4">
					<div class="flex items-center gap-3 group">
						<div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
							<Shield class="text-primary" size={24} />
						</div>
						<div>
							<div class="font-bold text-charcoal">Certified</div>
							<div class="text-sm text-gray-500">RHN, CNP</div>
						</div>
					</div>

					<div class="flex items-center gap-3 group">
						<div class="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
							<Heart class="text-secondary" size={24} />
						</div>
						<div>
							<div class="font-bold text-charcoal">500+ Clients</div>
							<div class="text-sm text-gray-500">Transformed Lives</div>
						</div>
					</div>
				</div>




			</div>

			<!-- Image Column -->
			<div class="hidden lg:block h-full overflow-visible">
				<img
					src="/maurin-and-yamilet.png"
					alt="Maurin Yamile - Registered Holistic Nutritionist"
					class="h-full object-cover"
				/>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
		<span class="text-xs text-gray-400 uppercase tracking-wider font-medium">Scroll to explore</span>
		<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

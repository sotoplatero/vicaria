<script lang="ts">
	import { Activity, Heart, Users, Droplets, Sparkles, ArrowRight } from '@lucide/svelte';
	import { getHealthCoachingServices, getSkinTreatmentServices } from '$lib/utils/services';

	const healthCoachingServices = getHealthCoachingServices();
	const skinTreatmentServices = getSkinTreatmentServices();

	const iconMap: Record<string, any> = {
		activity: Activity,
		heart: Heart,
		users: Users,
		droplets: Droplets,
		sparkles: Sparkles
	};
</script>

<section id="services" class="section-padding bg-warm-white relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 right-0 w-96 h-96 bg-sage-light/10 rounded-full blur-3xl -z-10"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl -z-10"></div>

	<div class="container-custom">

		<!-- Health Coaching Services -->
		<div class="mb-24">
			<header class="text-center">

				<div class="inline-flex items-center justify-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm ">
					<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
					<span class="text-sm font-medium text-primary">Our Specializations</span>
				</div>			
				<div class="text-center mb-12">
					<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight">Health Coaching That Helps You <span class="text-primary block">Feel Like Yourself Again</span></h2>
					<p class="text-xl text-gray-600 leading-relaxed font-light">Personalized nutrition and wellness coaching</p>
				</div>
			</header>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
				{#each healthCoachingServices as service, index}
					{@const IconComponent = iconMap[service.cardIcon] || Activity}
					<a
						href="/service/{service.slug}"
						class="group relative bg-white rounded-3xl p-8 hover-lift border border-gray-100 transition-all duration-300"
						style="animation-delay: {index * 100}ms"
					>
						<!-- Icon -->
						<div class="mb-6 relative">
							<div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
								<svelte:component this={IconComponent} class="text-{service.cardColor}" size={32} />
							</div>
							<!-- Glow effect on hover -->
							<div class="absolute inset-0 bg-{service.cardColor}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>

						<!-- Content -->
						<div class="space-y-4">
							<h3 class="text-2xl font-bold text-charcoal group-hover:text-{service.cardColor} transition-colors">
								{service.service}
							</h3>

							<p class="text-gray-600 leading-relaxed">
								{service.pain}
							</p>

							<!-- Solution -->
							<div class="pt-2 pb-4">
								<blockquote class=" text-sm text-gray-700 leading-relaxed ">
									{service.solution}
								</blockquote>
							</div>

							<!-- CTA -->
							<div class="pt-4">
								<div class="inline-flex items-center gap-2 text-{service.cardColor} font-semibold group-hover:gap-3 transition-all">
									Learn More
									<ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Skin Treatment Services -->
		<div class="mb-20">
			<header class="text-center">

				<div class="inline-flex items-center justify-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm ">
					<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
					<span class="text-sm font-medium text-primary">Our Specializations</span>
				</div>			
				<div class="text-center mb-12">
					<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight"><span class="text-primary block">Feel Comfortable</span>in Your Skin Again </h2>
					<p class="text-xl text-gray-600 leading-relaxed font-light">Professional, safe, and effective skin treatments</p>
				</div>
			</header>

			<div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{#each skinTreatmentServices as service, index}
					{@const IconComponent = iconMap[service.cardIcon] || Sparkles}
					<a
						href="/service/{service.slug}"
						class="group relative bg-white rounded-3xl p-8 hover-lift border border-gray-100 transition-all duration-300"
						style="animation-delay: {index * 100}ms"
					>
						<!-- Icon -->
						<div class="mb-6 relative">
							<div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
								<svelte:component this={IconComponent} class="text-{service.cardColor}" size={32} />
							</div>
							<!-- Glow effect on hover -->
							<div class="absolute inset-0 bg-{service.cardColor}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>

						<!-- Content -->
						<div class="space-y-4">
							<h3 class="text-xl font-bold text-charcoal group-hover:text-{service.cardColor} transition-colors">
								{service.service}
							</h3>

							<p class="text-gray-600 leading-relaxed">
								{service.pain}
							</p>

							<!-- Benefits -->
							{#if service.benefits && service.benefits.length > 0}
								<ul class="space-y-2 text-gray-600">
									{#each service.benefits as benefit}
										<li class="flex items-start gap-2">
											<svg class="w-4 h-4 text-{service.cardColor} flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
											</svg>
											<span>{benefit}</span>
										</li>
									{/each}
								</ul>
							{/if}

							<!-- CTA -->
							<div class="pt-2">
								<div class="inline-flex items-center gap-2 text-{service.cardColor} font-semibold text-sm group-hover:gap-3 transition-all">
									Learn More
									<ArrowRight size={16} class="group-hover:translate-x-1 transition-transform" />
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Bottom CTA Card -->
		<div class=" mx-auto">
			<div class="relative bg-primary rounded-3xl overflow-hidden shadow-2xl">
				<!-- Decorative elements -->
				<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

				<div class="relative z-10 p-12 md:p-16 text-center">
					<div class="space-y-6">
						<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
							<Sparkles class="text-white" size={18} />
							<span class="text-sm font-medium text-white">Free Consultation Available</span>
						</div>

						<h3 class="text-3xl md:text-4xl font-bold text-white leading-tight">
							Not Sure Which Service Is Right for You?
						</h3>

						<p class="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
							Book a free 15-minute consultation and we'll help determine the best path forward for your health goals. No commitment required.
						</p>

						<div class="pt-4">
							<a
								href="#contact"
								class="btn btn-secondary btn-lg text-lg px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-0"
							>
								Book Free Consultation
								<ArrowRight size={20} />
							</a>
							<!-- Trust indicators -->
							<div class="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
								<div class="flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<span>No credit card required</span>
								</div>
								<div class="hidden sm:block h-4 w-px bg-white/30"></div>
								<div class="flex items-center gap-2">
									<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<span>15 minutes of your time</span>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>

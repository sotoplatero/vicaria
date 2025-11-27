<script lang="ts">
	import { Quote, Star } from '@lucide/svelte';
	import type { Testimonial } from '$lib/types/testimonial';
	import reviews from '$lib/data/google-reviews.json';

	const testimonials = reviews.testimonials as Testimonial[];
	const googleRating = reviews.googleRating;
	const totalReviews = reviews.totalReviews;
</script>

<section id="testimonials" class="section-padding bg-warm-white relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-24 space-y-6">
			<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm">
				<Quote class="text-accent" size={16} />
				<span class="text-sm font-medium text-accent">Client Stories</span>
			</div>

			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight">
				Real Transformations,
				<span class="text-accent block">Real Results</span>
			</h2>

			<p class="text-xl text-gray-600 leading-relaxed font-light">
				Don't just take our word for it. Here's what our clients have to say about their health transformation journey.
			</p>
		</div>

		<!-- Featured Testimonial -->
		{#if testimonials.length > 0}
			<div class="max-w-5xl mx-auto mb-12">
				<a
					href={testimonials[0].googleUrl || '#'}
					target="_blank"
					rel="noopener noreferrer"
					class="block relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 group"
				>
					<!-- Decorative gradient -->
					<div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>

					<!-- Quote icon decoration -->
					<div class="absolute top-8 left-8 text-primary/10">
						<Quote size={80} strokeWidth={1.5} />
					</div>

					<div class="relative z-10 p-12 md:p-16">
						<div class="space-y-8">
							<!-- Rating -->
							<div class="flex gap-1 justify-center">
								{#each Array(testimonials[0].rating) as _, i (i)}
									<Star class="text-warning fill-warning" size={24} />
								{/each}
							</div>

							<!-- Quote -->
							<blockquote class="text-lg text-charcoal font-medium leading-relaxed">
								"{testimonials[0].quote}"
							</blockquote>

							<!-- Divider -->
							<div class="flex justify-center">
								<div class="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
							</div>

							<!-- Author -->
							<div class="flex flex-col items-center gap-4">
								<!-- Avatar -->
								<div class="relative">
									{#if testimonials[0].avatar}
										<img src={testimonials[0].avatar} alt={testimonials[0].name} class="w-20 h-20 rounded-full shadow-lg object-cover" />
									{:else}
										<div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
											{testimonials[0].name.charAt(0)}
										</div>
									{/if}
									<!-- Verification badge -->
									<div class="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
										<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
										</svg>
									</div>
								</div>

								<!-- Info -->
								<div class="text-center space-y-1">
									<div class="font-bold text-xl text-charcoal">{testimonials[0].name}</div>
									<div class="text-sm text-gray-500">{testimonials[0].location}</div>
									<div class="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mt-2">
										<span class="w-2 h-2 rounded-full bg-primary"></span>
										<span class="text-sm font-medium text-primary">{testimonials[0].condition}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		{/if}

		<!-- Other Testimonials Grid -->
		<div class="max-w-6xl mx-auto">
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each testimonials.slice(1, 5) as testimonial, index (testimonial.id)}
					<a
						href={testimonial.googleUrl || '#'}
						target="_blank"
						rel="noopener noreferrer"
						class="group bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-6 hover-lift border border-gray-100 block hover:shadow-xl transition-all duration-300"
					>
						<div class="space-y-4">
							<!-- Rating -->
							<div class="flex gap-1">
								{#each Array(testimonial.rating) as _, i (i)}
									<Star class="text-warning fill-warning" size={16} />
								{/each}
							</div>

							<!-- Quote -->
							<p class="text-gray-700 leading-relaxed text-sm line-clamp-4">
								"{testimonial.quote}"
							</p>

							<!-- Author -->
							<div class="flex items-center gap-3 pt-2 border-t border-gray-200">
								{#if testimonial.avatar}
									<img src={testimonial.avatar} alt={testimonial.name} class="w-10 h-10 rounded-full object-cover" />
								{:else}
									<div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
										{testimonial.name.charAt(0)}
									</div>
								{/if}
								<div>
									<div class="font-semibold text-sm text-charcoal">{testimonial.name}</div>
									<div class="text-xs text-gray-500">{testimonial.condition}</div>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Google Reviews Badge -->
		<div class="max-w-4xl mx-auto mt-20">
			<div class="glass rounded-3xl p-8 md:p-12">
				<div class="flex flex-col md:flex-row items-center justify-between gap-8">
					<div class="flex items-center gap-6">
						<div class="text-5xl">⭐</div>
						<div>
							<div class="flex items-center gap-2 mb-2">
								<span class="text-4xl font-bold text-charcoal">{googleRating}</span>
								<span class="text-gray-600">out of 5</span>
							</div>
							<div class="flex gap-1 mb-2">
								{#each Array(5) as _, i (i)}
									<Star class="text-warning fill-warning" size={20} />
								{/each}
							</div>
							<div class="text-sm text-gray-600">Based on {totalReviews}+ verified reviews</div>
						</div>
					</div>

					<div class="flex flex-col gap-3">
						<a
							href="https://g.page/r/CQpDHfnjaQ0yEAE/review"
							class="btn btn-primary btn-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group border-0"
							target="_blank"
						>
							Share Your Story
							<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
						<div class="text-xs text-center text-gray-500">Join our happy clients</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

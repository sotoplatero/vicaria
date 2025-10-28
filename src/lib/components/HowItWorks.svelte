<script lang="ts">
	import { Calendar, FileText, TrendingUp, ArrowRight } from '@lucide/svelte';

	const steps = [
		{
			number: 1,
			icon: Calendar,
			title: 'Book Free 15 Min Consultation',
			description: 'Schedule a 15-minute discovery call to discuss your health goals and current challenges.',
			duration: '15 minutes',
			color: 'primary'
		},
		{
			number: 2,
			icon: FileText,
			title: 'Get Your Personalized Plan',
			description: 'Receive a customized nutrition plan tailored to your symptoms, lifestyle, and preferences.',
			duration: 'Within 48 hours',
			color: 'secondary'
		},
		{
			number: 3,
			icon: TrendingUp,
			title: 'Start Your Healing Journey',
			description: 'Begin implementing your plan with ongoing support, check-ins, and adjustments.',
			duration: 'Ongoing',
			color: 'accent'
		}
	];
</script>

<section id="how-it-works" class="section-padding bg-gradient-to-b from-warm-white to-base-200 relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-24 space-y-6">
			<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm">
				<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
				<span class="text-sm font-medium text-secondary">Simple Process</span>
			</div>

			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight">
				Your Path to Better Health
				<span class="text-secondary block">in 3 Simple Steps</span>
			</h2>

			<p class="text-xl text-gray-600 leading-relaxed font-light">
				Getting started is easy. We've streamlined the process so you can begin feeling better as soon as possible.
			</p>
		</div>

		<!-- Steps Timeline -->
		<div class="max-w-6xl mx-auto">
			<div class="grid lg:grid-cols-3 gap-12 relative">
				<!-- Connection Line (Desktop) -->
				<div class="hidden lg:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>

				{#each steps as step, index}
					<div class="relative" style="animation-delay: {index * 150}ms">
						<!-- Step Card -->
						<div class="group text-center relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
							<!-- Gradient overlay on hover -->
							<div class="absolute inset-0 bg-gradient-to-br from-{step.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							<div class="relative p-8 space-y-6">
								<!-- Number Badge -->
								<div class="relative inline-flex">
									<div class="w-16 h-16 rounded-2xl bg-accent-content text-white font-bold text-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
										{step.number}
									</div>
									<!-- Glow effect -->
									<div class="absolute inset-0 bg-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>

								<!-- Content -->
								<div class="space-y-3">
									<h3 class="text-2xl font-bold text-charcoal group-hover:text-{step.color} transition-colors">
										{step.title}
									</h3>

									<div class="inline-flex items-center gap-2 bg-{step.color}/10 px-3 py-1.5 rounded-full">
										<svg class="w-4 h-4 text-{step.color}" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
										</svg>
										<span class="text-sm font-medium text-{step.color}">{step.duration}</span>
									</div>

									<p class="text-gray-600 leading-relaxed">
										{step.description}
									</p>
								</div>
							</div>

							<!-- Bottom highlight bar -->
							<div class="h-1 bg-gradient-to-r from-{step.color}/0 via-{step.color} to-{step.color}/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
						</div>

						<!-- Arrow Connector (Mobile) -->
						{#if index < steps.length - 1}
							<div class="flex lg:hidden justify-center my-8">
								<svg class="w-8 h-8 text-{step.color}/30" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
								</svg>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Bottom CTA -->
		<div class="text-center mt-20 space-y-8">
			<div class="space-y-4">
				<h3 class="text-3xl md:text-4xl font-bold text-charcoal">Ready to Transform Your Health?</h3>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Join hundreds of satisfied clients who have transformed their health with personalized nutrition coaching.
				</p>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="#contact"
					class="btn btn-primary btn-lg text-lg px-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group border-0"
				>
					Book Your Free Consultation
					<ArrowRight class="transition-transform group-hover:translate-x-2" size={20} />
				</a>

				<a
					href="#testimonials"
					class="btn btn-ghost btn-lg text-lg px-10 hover:bg-primary/5 transition-all"
				>
					Read Success Stories
				</a>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import { Calendar, Phone, Mail, ArrowRight } from '@lucide/svelte';

	interface Props {
		service: string;
		category?: string;
	}

	let { service, category = 'health-coaching' }: Props = $props();

	const isSkinTreatment = category === 'skin-treatments';
</script>

<section id="contact" class="section-padding bg-primary relative overflow-hidden">
	<!-- Decorative elements -->
	<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto text-center text-white space-y-8">
			<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
				<Calendar class="text-white" size={18} />
				<span class="text-sm font-medium">Start Today</span>
			</div>

			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
				{#if isSkinTreatment}
					Feel Comfortable in Your Skin Again
				{:else}
					Ready to Transform Your Health?
				{/if}
			</h2>

			<p class="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
				{#if isSkinTreatment}
					Book your appointment today and take the first step towards clearer, healthier skin with our professional {service}.
				{:else}
					Book your free 15-minute consultation and discover how our personalized {service} program can
					help you feel better, starting today.
				{/if}
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
				<a
					href="/#contact"
					class="btn btn-secondary btn-lg text-lg px-10 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all group border-0"
				>
					{#if isSkinTreatment}
						Book Your Appointment
					{:else}
						Book Free Consultation
					{/if}
					<ArrowRight class="transition-transform group-hover:translate-x-2" size={20} />
				</a>

				<a
					href="tel:+13653369757"
					class="btn btn-outline btn-lg text-lg px-10 text-white border-white hover:bg-white hover:text-primary transition-all"
				>
					<Phone size={20} />
					Call Now
				</a>
			</div>
			<!-- Trust Indicators -->
			<div class="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80">
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
					</svg>
					<span class="text-sm">No Credit Card Required</span>
				</div>
				<div class="hidden sm:block h-4 w-px bg-white/30"></div>
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
					</svg>
					<span class="text-sm">15 Minutes of Your Time</span>
				</div>
				<div class="hidden sm:block h-4 w-px bg-white/30"></div>
				<div class="flex items-center gap-2">
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
					</svg>
					<span class="text-sm">100% Confidential</span>
				</div>
			</div>


			<!-- Contact Info -->
			<div class="pt-8 border-t border-white/20">
				<p class="text-white/70 mb-4">Prefer to reach out directly?</p>
				<div class="flex flex-wrap items-center justify-center gap-6 text-sm">
					<a href="tel:+13653369757" class="flex items-center gap-2 text-white hover:text-secondary transition-colors">
						<Phone size={16} />
						+1 (365) 336-9757
					</a>
					<a href="mailto:[email protected]" class="flex items-center gap-2 text-white hover:text-secondary transition-colors">
						<Mail size={16} />
						[email protected]
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

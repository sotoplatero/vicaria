<script lang="ts">
	import { Star, Heart, Shield, Globe } from "@lucide/svelte";
	import WhatsAppButton from "./WhatsAppButton.svelte";
	import Btn from "./Btn.svelte";

	interface Props {
		googleRating: number;
		totalReviews: number;
	}

	let { googleRating, totalReviews }: Props = $props();
</script>

<section
	id="hero"
	class="relative min-h-[calc(100dvh-6rem)] flex items-center justify-center overflow-hidden bg-base-200"
>
	<!-- Decorative Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<!-- Soft gradient orbs -->
		<div
			class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"
		></div>
		<div
			class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"
		></div>

		<!-- Grid pattern -->
		<div
			class="absolute inset-0 opacity-[0.03]"
			style="background-image: radial-gradient(circle, #2c2c2c 1px, transparent 1px); background-size: 50px 50px;"
		></div>
	</div>

	<div class="container-custom relative z-10">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<!-- Content Column -->
			<div class="text-center lg:text-left space-y-4 animate-staggered">
				<!-- Headline -->
				<h1
					class="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tighter"
				>
					Get a Nutrition Plan From
					<span class="text-primary">Actual Medical Doctors</span>
				</h1>

				<!-- Subheadline -->
				<p
					class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
				>
					Two MDs with 40+ years of clinical experience build
					personalized nutrition plans for digestive disorders,
					diabetes, and cancer support. Real medical knowledge behind
					every recommendation.
				</p>

				<!-- CTA -->
				<div class="flex justify-center lg:justify-start">
					<WhatsAppButton
						text="Book My Free Consultation"
						callText="Book My Free Consultation"
						size="xl"
						variant="primary"
						message="Hi! I'd like to book a free consultation to discuss my health goals."
					/>
				</div>

				<!-- Trust Indicators -->
				<div class="flex flex-wrap items-center gap-4 md:gap-8 py-4">
					<div class="flex items-center gap-3 group">
						<div
							class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
						>
							<Shield class="text-primary" size={24} />
						</div>
						<div>
							<div class="font-bold text-charcoal">Medical Doctors</div>
							<div class="text-sm text-gray-500">40+ Years Experience</div>
						</div>
					</div>

					<div class="flex gap-3 group">
						<div
							class="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
						>
							<Star class="text-secondary" size={24} />
						</div>
						<div>
							<div class="font-bold text-charcoal">
								{googleRating} on Google
							</div>
							<div class="text-sm text-gray-500">
								{totalReviews}+ Verified Reviews
							</div>
						</div>
					</div>

					<div class="flex gap-3 group">
						<div
							class="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform"
						>
							<Globe class="text-accent" size={24} />
						</div>
						<div>
							<div class="font-bold text-charcoal">Bilingual</div>
							<div class="text-sm text-gray-500">English & Spanish</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Image Column -->
			<div class="hidden lg:block h-full flex items-end">
				<img
					src="/images/vicaria-hero.webp"
					alt="Maurin Yamile - Registered Holistic Nutritionist"
					width="800"
					height="1200"
					fetchpriority="high"
					loading="eager"
					decoding="async"
					style="aspect-ratio: 800/1200;"
					class="max-h-full object-cover transition-transform hover:scale-102 duration-500"
				/>
			</div>
		</div>
	</div>
</section>

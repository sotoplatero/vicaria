<script lang="ts">
	import { Sparkles, Heart, Shield } from "@lucide/svelte";
	import WhatsAppButton from "./WhatsAppButton.svelte";
	import Btn from "./Btn.svelte";
</script>

<section
	id="hero"
	class="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-base-200"
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
		<div class="grid lg:grid-cols-2 gap-8 items-center">
			<!-- Content Column -->
			<div class="text-center lg:text-left space-y-8 animate-fade-up">
				<!-- Headline -->
				<h1
					class="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tighter"
				>
					Hamilton's Most Trusted
					<span class="text-primary">Trusted Nutritionist</span>
				</h1>

				<!-- Subheadline -->
				<p
					class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
				>
					Personalized nutrition coaching for digestive health,
					diabetes, hypertension, and cancer support, tailored to your
					unique needs.
				</p>

				<!-- CTA -->
				<div class="flex flex-col sm:flex-row gap-4 pt-4">
					<WhatsAppButton
						size="xl"
						variant="primary"
						message="Hi! Can you help me get started?"
						animatedBorder={true}
					/>
				</div>

				<!-- Trust Indicators -->
				<div class="flex items-center gap-4 md:gap-8 py-4">
					<div class="flex items-center gap-3 group">
						<div
							class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
						>
							<Shield class="text-primary" size={24} />
						</div>
						<div>
							<div class="font-bold text-charcoal">Certified</div>
							<div class="text-sm text-gray-500">RHN, CNP</div>
						</div>
					</div>

					<div class="flex items-center gap-3 group">
						<div
							class="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
						>
							<Heart class="text-secondary" size={24} />
						</div>
						<div>
							<div class="font-bold text-charcoal">
								100+ People
							</div>
							<div class="text-sm text-gray-500">
								Transformed Lives
							</div>
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
					class="max-h-full object-cover"
				/>
			</div>
		</div>
	</div>
</section>

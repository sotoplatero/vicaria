<script lang="ts">
	import { Check, Calendar, Sparkles } from "@lucide/svelte";
	import WhatsappButton from "$lib/components/WhatsAppButton.svelte";

	interface ProcessStep {
		number: string;
		title: string;
		duration: string;
		description: string;
		details: string[];
		outcome: string;
	}

	const processSteps: ProcessStep[] = [
		{
			number: "01",
			title: "Free WhatsApp Consultation",
			duration: "15 minutes",
			description:
				"Initial consultation via WhatsApp to discuss your concerns (video optional)",
			details: [
				"Chat with us via WhatsApp (text, photos, or video - your choice)",
				"Share photos of your skin concerns if you're comfortable",
				"Discuss what's bothering you and your goals",
				"Get preliminary assessment and recommendations",
				"Learn about the treatment process and what to expect",
				"Decide if you want to book an in-person consultation",
			],
			outcome: "Clear understanding of your options with no obligation",
		},
		{
			number: "02",
			title: "In-Person Consultation",
			duration: "20-30 minutes",
			description:
				"Professional assessment to identify and plan your treatment",
			details: [
				"Comprehensive visual examination of all skin lesions",
				"Professional identification of lesion type (skin tag, milia, ruby point, etc.)",
				"Assessment of size, location, and complexity",
				"Discussion of the treatment procedure and what to expect",
				"Detailed cost estimate based on number and type of lesions",
				"Your questions answered - no pressure, just information",
			],
			outcome:
				"Clear understanding of what you need and total cost before proceeding",
		},
		{
			number: "03",
			title: "Treatment Session",
			duration: "15-45 minutes",
			description:
				"Safe, professional removal performed the same day or scheduled",
			details: [
				"Area preparation and cleaning",
				"Application of appropriate treatment technique",
				"Professional removal of each lesion",
				"Post-treatment care application",
				"Detailed aftercare instructions provided",
				"Timeline: Usually same day as consultation, or scheduled for your convenience",
			],
			outcome:
				"Clean removal with minimal discomfort and clear healing instructions",
		},
		{
			number: "04",
			title: "Healing & Follow-up",
			duration: "Included in service",
			description: "Support during healing and results verification",
			details: [
				"Healing typically takes 7-14 days depending on location",
				"Follow-up contact to check on healing progress",
				"Evaluation of results once fully healed",
				"Recommendations for skincare and prevention",
				"Available for questions throughout healing process",
			],
			outcome: "Smooth healing and beautiful, clear skin",
		},
	];
</script>

<section
	class="py-20 bg-gradient-to-br from-sage-light/10 via-warm-white to-white"
>
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Skin Treatment: How It Works
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Professional skin lesion removal with transparent pricing and
				compassionate care. Here's exactly what to expect from your
				first consultation through complete healing.
			</p>
		</div>

		<!-- Process Steps - Timeline Style -->
		<div class="max-w-4xl mx-auto mb-20">
			<div class="space-y-12">
				{#each processSteps as step, index}
					<div
						class="relative pl-12 border-l-2 {index ===
						processSteps.length - 1
							? 'border-primary/30'
							: 'border-primary/50'} pb-8"
					>
						<div
							class="absolute -left-4 top-0 w-7 h-7 rounded-full bg-primary border-4 border-white flex items-center justify-center"
						>
							<span class="text-xs font-bold text-white"
								>{step.number}</span
							>
						</div>

						<div class="space-y-4">
							<div>
								<h3
									class="text-2xl font-bold text-charcoal mb-1"
								>
									{step.title}
								</h3>
								<div
									class="text-sm text-gray-600 flex items-center gap-2"
								>
									<Calendar size={14} />
									{step.duration}
									{#if index === 0}
										<span
											class="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold"
											>FREE</span
										>
									{:else if index === 1}
										<span
											class="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-semibold"
											>$60 CAD + tax</span
										>
									{/if}
								</div>
							</div>

							<p class="text-gray-700 leading-relaxed">
								{step.description}
							</p>

							<div>
								<h4
									class="text-sm font-bold text-charcoal mb-2"
								>
									What Happens:
								</h4>
								<ul class="space-y-2">
									{#each step.details as detail}
										<li
											class="flex items-start gap-2 text-gray-700"
										>
											<Check
												class="text-primary flex-shrink-0 mt-1"
												size={16}
											/>
											<span class="text-sm">{detail}</span
											>
										</li>
									{/each}
								</ul>
							</div>

							<div class="flex items-start gap-2 pt-2">
								<Sparkles
									class="text-accent flex-shrink-0 mt-1"
									size={18}
								/>
								<p class="text-gray-700">
									<span class="font-semibold text-charcoal"
										>Outcome:</span
									>
									{step.outcome}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Pricing Information -->
		<div class="max-w-4xl mx-auto mb-20 space-y-12">
			<div class="border-t border-gray-200 pt-12">
				<h3 class="text-3xl font-bold text-charcoal mb-8 text-center">
					Pricing Breakdown
				</h3>

				<div class="space-y-8">
					<!-- WhatsApp Consultation -->
					<div class="space-y-3">
						<div class="flex items-baseline justify-between">
							<h4 class="text-xl font-bold text-charcoal">
								WhatsApp Consultation
							</h4>
							<div class="flex items-baseline gap-2">
								<span class="text-4xl font-bold text-green-600"
									>FREE</span
								>
							</div>
						</div>
						<p class="text-gray-700 leading-relaxed pl-4">
							Start with a free 15-minute consultation via
							WhatsApp (video optional). Discuss your concerns,
							share photos if comfortable, and get preliminary
							advice before committing to an in-person visit.
						</p>
					</div>

					<!-- In-Person Consultation Fee -->
					<div class="space-y-3">
						<div class="flex items-baseline justify-between">
							<h4 class="text-xl font-bold text-charcoal">
								In-Person Consultation
							</h4>
							<div class="flex items-baseline gap-2">
								<span class="text-4xl font-bold text-primary"
									>$60</span
								>
								<span class="text-gray-600">CAD</span>
							</div>
						</div>
						<p class="text-gray-700 leading-relaxed pl-4">
							Required if you decide to proceed after the WhatsApp
							consultation. This comprehensive assessment includes
							a visual examination of all lesions, professional
							identification of type and complexity, and a
							detailed cost estimate for your treatment. Plus
							applicable taxes.
						</p>
					</div>

					<!-- Per Lesion Pricing -->
					<div class="space-y-4">
						<h4 class="text-xl font-bold text-charcoal">
							Per Lesion Treatment
						</h4>
						<div class="pl-4 space-y-4">
							<div class="flex items-start justify-between gap-8">
								<div class="flex-1">
									<div
										class="font-semibold text-charcoal mb-1"
									>
										Small Lesions (under 2mm)
									</div>
									<p class="text-sm text-gray-600">
										Most common size. Typical skin tags,
										small milia, tiny ruby points.
									</p>
								</div>
								<div
									class="text-2xl font-bold text-primary whitespace-nowrap"
								>
									$20
								</div>
							</div>

							<div class="flex items-start justify-between gap-8">
								<div class="flex-1">
									<div
										class="font-semibold text-charcoal mb-1"
									>
										Medium Lesions (2-5mm or face/neck)
									</div>
									<p class="text-sm text-gray-600">
										Medium skin tags, larger milia,
										face/neck locations.
									</p>
								</div>
								<div
									class="text-2xl font-bold text-primary whitespace-nowrap"
								>
									$22-$23
								</div>
							</div>

							<div class="flex items-start justify-between gap-8">
								<div class="flex-1">
									<div
										class="font-semibold text-charcoal mb-1"
									>
										Large Lesions (over 5mm or complex)
									</div>
									<p class="text-sm text-gray-600">
										Large skin tags, complex seborrheic
										keratosis, multiple-treatment lesions.
									</p>
								</div>
								<div
									class="text-2xl font-bold text-primary whitespace-nowrap"
								>
									$25
								</div>
							</div>
						</div>
						<p class="text-sm text-gray-600 pl-4">
							All prices in CAD plus applicable taxes. Final price
							determined during consultation based on exact size
							and location.
						</p>
					</div>
				</div>
			</div>

			<!-- What We Treat -->
			<div class="border-t border-gray-200 pt-12">
				<h3 class="text-3xl font-bold text-charcoal mb-6 text-center">
					What We Treat
				</h3>
				<p
					class="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto"
				>
					We offer professional removal for a variety of common skin
					lesions. Each treatment is safe, effective, and performed
					with care to minimize discomfort and promote quick healing.
				</p>
				<div class="space-y-3">
					<p class="text-gray-700 leading-relaxed">
						<a
							href="/service/skin-tag-removal"
							class="text-primary hover:underline font-semibold"
							>Skin Tag Removal</a
						>
						Safe removal of benign skin tags from any body area. These
						small, soft growths are harmless but can be bothersome.
					</p>
					<p class="text-gray-700 leading-relaxed">
						<a
							href="/service/milia-removal"
							class="text-primary hover:underline font-semibold"
							>Milia Removal</a
						>
						Gentle extraction of small white bumps, especially common
						around the eyes. These tiny cysts form when dead skin becomes
						trapped.
					</p>
					<p class="text-gray-700 leading-relaxed">
						<a
							href="/service/ruby-points-treatment"
							class="text-primary hover:underline font-semibold"
							>Ruby Points Treatment</a
						>
						Treatment of small red spots (cherry angiomas). These bright
						red bumps are collections of small blood vessels.
					</p>
					<p class="text-gray-700 leading-relaxed">
						<a
							href="/service/seborrheic-keratosis-removal"
							class="text-primary hover:underline font-semibold"
							>Seborrheic Keratosis Removal</a
						>
						Removal of brown, waxy growths common with aging. These benign
						lesions often appear on the face, chest, or back.
					</p>
				</div>
			</div>

			<!-- Important Information -->
			<div class="border-t border-gray-200 pt-12">
				<h3 class="text-2xl font-bold text-charcoal mb-6">
					Important to Know
				</h3>
				<ul class="space-y-3">
					<li class="flex items-start gap-3">
						<Check
							class="text-primary flex-shrink-0 mt-1"
							size={20}
						/>
						<span class="text-gray-700">
							<strong class="text-charcoal"
								>Not covered by OHIP:</strong
							> These are cosmetic procedures, not considered medically
							necessary by provincial health insurance.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<Check
							class="text-primary flex-shrink-0 mt-1"
							size={20}
						/>
						<span class="text-gray-700">
							<strong class="text-charcoal"
								>Payment required:</strong
							> Full payment due at time of service. We accept credit,
							debit, e-transfer, and cash.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<Check
							class="text-primary flex-shrink-0 mt-1"
							size={20}
						/>
						<span class="text-gray-700">
							<strong class="text-charcoal"
								>Same-day treatment:</strong
							> Treatment can often be performed the same day as your
							consultation if you choose to proceed.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<Check
							class="text-primary flex-shrink-0 mt-1"
							size={20}
						/>
						<span class="text-gray-700">
							<strong class="text-charcoal"
								>Multiple lesions:</strong
							> You can have as many lesions removed in one session
							as is comfortable. Many clients prefer to address everything
							at once.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<Check
							class="text-primary flex-shrink-0 mt-1"
							size={20}
						/>
						<span class="text-gray-700">
							<strong class="text-charcoal">Healing time:</strong>
							Most treatments heal within 7-14 days depending on location.
							You'll receive detailed aftercare instructions.
						</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA -->
		<div class="text-center border-t border-gray-200 pt-12">
			<p class="text-2xl text-gray-700 mb-6 font-medium">
				Ready to get clear, beautiful skin?
			</p>
			<WhatsappButton
				message="Hi! I'd like to book a skin treatment consultation."
				variant="secondary"
			/>
			<p class="text-gray-600 mt-6 max-w-xl mx-auto">
				Start with a free 15-minute consultation via WhatsApp. Get
				expert advice and learn about your options before committing no
				obligation to proceed.
			</p>
		</div>
	</div>
</section>

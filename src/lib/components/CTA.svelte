<script lang="ts">
	import { Phone, Mail, type Icon } from '@lucide/svelte';
	import WhatsAppButton from './WhatsAppButton.svelte';

	interface Props {
		// Main content
		badge?: string;
		badgeIcon?: typeof Icon;
		title: string;
		description: string;

		// Primary CTA
		primaryButtonText?: string;
		primaryButtonVariant?: 'primary' | 'secondary' | 'accent';
		whatsappMessage?: string;

		// Secondary CTA (Phone)
		showPhoneButton?: boolean;
		phoneButtonText?: string;
		phoneNumber?: string;

		// Trust indicators
		trustIndicators?: string[];

		// Contact info at bottom
		showContactInfo?: boolean;
		contactInfoText?: string;

		// Styling
		backgroundColor?: 'primary' | 'secondary' | 'accent';
		id?: string;
	}

	let {
		badge = 'Start Today',
		badgeIcon,
		title,
		description,
		primaryButtonText = 'Free Consultation',
		primaryButtonVariant = 'secondary',
		whatsappMessage = 'Hi! I would like to get started. Can you help me?',
		showPhoneButton = true,
		phoneButtonText = 'Call Now',
		phoneNumber = '+13653369757',
		trustIndicators = ['No Credit Card Required', '15 Minutes of Your Time', '100% Confidential'],
		showContactInfo = true,
		contactInfoText = 'Prefer to reach out directly?',
		backgroundColor = 'primary',
		id = 'contact'
	}: Props = $props();

	const bgColorClass = $derived(`bg-${backgroundColor}`);
</script>

<section {id} class="section-padding {bgColorClass} relative overflow-hidden">
	<!-- Decorative elements -->
	<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto text-center text-white space-y-8">
			<!-- Badge -->
			{#if badge}
				<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
					{#if badgeIcon}
						<svelte:component this={badgeIcon} class="text-white" size={18} />
					{/if}
					<span class="text-sm font-medium">{badge}</span>
				</div>
			{/if}

			<!-- Title -->
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
				{title}
			</h2>

			<!-- Description -->
			<p class="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
				{description}
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
				<WhatsAppButton
					text={primaryButtonText}
					size="lg"
					variant={primaryButtonVariant}
					message={whatsappMessage}
				/>

			</div>

			<!-- Trust Indicators -->
			{#if trustIndicators.length > 0}
				<div class="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80">
					{#each trustIndicators as indicator, index}
						<div class="flex items-center gap-2">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="text-sm">{indicator}</span>
						</div>
						{#if index < trustIndicators.length - 1}
							<div class="hidden sm:block h-4 w-px bg-white/30"></div>
						{/if}
					{/each}
				</div>
			{/if}


		</div>
	</div>
</section>

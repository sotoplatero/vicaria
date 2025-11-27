<script lang="ts">
	import { X, Gift, ArrowRight } from "@lucide/svelte";
	import offerData from "$lib/data/current-offer.json";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	const offer = offerData.isActive ? offerData : null;

	let isVisible = $state(false);
	let isMounted = $state(false);

	// Don't show banner on the offer page itself (Svelte 5 $derived)
	const isOfferPage = $derived($page.url.pathname === "/offer");

	// Map service pillar IDs to categories for styling
	const categoryMap: Record<string, "health-coaching" | "skin-treatments"> = {
		"digestive-relief": "health-coaching",
		"diabetes-clarity": "health-coaching",
		"blood-pressure-balance": "health-coaching",
		"menopause-health": "health-coaching",
		"uti-pelvic-health": "health-coaching",
		"cancer-recovery": "health-coaching",
		"general-wellness": "health-coaching",
		"skin-services": "skin-treatments",
	};

	const category = offer
		? categoryMap[offer.servicePillarId] || "health-coaching"
		: "health-coaching";
	const colorClass = category === "health-coaching" ? "primary" : "secondary";

	onMount(() => {
		isMounted = true;
		// Check if user has dismissed the banner
		const dismissed = localStorage.getItem(`offer-banner-${offer?.month}-${offer?.year}`);
		if (!dismissed && offer) {
			isVisible = true;
		}
	});

	function closeBanner() {
		isVisible = false;
		// Remember dismissal for this month's offer
		if (offer) {
			localStorage.setItem(`offer-banner-${offer.month}-${offer.year}`, "true");
		}
	}
</script>

{#if isMounted && isVisible && offer && !isOfferPage}
	<div
		class="relative w-full bg-secondary text-white shadow animate-slide-down"
		role="banner"
	>
		<div class="container-custom">
			<div class="flex items-center justify-center gap-4 py-3 px-4">
				<!-- Icon + Message -->
				<a href="/offer" class="flex items-center">
					<div class="flex-shrink-0 animate-bounce-subtle mr-2">
						<Gift class="text-white size-6" />
					</div>
					<div class="flex-1 min-w-0">
						<p class="text-sm md:text-base font-semibold truncate">
							<span class="hidden sm:inline">{offer.theme}: </span>
							{offer.offerFormat}
							<span class="hidden md:inline"> — {offer.scarcity}</span>
						</p>
					</div>
				</a>

			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes slide-down {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes bounce-subtle {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-3px);
		}
	}

	.animate-slide-down {
		animation: slide-down 0.4s ease-out;
	}

	.animate-bounce-subtle {
		animation: bounce-subtle 2s ease-in-out infinite;
	}
</style>

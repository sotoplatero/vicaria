<script lang="ts">
	import { Star, Clock, Stethoscope, Users } from "@lucide/svelte";

	interface Props {
		googleRating: number;
		totalReviews: number;
	}

	let { googleRating, totalReviews }: Props = $props();
</script>

<section class="py-8 md:py-12 bg-white border-y border-gray-100">
	<div class="container-custom">
		<div
			class="flex flex-wrap items-center justify-center gap-8 md:gap-16"
		>
			<div class="flex items-center gap-3">
				<Star class="text-yellow-500" size={24} fill="currentColor" />
				<div>
					<div class="font-bold text-charcoal text-lg">{googleRating}/5</div>
					<div class="text-sm text-gray-500">{totalReviews}+ Google Reviews</div>
				</div>
			</div>

			<div class="hidden sm:block h-10 w-px bg-gray-200"></div>

			<div class="flex items-center gap-3">
				<Stethoscope class="text-primary" size={24} />
				<div>
					<div class="font-bold text-charcoal text-lg">40+ Years</div>
					<div class="text-sm text-gray-500">Combined Medical Experience</div>
				</div>
			</div>

			<div class="hidden sm:block h-10 w-px bg-gray-200"></div>

			<div class="flex items-center gap-3">
				<Users class="text-secondary" size={24} />
				<div>
					<div class="font-bold text-charcoal text-lg">2 MDs</div>
					<div class="text-sm text-gray-500">On Your Health Team</div>
				</div>
			</div>

			<div class="hidden sm:block h-10 w-px bg-gray-200"></div>

			<div class="flex items-center gap-3">
				<Clock class="text-accent" size={24} />
				<div>
					<div class="font-bold text-charcoal text-lg">Free</div>
					<div class="text-sm text-gray-500">15-Min Consultation</div>
				</div>
			</div>
		</div>
	</div>
</section>

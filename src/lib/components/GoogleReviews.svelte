<script lang="ts">
	import { Star } from "@lucide/svelte";

	interface Review {
		author_name: string;
		rating: number;
		text: string;
		time: number;
		profile_photo_url?: string;
	}

	interface Props {
		reviews?: Review[];
		rating?: number;
		totalReviews?: number;
		error?: string;
	}

	let {
		reviews = [],
		rating = 0,
		totalReviews = 0,
		error = "",
	}: Props = $props();

	// Show only 5 most recent reviews
	const displayReviews = reviews.slice(0, 5);

	function formatDate(timestamp: number): string {
		return new Date(timestamp * 1000).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
		});
	}
</script>

<section id="google-reviews" class="py-32 bg-base-100">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="text-center mb-20">
			<p
				class="text-sm uppercase tracking-wider text-primary font-semibold mb-3"
			>
				Client Experiences
			</p>
			<h2 class="text-5xl font-light mb-4">Trusted by Our Community</h2>
			{#if !error && rating > 0}
				<div class="flex items-center justify-center gap-2 text-xl">
					<span class="font-bold">{rating.toFixed(1)}</span>
					<div class="flex">
						{#each Array(5) as _, i}
							<Star
								class="w-6 h-6 {i < Math.floor(rating)
									? 'fill-warning text-warning'
									: 'text-base-300'}"
							/>
						{/each}
					</div>
					<span class="text-base-content/70"
						>({totalReviews} reviews)</span
					>
				</div>
			{/if}
		</div>

		{#if error}
			<div class="alert alert-warning max-w-2xl mx-auto">
				<span
					>Unable to load reviews at this time. Please check back
					later.</span
				>
			</div>
		{:else if displayReviews.length > 0}
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
			>
				{#each displayReviews as review}
					<div class="card bg-base-200 shadow-xl">
						<div class="card-body">
							<div class="flex items-start gap-3 mb-3">
								{#if review.profile_photo_url}
									<img
										src={review.profile_photo_url}
										alt={review.author_name}
										class="w-10 h-10 rounded-full"
									/>
								{:else}
									<div
										class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
									>
										<span class="font-bold"
											>{review.author_name[0]}</span
										>
									</div>
								{/if}
								<div class="flex-1">
									<p class="font-bold">
										{review.author_name}
									</p>
									<div class="flex gap-1">
										{#each Array(5) as _, i}
											<Star
												class="w-4 h-4 {i <
												review.rating
													? 'fill-warning text-warning'
													: 'text-base-300'}"
											/>
										{/each}
									</div>
									<p class="text-sm text-base-content/70">
										{formatDate(review.time)}
									</p>
								</div>
							</div>
							<p class="text-sm line-clamp-4">{review.text}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="text-center mt-8">
				<a
					href="https://www.google.com/maps/place/Vicaria+Health/@43.2547445,-79.8729215,17z/data=!4m8!3m7!1s0x882ded03595fa5a1:0xf8eaf45b5953d495!8m2!3d43.2547445!4d-79.8703466!9m1!1b1!16s%2Fg%2F11y2t7jfgq"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-outline btn-primary"
				>
					See all reviews on Google
				</a>
			</div>
		{/if}
	</div>
</section>

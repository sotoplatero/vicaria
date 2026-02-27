<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";

	interface Props {
		service: string;
		slug: string;
		pain: string;
		solution: string;
		image: string;
		imageAlt: string;
		reverse?: boolean;
		accentColor?: "primary" | "secondary";
	}

	let {
		service,
		slug,
		pain,
		solution,
		image,
		imageAlt,
		reverse = false,
		accentColor = "primary",
	}: Props = $props();

	const isPrimary = $derived(accentColor === "primary");
	const borderClass = $derived(isPrimary ? "border-primary-hover" : "border-secondary-hover");
</script>

<a
	href="/service/{slug}"
	class="group block bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl {borderClass}"
>
	<div class="grid md:grid-cols-2 gap-0 items-stretch">
		<!-- Image -->
		<div
			class="relative overflow-hidden bg-base-200"
			class:md:order-2={reverse}
		>
			<img
				src={image}
				alt={imageAlt}
				loading="lazy"
				class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent"
			></div>
		</div>

		<!-- Content -->
		<div class="p-8 md:p-10 flex flex-col justify-center space-y-5" class:md:order-1={reverse}>
			<h3
				class="text-2xl md:text-3xl font-bold text-charcoal transition-colors leading-tight"
				class:group-hover:text-primary={isPrimary}
				class:group-hover:text-secondary={!isPrimary}
			>
				{service}
			</h3>

			<p class="text-gray-600 leading-relaxed">
				{pain}
			</p>

			<p class="text-gray-700 leading-relaxed text-sm font-medium">
				{solution}
			</p>

			<div class="pt-2">
				<span
					class="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
					class:text-primary={isPrimary}
					class:text-secondary={!isPrimary}
				>
					Learn More
					<ArrowRight
						size={18}
						class="group-hover:translate-x-1 transition-transform"
						aria-hidden="true"
					/>
				</span>
			</div>
		</div>
	</div>
</a>

<style>
	.border-primary-hover:hover {
		border-color: oklch(65% 0.16 345 / 0.2);
	}
	.border-secondary-hover:hover {
		border-color: oklch(50% 0.09 138 / 0.2);
	}
</style>

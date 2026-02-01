<script lang="ts">
	import { CalendarDays, BadgeCheck } from "@lucide/svelte";

	interface Props {
		author?: string;
		authorCredentials?: string;
		reviewedBy?: string;
		dateModified?: string;
	}

	let { author, authorCredentials, reviewedBy, dateModified }: Props =
		$props();

	// Format date for display
	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}
</script>

{#if author}
	<div
		class="not-prose flex flex-col flex-wrap gap-2 py-6 px-8 bg-sage-light/20 rounded-xl border border-sage-light/30 mb-8"
	>
		<!-- Author photo and info -->
		<a
			href="/about"
			class="flex items-center gap-3 hover:opacity-80 transition-opacity"
		>
			<img
				src="/images/yamilet-pina.webp"
				alt={author}
				class="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
			/>
			<div>
				<div class="font-semibold text-charcoal">{author}</div>
				{#if authorCredentials}
					<div class="text-sm text-gray-600">{authorCredentials}</div>
				{/if}
			</div>
		</a>

		<!-- Divider -->
		<!-- <div class="hidden sm:block w-px h-10 bg-gray-300"></div> -->

		<!-- Medically Reviewed badge -->
		<div class="">
			{#if reviewedBy}
				<div class="flex items-center gap-2 text-sm text-gray-600">
					<BadgeCheck class="text-primary" size={18} />
					<span
						>Medically reviewed by <strong>{reviewedBy}</strong
						></span
					>
				</div>
			{/if}

			<!-- Divider -->
			<!-- {#if dateModified}
			<div class="hidden sm:block w-px h-10 bg-gray-300"></div>
			{/if} -->

			<!-- Last updated -->
			{#if dateModified}
				<div class="flex items-center gap-2 text-sm text-gray-600">
					<CalendarDays class="text-gray-500" size={16} />
					<span>Updated {formatDate(dateModified)}</span>
				</div>
			{/if}
		</div>
	</div>
{/if}

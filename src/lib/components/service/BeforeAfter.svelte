<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		beforeImage: string;
		afterImage: string;
		beforeLabel?: string;
		afterLabel?: string;
		alt?: string;
	}

	let {
		beforeImage,
		afterImage,
		beforeLabel = 'Before',
		afterLabel = 'After',
		alt = 'Before and after comparison'
	}: Props = $props();

	let containerElement: HTMLDivElement;
	let sliderPosition = $state(50); // Percentage
	let isDragging = $state(false);

	function updateSliderPosition(clientX: number) {
		if (!containerElement) return;

		const rect = containerElement.getBoundingClientRect();
		const x = clientX - rect.left;
		const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
		sliderPosition = percentage;
	}

	function handleMouseDown(e: MouseEvent) {
		isDragging = true;
		updateSliderPosition(e.clientX);
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		updateSliderPosition(e.clientX);
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleTouchStart(e: TouchEvent) {
		isDragging = true;
		updateSliderPosition(e.touches[0].clientX);
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		e.preventDefault();
		updateSliderPosition(e.touches[0].clientX);
	}

	function handleTouchEnd() {
		isDragging = false;
	}

	onMount(() => {
		// Add global mouse/touch event listeners
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('touchmove', handleTouchMove, { passive: false });
		document.addEventListener('touchend', handleTouchEnd);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('touchmove', handleTouchMove);
			document.removeEventListener('touchend', handleTouchEnd);
		};
	});
</script>

<div class="w-full max-w-4xl mx-auto not-prose">
	<!-- Container -->
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<div
		bind:this={containerElement}
		class="relative w-full aspect-[4/3] overflow-hidden rounded-3xl shadow select-none cursor-ew-resize bg-gray-100"
		onmousedown={handleMouseDown}
		ontouchstart={handleTouchStart}
		role="application"
		aria-label={alt}
		tabindex="0"
	>
		<!-- After Image (Full Width) -->
		<div class="absolute inset-0">
			<img
				src={afterImage}
				alt={`${alt} - after`}
				class="w-full h-full object-cover"
				draggable="false"
			/>
			<!-- After Label -->
			<div class="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
				{afterLabel}
			</div>
		</div>

		<!-- Before Image (Clipped) -->
		<div
			class="absolute inset-0 overflow-hidden"
			style="clip-path: inset(0 {100 - sliderPosition}% 0 0);"
		>
			<img
				src={beforeImage}
				alt={`${alt} - before`}
				class="w-full h-full object-cover"
				draggable="false"
			/>
			<!-- Before Label -->
			<div class="absolute top-4 left-4 bg-charcoal text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
				{beforeLabel}
			</div>
		</div>

		<!-- Slider Line and Handle -->
		<div
			class="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
			style="left: {sliderPosition}%; transform: translateX(-50%);"
		>
			<!-- Handle -->
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform"
			>
				<!-- Left Arrow -->
				<svg
					class="absolute left-2 w-3 h-3 text-primary"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<!-- Right Arrow -->
				<svg
					class="absolute right-2 w-3 h-3 text-primary"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	</div>

	<!-- Instructions (optional - can be removed if not needed) -->
	<div class="text-center mt-4 text-gray-600 text-sm">
		<p class="hidden sm:block">Drag the slider or click anywhere to compare</p>
		<p class="sm:hidden">Slide to compare before and after</p>
	</div>
</div>

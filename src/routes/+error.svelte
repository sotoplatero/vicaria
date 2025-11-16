<script lang="ts">
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages';

	const { status } = $derived($page);
	const { message } = $derived($page.error || {});

	const errorTitle = $derived.by(() => {
		if (status === 404) return m.error_404_title();
		if (status === 500) return m.error_500_title();
		return m.error_default_title({ code: status.toString() });
	});

	const errorMessage = $derived.by(() => {
		if (status === 404) return m.error_404_message();
		if (status === 500) return m.error_500_message();
		return message || m.error_default_message();
	});

	const errorIcon = $derived.by(() => {
		if (status === 404) return '🔍';
		if (status === 500) return '⚠️';
		return '❌';
	});
</script>

<svelte:head>
	<title>{errorTitle} | Vicaria</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-200 px-4">
	<div class="max-w-2xl w-full text-center">
		<!-- Error Icon and Code -->
		<div class="mb-8">
			<div class="text-9xl font-bold text-error">
				{status}
			</div>
		</div>

		<!-- Error Title and Message -->
		<div class="card bg-base-100 shadow-xl p-8">
			<div class="card-body">
				<h1 class="card-title text-4xl justify-center mb-4">
					{errorTitle}
				</h1>
				<p class="text-lg text-base-content/70 mb-8">
					{errorMessage}
				</p>

				<!-- Action Buttons -->
				<div class="card-actions justify-center gap-4">
					<a href="/" class="btn btn-primary btn-lg">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
						{m.error_go_home()}
					</a>
				</div>
			</div>
		</div>

	</div>
</div>

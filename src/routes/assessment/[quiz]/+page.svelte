<script lang="ts">
	import {
		CheckCircle2,
		Shield,
		Clock,
		ArrowRight,
		Loader2,
	} from "@lucide/svelte";
	import { enhance } from "$app/forms";
	import type { PageData, ActionData } from "./$types";
	import type { Outcome } from "$lib/types/quiz";
	import Quiz from "$lib/components/Quiz.svelte";

	let { data, form }: { data: PageData; form: ActionData } = $props();
	const quiz = $derived(data.quiz);

	// Quiz state
	let showQuiz = $state(false);
	let showResults = $state(false);
	let answers = $state<Record<string, any>>({});
	let result = $state<string | undefined>(undefined);
	let outcome = $state<Outcome | undefined>(undefined);
	let loading = $state(false);
	let formElement: HTMLFormElement;

	// Update result from form action if available
	$effect(() => {
		if (form?.result) {
			result = form.result;
			outcome = form.outcome;
			showResults = true;
			loading = false;
		}
	});

	// Start quiz
	function startQuiz() {
		showQuiz = true;
		showResults = false;
		answers = {};
		result = undefined;
		outcome = undefined;
	}

	function handleQuizComplete(data: Record<string, any>) {
		answers = data;
		// Submit the form programmatically
		setTimeout(() => {
			if (formElement) formElement.requestSubmit();
		}, 0);
	}

	// Simple Markdown Parser
	function parseMarkdown(text: string) {
		if (!text) return "";
		return text
			.replace(
				/### (.*$)/gim,
				'<h3 class="font-bold text-lg mb-2 mt-4">$1</h3>',
			)
			.replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
			.replace(/\n/gim, "<br>");
	}
</script>

<svelte:head>
	<title>{quiz?.meta.title || 'Quiz'} - Vicaria Health</title>
	<meta name="description" content={quiz?.meta.description || ''} />
</svelte:head>

{#if quiz}
{#if !showQuiz}
	<!-- Landing Page -->
	<div class="min-h-screen">
		<!-- Hero Section -->
		<section
			class="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10"
		>
			<div class="container-custom text-center py-20">
				<!-- Estimated Time Badge -->
				<div
					class="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
				>
					<Clock size={16} class="text-primary" />
					<span class="text-sm font-medium text-primary"
						>{quiz.meta.estimated_time}</span
					>
				</div>

				<!-- Hero Headline -->
				<h1
					class="text-4xl md:text-6xl font-bold text-charcoal mb-6 max-w-4xl mx-auto"
				>
					{quiz.landing_page.hero.headline}
				</h1>

				<!-- Hero Subheadline -->
				<p
					class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
				>
					{quiz.landing_page.hero.subheadline}
				</p>

				<!-- CTA Button -->
				<button
					onclick={startQuiz}
					class="btn btn-primary btn-lg text-lg px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
				>
					{quiz.landing_page.hero.cta_button}
					<ArrowRight size={20} />
				</button>

				<!-- Trust Elements -->
				<div
					class="flex flex-wrap items-center justify-center gap-6 mt-12"
				>
					{#each quiz.landing_page.trust_elements as element}
						<div
							class="flex items-center gap-2 text-sm text-gray-600"
						>
							<Shield size={16} class="text-primary" />
							<span>{element}</span>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Agitation Section -->
		<section class="py-20 bg-white">
			<div class="container-custom max-w-4xl">
				<h2
					class="text-3xl md:text-4xl font-bold text-charcoal mb-10 text-center"
				>
					{quiz.landing_page.agitation_section.title}
				</h2>

				<div class="grid md:grid-cols-2 gap-6">
					{#each quiz.landing_page.agitation_section.bullets as bullet}
						<div
							class="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
						>
							<div
								class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1"
							>
								<div
									class="w-2 h-2 rounded-full bg-red-500"
								></div>
							</div>
							<p class="text-gray-700 leading-relaxed">
								{bullet}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Solution Section -->
		<section class="py-20 bg-gradient-to-br from-primary/5 to-white">
			<div class="container-custom max-w-4xl">
				<div class="text-center mb-12">
					<h2
						class="text-3xl md:text-4xl font-bold text-charcoal mb-4"
					>
						{quiz.landing_page.solution_section.title}
					</h2>
					<p class="text-xl text-gray-600 max-w-2xl mx-auto">
						{quiz.landing_page.solution_section.description}
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-6 mb-12">
					{#each quiz.landing_page.solution_section.value_proposition as value}
						<div
							class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
						>
							<div
								class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
							>
								<CheckCircle2 class="text-primary" size={24} />
							</div>
							<p class="text-gray-700 font-medium">{value}</p>
						</div>
					{/each}
				</div>

				<!-- Final CTA -->
				<div class="text-center">
					<button
						onclick={startQuiz}
						class="btn btn-primary btn-lg text-lg px-12 shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
					>
						{quiz.landing_page.hero.cta_button}
						<ArrowRight size={20} />
					</button>
				</div>
			</div>
		</section>
	</div>
{:else if !showResults && !loading}
	<Quiz
		{quiz}
		oncomplete={handleQuizComplete}
		oncancel={() => (showQuiz = false)}
	/>

	<form
		method="POST"
		use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				await update();
				loading = false;
			};
		}}
		bind:this={formElement}
		class="hidden"
	>
		<input type="hidden" name="answers" value={JSON.stringify(answers)} />
	</form>
{:else if loading}
	<!-- Loading State -->
	<div
		class="min-h-screen bg-gradient-to-br from-primary/5 to-white py-20 flex items-center justify-center"
	>
		<div class="text-center">
			<Loader2 class="w-16 h-16 text-primary animate-spin mx-auto mb-6" />
			<h2 class="text-2xl font-bold text-charcoal mb-2">
				Analyzing your results...
			</h2>
			<p class="text-gray-600">
				Please wait while our AI expert reviews your answers.
			</p>
		</div>
	</div>
{:else}
	<!-- Results Page -->
	<div class="min-h-screen bg-gradient-to-br from-primary/5 to-white py-20">
		<div class="container-custom max-w-3xl text-center">
			<div class="bg-white rounded-2xl shadow-xl p-10">
				{#if result && outcome}
					<div class="mb-8">
						<span
							class="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 uppercase tracking-wider"
						>
							{outcome.urgency} Urgency
						</span>
						<h1 class="text-4xl font-bold text-charcoal mb-4">
							{outcome.title}
						</h1>

						<div
							class="bg-gray-50 rounded-xl p-6 text-left mb-8 prose"
						>
							{@html parseMarkdown(result)}
						</div>

						<a
							href={outcome.cta.url}
							class="btn btn-primary btn-lg w-full md:w-auto"
						>
							{outcome.cta.text}
						</a>
						<p class="text-sm text-red-500 mt-4 font-medium">
							{outcome.cta.urgency_text}
						</p>
					</div>
				{:else}
					<h1 class="text-4xl font-bold text-charcoal mb-4">
						Quiz Completed!
					</h1>
					<p class="text-xl text-gray-600 mb-8">
						Thank you for completing the assessment.
					</p>
				{/if}

				<button
					onclick={() => (showQuiz = false)}
					class="btn btn-ghost mt-8"
				>
					Retake Quiz
				</button>
			</div>
		</div>
	</div>
{/if}
{:else}
	<div class="min-h-screen flex items-center justify-center">
		<div class="text-center">
			<h1 class="text-2xl font-bold text-charcoal mb-4">Quiz not found</h1>
			<a href="/" class="btn btn-primary">Go back home</a>
		</div>
	</div>
{/if}

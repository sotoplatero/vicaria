<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";
	import WhatsAppButton from "./WhatsAppButton.svelte";
</script>

<section class="section-padding bg-base-200 relative overflow-hidden">
	<div
		class="absolute top-0 left-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl -z-10"
	></div>

	<div class="container-custom max-w-4xl">
		<div class="text-center space-y-8">
			<h2
				class="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight tracking-tight"
			>
				You've tried everything.
				<span class="text-primary block mt-2">Nothing has worked.</span>
			</h2>

			<div class="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
				<p>
					The elimination diets. The supplements. The generic meal plans
					from nutritionists who barely looked at your medical history.
				</p>
				<p>
					Yet you still feel bloated, exhausted, and frustrated. Your
					doctor says your labs are "normal" but you know something is
					off.
				</p>
				<p class="text-charcoal font-medium">
					You deserve answers from someone who actually understands
					medicine — not just nutrition trends.
				</p>
			</div>

			<div class="pt-4">
				<WhatsAppButton
					text="Talk to a Doctor — It's Free"
					size="lg"
					variant="primary"
					message="Hi! I've been struggling with my health and would like to discuss my situation."
				/>
			</div>
		</div>
	</div>
</section>

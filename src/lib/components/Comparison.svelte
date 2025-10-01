<script lang="ts">
	import {
		Clock,
		X,
		RefreshCw,
		Languages,
		Target,
		Home,
		ListChecks
	} from 'lucide-svelte';
</script>

<section class="py-32 bg-base-200">
	<div class="container mx-auto px-4 max-w-7xl">
		<div class="text-center mb-20">
			<p class="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
				The Difference
			</p>
			<h2 class="text-5xl font-light mb-4">Why Vicaria Changes Everything</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Healthcare Today Card -->
			<div class="bg-base-100 rounded-3xl p-8 shadow-lg border-t-4 border-error">
				<div class="text-center mb-8">
					<h3 class="text-3xl font-light text-error/80">Healthcare Today</h3>
				</div>

				<div class="space-y-6">
					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
								<Clock class="w-5 h-5 text-error" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">Endless Wait Times</h4>
							<p class="text-base-content/70 leading-relaxed">
								You wait weeks or months for appointments. By the time you see a doctor, the problem
								has already grown.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
								<Clock class="w-5 h-5 text-error" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">Rushed Consultations</h4>
							<p class="text-base-content/70 leading-relaxed">
								You finally get in, and you're out in 10 minutes. No real guidance. No time to ask
								questions.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
								<RefreshCw class="w-5 h-5 text-error" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">Specialist to Specialist</h4>
							<p class="text-base-content/70 leading-relaxed">
								You get bounced around from one specialist to another. Each gives you a piece of the
								puzzle, but no one gives you the full picture.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
								<X class="w-5 h-5 text-error" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">No Ongoing Support</h4>
							<p class="text-base-content/70 leading-relaxed">
								Once you leave, you're on your own. No follow-up. No one checking if you're actually
								improving.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
								<X class="w-5 h-5 text-error" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">No Integral Solution</h4>
							<p class="text-base-content/70 leading-relaxed">
								Your chronic condition, lifestyle, stress, and everyday health problems are treated
								separately — but you need someone who looks at everything together.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Vicaria Healthcare Card -->
			<div class="bg-base-100 rounded-3xl p-8 shadow-lg border-t-4 border-success">
				<div class="text-center mb-8">
					<h3 class="text-3xl font-light text-success">Vicaria Healthcare</h3>
				</div>

				<div class="space-y-6">
					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
								<Clock class="w-5 h-5 text-success" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">More Time, Real Answers</h4>
							<p class="text-base-content/70 leading-relaxed">
								Sessions that last long enough to explain, plan, and guide you. No rush. No unanswered
								questions.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
								<Target class="w-5 h-5 text-success" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">One Integrated Approach</h4>
							<p class="text-base-content/70 leading-relaxed">
								We connect the dots between your condition, your habits, and your goals. You stop being
								passed around — you get a complete solution.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
								<ListChecks class="w-5 h-5 text-success" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">Step-by-Step Guidance</h4>
							<p class="text-base-content/70 leading-relaxed">
								We don't just tell you what to do. We build a plan with you, and walk with you through
								every step.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
								<RefreshCw class="w-5 h-5 text-success" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">Follow-Up That Actually Follows Up</h4>
							<p class="text-base-content/70 leading-relaxed">
								We check in, adjust, and make sure you're moving forward. You're never left on your
								own.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
								<Home class="w-5 h-5 text-success" />
							</div>
						</div>
						<div>
							<h4 class="font-semibold text-lg mb-2">Accessible When You Need It</h4>
							<p class="text-base-content/70 leading-relaxed">
								In-clinic, in-home, or by your side at medical appointments. Wherever your health
								journey takes you, we're there.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

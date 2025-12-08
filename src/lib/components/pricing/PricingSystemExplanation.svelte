<script lang="ts">
	import { TrendingDown, Shield, Receipt, Sparkles } from '@lucide/svelte';
</script>

<section class="py-20 bg-gradient-to-br from-white via-warm-white to-sage-light/10">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Why Our Pricing Works This Way
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				As a local Hamilton health practice, we believe in transparent pricing that reflects the value of personalized care.
				Here's what makes our model different.
			</p>
		</div>

		<div class="max-w-4xl mx-auto space-y-8 mb-16">
			<div class="space-y-3">
				<h3 class="text-2xl font-bold text-charcoal flex items-center gap-3">
					<TrendingDown class="text-primary" size={28} />
					Better Value with Commitment
				</h3>
				<p class="text-gray-700 leading-relaxed pl-11">
					The more sessions you commit to, the lower your per-session cost. This isn't just a discount—it's how I can plan a more comprehensive program for you and dedicate resources to your ongoing care. Save <span class="font-bold text-primary">$5-$15 per session</span> with our packages compared to single sessions.
				</p>
			</div>

			<div class="space-y-3">
				<h3 class="text-2xl font-bold text-charcoal flex items-center gap-3">
					<Sparkles class="text-secondary" size={28} />
					Sustainable Results Take Time
				</h3>
				<p class="text-gray-700 leading-relaxed pl-11">
					Real health transformation doesn't happen in one session. Our packages are designed to give you enough time and support to build lasting habits, address root causes, and see meaningful change—not quick fixes that fade away.
				</p>
			</div>

			<div class="space-y-3">
				<h3 class="text-2xl font-bold text-charcoal flex items-center gap-3">
					<Shield class="text-accent" size={28} />
					Insurance Friendly
				</h3>
				<p class="text-gray-700 leading-relaxed pl-11">
					Many extended health insurance plans cover consultations with Registered Nutritional Practitioners. Check your benefits under "nutritionist," "dietitian," or "complementary health practitioners." We provide detailed official receipts with all required information for your insurance claims.
				</p>
			</div>

			<div class="space-y-3">
				<h3 class="text-2xl font-bold text-charcoal flex items-center gap-3">
					<Receipt class="text-sage" size={28} />
					No Hidden Fees, No Surprises
				</h3>
				<p class="text-gray-700 leading-relaxed pl-11">
					The price you see is what you pay. No surprise charges, no upsells, no hidden costs. Payment is due at time of service. Packages must be paid in full upfront. Just honest, transparent pricing so you can make an informed decision.
				</p>
			</div>
		</div>

		<!-- Savings Breakdown -->
		<div class="max-w-4xl mx-auto border-t border-gray-200 pt-12">
			<h3 class="text-2xl font-bold text-charcoal mb-8 text-center">
				Your Savings at a Glance
			</h3>
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<span class="text-gray-700">3-Session Package</span>
					<div class="flex items-baseline gap-2">
						<span class="text-3xl font-bold text-primary">$15</span>
						<span class="text-gray-600">total saved</span>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-gray-700">6-Session Package</span>
					<div class="flex items-baseline gap-2">
						<span class="text-3xl font-bold text-primary">$60</span>
						<span class="text-gray-600">total saved</span>
					</div>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-gray-700">3-Month Program (12 sessions)</span>
					<div class="flex items-baseline gap-2">
						<span class="text-3xl font-bold text-primary">$180</span>
						<span class="text-gray-600">total saved</span>
					</div>
				</div>
			</div>
			<p class="text-center text-gray-600 mt-8">
				Plus, the value of sustained support and accountability is priceless when it comes to achieving lasting health results.
			</p>
		</div>
	</div>
</section>

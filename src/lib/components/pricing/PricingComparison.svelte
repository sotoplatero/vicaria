<script lang="ts">
	import { Check, X } from '@lucide/svelte';
</script>

<section class="py-20 bg-gradient-to-br from-warm-white to-sage-light/10">
	<div class="container-custom">
		<div class="text-center mb-12">
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Compare All Plans
			</h2>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				Side-by-side comparison to help you choose the right level of support
			</p>
		</div>

		<!-- Mobile: Accordion Style -->
		<div class="lg:hidden space-y-4">
			{#each [
				{ name: 'Single Session', price: 85, pricePerSession: 85, sessions: 1, duration: '1 hour', emailSupport: false, adjustments: 0, testing: 'Basic', continuousSupport: false, mealPlanning: false, progressTracking: false },
				{ name: '3-Session', price: 240, pricePerSession: 80, sessions: 3, duration: '1-2 months', emailSupport: true, adjustments: '1-2', testing: true, continuousSupport: false, mealPlanning: false, progressTracking: 'Basic' },
				{ name: '6-Session', price: 450, pricePerSession: 75, sessions: 6, duration: '2-3 months', emailSupport: true, adjustments: '2-3', testing: true, continuousSupport: true, mealPlanning: true, progressTracking: true },
				{ name: '3-Month Program', price: 840, pricePerSession: 70, sessions: 12, duration: '3 months', emailSupport: true, adjustments: 'Unlimited', testing: 'Advanced', continuousSupport: 'Priority', mealPlanning: 'Detailed', progressTracking: 'Advanced' }
			] as plan}
				<div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
					<div class="mb-4 pb-4 border-b border-gray-200">
						<h3 class="text-xl font-bold text-charcoal">{plan.name}</h3>
						<div class="flex items-baseline gap-2 mt-2">
							<span class="text-3xl font-bold text-primary">${plan.price}</span>
							<span class="text-sm text-gray-600">CAD</span>
							<span class="text-sm text-gray-600">• ${plan.pricePerSession}/session</span>
						</div>
					</div>
					<div class="space-y-3 text-sm">
						<div class="flex justify-between">
							<span class="text-gray-600">Sessions:</span>
							<span class="font-semibold text-charcoal">{plan.sessions}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Duration:</span>
							<span class="font-semibold text-charcoal">{plan.duration}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Email support:</span>
							{#if plan.emailSupport}
								<Check class="text-primary" size={18} />
							{:else}
								<X class="text-gray-300" size={18} />
							{/if}
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Protocol adjustments:</span>
							<span class="font-semibold text-charcoal">{plan.adjustments || '—'}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Testing guidance:</span>
							<span class="font-semibold text-charcoal">{typeof plan.testing === 'string' ? plan.testing : (plan.testing ? '✓' : '—')}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Continuous support:</span>
							{#if typeof plan.continuousSupport === 'string'}
								<span class="font-semibold text-charcoal">{plan.continuousSupport}</span>
							{:else if plan.continuousSupport}
								<Check class="text-primary" size={18} />
							{:else}
								<X class="text-gray-300" size={18} />
							{/if}
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Custom meal planning:</span>
							{#if typeof plan.mealPlanning === 'string'}
								<span class="font-semibold text-charcoal">{plan.mealPlanning}</span>
							{:else if plan.mealPlanning}
								<Check class="text-primary" size={18} />
							{:else}
								<X class="text-gray-300" size={18} />
							{/if}
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Progress tracking:</span>
							{#if typeof plan.progressTracking === 'string'}
								<span class="font-semibold text-charcoal">{plan.progressTracking}</span>
							{:else if plan.progressTracking}
								<Check class="text-primary" size={18} />
							{:else}
								<X class="text-gray-300" size={18} />
							{/if}
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Insurance receipt:</span>
							<Check class="text-primary" size={18} />
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Desktop: Table -->
		<div class="hidden lg:block overflow-x-auto">
			<table class="w-full bg-white rounded-2xl overflow-hidden shadow-xl">
				<thead>
					<tr class="bg-gradient-to-r from-primary to-secondary text-white">
						<th class="px-6 py-4 text-left text-sm font-semibold">Feature</th>
						<th class="px-6 py-4 text-center text-sm font-semibold">Single Session</th>
						<th class="px-6 py-4 text-center text-sm font-semibold">3-Session</th>
						<th class="px-6 py-4 text-center text-sm font-semibold">6-Session</th>
						<th class="px-6 py-4 text-center text-sm font-semibold bg-accent/20">3-Month Program</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					<tr class="bg-warm-white">
						<td class="px-6 py-4 font-semibold text-charcoal">Total Price</td>
						<td class="px-6 py-4 text-center">
							<div class="text-2xl font-bold text-primary">$85</div>
							<div class="text-xs text-gray-600">CAD</div>
						</td>
						<td class="px-6 py-4 text-center">
							<div class="text-2xl font-bold text-primary">$240</div>
							<div class="text-xs text-gray-600">CAD</div>
						</td>
						<td class="px-6 py-4 text-center">
							<div class="text-2xl font-bold text-primary">$450</div>
							<div class="text-xs text-gray-600">CAD</div>
						</td>
						<td class="px-6 py-4 text-center bg-accent/5">
							<div class="text-2xl font-bold text-primary">$840</div>
							<div class="text-xs text-gray-600">CAD</div>
						</td>
					</tr>
					<tr>
						<td class="px-6 py-4 text-gray-700">Price per session</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal">$85</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal">$80</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal">$75</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal bg-accent/5">$70</td>
					</tr>
					<tr class="bg-warm-white">
						<td class="px-6 py-4 text-gray-700">Sessions included</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal">1</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal">3</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal">6</td>
						<td class="px-6 py-4 text-center font-semibold text-charcoal bg-accent/5">12</td>
					</tr>
					<tr>
						<td class="px-6 py-4 text-gray-700">Typical duration</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal">1 hour</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal">1-2 months</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal">2-3 months</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal bg-accent/5">3 months</td>
					</tr>
					<tr class="bg-warm-white">
						<td class="px-6 py-4 text-gray-700">Email support</td>
						<td class="px-6 py-4 text-center"><X class="text-gray-300 mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center bg-accent/5"><Check class="text-primary mx-auto" size={20} /></td>
					</tr>
					<tr>
						<td class="px-6 py-4 text-gray-700">Protocol adjustments</td>
						<td class="px-6 py-4 text-center text-sm text-gray-500">—</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal">1-2</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal">2-3</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal bg-accent/5 font-semibold">Unlimited</td>
					</tr>
					<tr class="bg-warm-white">
						<td class="px-6 py-4 text-gray-700">Testing guidance</td>
						<td class="px-6 py-4 text-center text-sm text-charcoal">Basic</td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center text-sm text-charcoal bg-accent/5 font-semibold">Advanced</td>
					</tr>
					<tr>
						<td class="px-6 py-4 text-gray-700">Continuous support</td>
						<td class="px-6 py-4 text-center"><X class="text-gray-300 mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><X class="text-gray-300 mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center text-sm text-charcoal bg-accent/5 font-semibold">Priority</td>
					</tr>
					<tr class="bg-warm-white">
						<td class="px-6 py-4 text-gray-700">Custom meal planning</td>
						<td class="px-6 py-4 text-center"><X class="text-gray-300 mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><X class="text-gray-300 mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center text-sm text-charcoal bg-accent/5 font-semibold">Detailed</td>
					</tr>
					<tr>
						<td class="px-6 py-4 text-gray-700">Progress tracking</td>
						<td class="px-6 py-4 text-center"><X class="text-gray-300 mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center text-sm text-charcoal">Basic</td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center text-sm text-charcoal bg-accent/5 font-semibold">Advanced</td>
					</tr>
					<tr class="bg-warm-white">
						<td class="px-6 py-4 text-gray-700">Insurance receipt</td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center"><Check class="text-primary mx-auto" size={20} /></td>
						<td class="px-6 py-4 text-center bg-accent/5"><Check class="text-primary mx-auto" size={20} /></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>

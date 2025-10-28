<script lang="ts">
	import { MapPin, ArrowRight } from '@lucide/svelte';

	interface Props {
		service: string;
		currentCity: string;
	}

	let { service, currentCity }: Props = $props();

	const locations = [
		{ name: 'Burlington', distance: '15 min' },
		{ name: 'Stoney Creek', distance: '20 min' },
		{ name: 'Ancaster', distance: '18 min' },
		{ name: 'Dundas', distance: '12 min' },
		{ name: 'Waterdown', distance: '22 min' }
	];
</script>

<section class="section-padding bg-warm-white">
	<div class="container-custom">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-12 space-y-4">
				<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm">
					<MapPin class="text-primary" size={16} />
					<span class="text-sm font-medium text-primary">Serving Nearby Areas</span>
				</div>

				<h2 class="text-3xl md:text-4xl font-bold text-charcoal">
					{service} in Other Hamilton Areas
				</h2>
				<p class="text-lg text-gray-600">
					We proudly serve clients throughout the Greater Hamilton Area
				</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each locations as location}
					<div class="group bg-white rounded-xl p-6 hover-lift border border-gray-100 transition-all">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
									<MapPin class="text-primary group-hover:text-white transition-colors" size={20} />
								</div>
								<div>
									<div class="font-bold text-charcoal group-hover:text-primary transition-colors">
										{location.name}
									</div>
									<div class="text-sm text-gray-500">{location.distance} from {currentCity}</div>
								</div>
							</div>
							<ArrowRight class="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" size={18} />
						</div>
					</div>
				{/each}
			</div>

			<!-- Service Area Info -->
			<div class="mt-12 glass rounded-2xl p-8 border border-gray-200">
				<div class="flex flex-col md:flex-row items-start gap-6">
					<div class="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
						<MapPin class="text-primary" size={28} />
					</div>
					<div class="flex-1">
						<h3 class="font-bold text-xl text-charcoal mb-2">Convenient for All Hamilton Residents</h3>
						<p class="text-gray-700 leading-relaxed mb-4">
							Located at Unit 2B 144 James St S in downtown Hamilton, we're easily accessible from all surrounding neighborhoods. Virtual consultations also available for your convenience.
						</p>
						<div class="flex flex-wrap gap-3">
							<span class="badge badge-primary badge-lg">In-Person Visits</span>
							<span class="badge badge-outline badge-lg">Virtual Consultations</span>
							<span class="badge badge-outline badge-lg">Free Parking Available</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

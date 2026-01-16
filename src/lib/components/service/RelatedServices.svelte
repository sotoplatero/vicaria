<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";
	import type { ServiceMetadata } from "$lib/utils/services";
	import { Activity, Heart, Users, Droplets, Sparkles } from "@lucide/svelte";

	interface Props {
		services: ServiceMetadata[];
	}

	let { services }: Props = $props();

	const iconMap: Record<string, any> = {
		activity: Activity,
		heart: Heart,
		users: Users,
		droplets: Droplets,
		sparkles: Sparkles,
	};
</script>

<section class="section-padding bg-base-200">
	<div class="container-custom">
		<div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
			<h2 class="text-3xl md:text-4xl font-bold text-charcoal">
				Other Services We Offer
			</h2>
			<p class="text-lg text-gray-600">
				Comprehensive health solutions tailored to your needs
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			{#each services as service}
				{@const IconComponent = iconMap[service.cardIcon] || Activity}
				<a
					href="/service/{service.slug}"
					class="group bg-white rounded-2xl p-6 hover-lift border border-gray-100 transition-all"
				>
					<div class="space-y-4">
						<!-- Icon -->
						<div
							class="w-14 h-14 rounded-xl bg-{service.cardColor}/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all"
						>
							<IconComponent
								class="text-{service.cardColor}"
								size={28}
							/>
						</div>

						<!-- Title -->
						<h3
							class="text-xl font-bold text-charcoal group-hover:text-{service.cardColor} transition-colors"
						>
							{service.service}
						</h3>

						<!-- Pain Point -->
						<p
							class="text-sm text-gray-600 leading-relaxed line-clamp-2"
						>
							{service.pain}
						</p>

						<!-- CTA -->
						<div
							class="flex items-center gap-2 text-{service.cardColor} font-semibold text-sm group-hover:gap-3 transition-all"
						>
							Learn More
							<ArrowRight
								size={16}
								class="group-hover:translate-x-1 transition-transform"
							/>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div class="text-center mt-12">
			<a
				href="/service"
				class="btn btn-outline btn-primary btn-lg hover:bg-primary hover:text-white transition-all"
			>
				View All Services
			</a>
		</div>
	</div>
</section>

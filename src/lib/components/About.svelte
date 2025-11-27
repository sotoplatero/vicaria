<script lang="ts">
	import { Award, Heart, Users, Globe, Check, ArrowRight, Stethoscope, GraduationCap } from '@lucide/svelte';

	const credentials = [
		{ icon: Stethoscope, title: '40+ Years', subtitle: 'Medical Experience' },
		{ icon: GraduationCap, title: 'IIN Certified', subtitle: 'Health Coaches' },
		{ icon: Users, title: 'Integrative', subtitle: 'Approach' },
		{ icon: Globe, title: 'Bilingual', subtitle: 'EN • ES' }
	];

	const values = [
		{
			title: 'Medical Expertise',
			description: 'Two medical doctors with decades of clinical experience in multiple specialties.'
		},
		{
			title: 'Cultural Understanding',
			description: 'Culturally sensitive care for the Hispanic community, in your preferred language.'
		},
		{
			title: 'Personal Experience',
			description: 'We understand healthcare challenges firsthand, from both sides of the exam table.'
		},
		{
			title: 'Holistic Coaching',
			description: 'Combining medical knowledge with integrative nutrition for lasting wellness.'
		}
	];
</script>

<section id="about" class="section-padding bg-gradient-to-b from-base-200 to-warm-white relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
	<div class="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-24 space-y-6">
			<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm">
				<Heart class="text-primary" size={16} />
				<span class="text-sm font-medium text-primary">About Us</span>
			</div>

			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight">
				Medical Expertise Meets
				<span class="text-primary block">Compassionate Coaching</span>
			</h2>
		</div>

		<!-- Main Content Grid -->
		<div class="max-w-7xl mx-auto mb-24">
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<!-- Image Column -->
				<div class="order-2 lg:order-1">
					<div class="relative">
						<!-- Main Image -->
						<div class="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
							<img
								src="/images/yamilet-and-maurin-at-vicaria.webp"
								alt="Dr. Yamilet Pina and Dr. Maurin Casella at Vicaria Health"
								class="w-full h-full object-cover"
							/>
							<!-- Gradient Overlay -->
							<div class="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>

							<!-- Names Overlay -->
							<div class="absolute bottom-0 left-0 right-0 p-8 text-white">
								<div class="space-y-2">
									<p class="text-2xl font-bold">Dr. Yamilet Pina & Dr. Maurin Casella</p>
									<p class="text-white/90">Medical Doctors & Health Coaches</p>
								</div>
							</div>
						</div>

						<!-- Floating Stats -->
						<!-- <div class="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl max-w-[250px] hover-lift">
							<div class="flex items-center gap-4">
								<div class="text-5xl">🏆</div>
								<div>
									<div class="font-bold text-lg text-primary">Top Rated</div>
									<div class="text-sm text-gray-600">Hamilton Health Coach</div>
									<div class="text-xs text-gray-500 mt-1">2024</div>
								</div>
							</div>
						</div> -->

						<!-- Decorative elements -->
						<div class="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
						<div class="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/15 rounded-full blur-2xl"></div>
					</div>
				</div>

				<!-- Content Column -->
				<div class="order-1 lg:order-2 space-y-8">
					<div class="space-y-6">
						<h3 class="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
							<span class="text-primary">Dr. Yamilet Pina</span> & <span class="text-primary">Dr. Maurin Casella</span>
						</h3>

						<div class="prose prose-lg max-w-none space-y-4">
							<p class="text-xl text-gray-700 leading-relaxed">
								Two medical doctors with over 40 years of combined experience now focus on what matters most: empowering you to take control of your health.
							</p>

							<p class="text-lg text-gray-600 leading-relaxed">
								With backgrounds in Integrative Medicine, Urology, General Medicine, and Pathology, they blend deep clinical knowledge with holistic strategies. Certified by the Institute for Integrative Nutrition (IIN) in New York, they bring both science and empathy to every session.
							</p>
<!-- 
							<p class="text-lg text-gray-600 leading-relaxed">
								At <strong class="text-charcoal">Vicaria Health</strong>, we bridge the gap between conventional medicine and lifestyle transformation. Whether you're navigating chronic disease, recovering from treatment, or simply want to feel better in your own body we meet you where you are. Bilingual care (English • Spanish), especially for the Hispanic community in Hamilton and across Ontario.
							</p> -->

						</div>
					</div>

					<!-- Key Points -->
					<div class="space-y-4">
						{#each ['40+ years medical experience', 'IIN Certified Health Coaches', 'Bilingual care (EN • ES)', 'Focus on Hispanic community'] as point}
							<div class="flex items-center gap-4 group">
								<div class="flex-shrink-0 size-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
									<Check class="text-primary group-hover:text-white" size={16} />
								</div>
								<span class="text-lg text-gray-700 font-medium">{point}</span>
							</div>
						{/each}
					</div>

					<!-- CTA -->
					<div class="pt-6 flex flex-wrap gap-4">
					<a
							href="/about"
							class="btn btn-outline btn-lg"
						>
							More About Us
						</a>
					</div>
				</div>
			</div>
		</div>


	</div>
</section>

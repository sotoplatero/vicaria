<script lang="ts">
	import { Heart, Check, ArrowRight, GraduationCap, Stethoscope, Users, Globe } from '@lucide/svelte';
	import Header from '$lib/components/Header.svelte';

	const doctors = [
		{
			name: 'Dr. Yamilet Pina',
			photo: '/images/yamilet-pina.webp',
			specialties: ['Integrative Medicine', 'Urology', 'Health Coaching'],
			background: 'Medical doctor with over 20 years of experience in Integrative General Medicine and Urology. Graduated as a Health Coach from the Institute for Integrative Nutrition (IIN) in New York.',
			journey: 'After moving to Canada in 2021, Dr. Pina experienced firsthand the communication challenges that non-native English speakers face in healthcare. This inspired her passion for helping people navigate the healthcare system and find their path to a fulfilling and healthy life.'
		},
		{
			name: 'Dr. Maurin Casella',
			photo: '/images/maurin-casella.webp',
			specialties: ['General Medicine', 'Pathology', 'Health Coaching'],
			background: 'Medical doctor with over 20 years of experience in General Medicine and Pathology. Graduated as a Health Coach from the Institute for Integrative Nutrition (IIN) in New York.',
			journey: 'After undergoing surgery that resulted in kidney loss, Dr. Casella experienced a profound personal transformation through lifestyle and nutrition changes. This inspired her to help others achieve better health through preventive care.'
		}
	];

	const credentials = [
		{ icon: Stethoscope, title: '40+ Years', subtitle: 'Combined Medical Experience' },
		{ icon: GraduationCap, title: 'IIN Certified', subtitle: 'Health Coaches from New York' },
		{ icon: Users, title: 'Integrative', subtitle: 'Medical + Holistic Approach' },
		{ icon: Globe, title: 'Bilingual', subtitle: 'English • Spanish' }
	];
</script>

<svelte:head>
	<title>About Us - Vicaria Health | Hamilton Health Coaches</title>
	<meta name="description" content="Meet Dr. Yamilet Pina and Dr. Maurin Casella - two medical doctors with 40+ years combined experience offering bilingual health coaching in Hamilton, Ontario." />
</svelte:head>

<!-- Hero Section -->
<section class="pt-32 pb-20 bg-gradient-to-br from-warm-white via-blush/10 to-sage-light/10 relative overflow-hidden">
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"></div>
	</div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm">
				<Heart class="text-primary" size={18} />
				<span class="text-sm font-medium text-primary">About Us</span>
			</div>

			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight tracking-tight">
				Two Doctors, <span class="text-primary block">One Mission</span>
			</h1>

			<p class="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
				40+ years of combined medical experience, now dedicated to empowering your health journey through personalized coaching.
			</p>
		</div>
	</div>
</section>

<!-- Meet the Doctors -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="max-w-7xl mx-auto space-y-20">
			{#each doctors as doctor, index}
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<!-- Image -->
					<div class="relative" class:lg:order-2={index % 2 === 1}>
						<div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
							<img
								src={doctor.photo}
								alt={doctor.name}
								class="w-full h-full object-cover"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
							<div class="absolute bottom-0 left-0 right-0 p-8 text-white">
								<h2 class="text-3xl font-bold mb-2">{doctor.name}</h2>
								<div class="flex flex-wrap gap-2">
									{#each doctor.specialties as specialty}
										<span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
											{specialty}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>

					<!-- Content -->
					<div class="space-y-6" class:lg:order-1={index % 2 === 1}>
						<div class="space-y-4">
							<p class="text-lg text-gray-700 leading-relaxed">
								{doctor.background}
							</p>

							<div class="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
								<p class="text-gray-700 leading-relaxed">
									{doctor.journey}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Credentials -->
<section class="section-padding bg-gradient-to-b from-white to-warm-white">
	<div class="container-custom">
		<div class="max-w-6xl mx-auto space-y-12">
			<div class="text-center max-w-3xl mx-auto">
				<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
					Why Choose Vicaria Health
				</h2>
				<p class="text-xl text-gray-600">
					Medical expertise meets compassionate, culturally sensitive care
				</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each credentials as credential}
					{@const Icon = credential.icon}
					<div class="group bg-white rounded-2xl p-8 hover-lift border border-gray-100 shadow-sm">
						<div class="space-y-4">
							<div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all">
								<Icon class="text-primary" size={32} />
							</div>
							<div>
								<div class="font-bold text-xl text-charcoal mb-1">{credential.title}</div>
								<div class="text-sm text-gray-600">{credential.subtitle}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Mission Statement -->
<section class="section-padding bg-warm-white">
	<div class="container-custom">
		<div class="max-w-5xl mx-auto">
			<div class="relative bg-primary rounded-3xl overflow-hidden shadow-2xl">
				<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

				<div class="relative z-10 p-12 md:p-16 text-center space-y-6">
					<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
						<Heart class="text-white" size={18} />
						<span class="text-sm font-medium text-white">Our Mission</span>
					</div>

					<h2 class="text-3xl md:text-4xl font-bold text-white leading-tight">
						Bridging Healthcare Gaps in Our Community
					</h2>

					<p class="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
						To empower individuals, especially in the Hispanic community, to take control of their health through personalized coaching. We combine medical expertise with integrative nutrition, bridge communication gaps, and guide our clients toward healthier, more fulfilling lives.
					</p>

					<div class="flex flex-wrap items-center justify-center gap-6 pt-4 text-white/90">
						<div class="flex items-center gap-2">
							<Check size={20} />
							<span>Medical Expertise</span>
						</div>
						<div class="flex items-center gap-2">
							<Check size={20} />
							<span>Bilingual Care</span>
						</div>
						<div class="flex items-center gap-2">
							<Check size={20} />
							<span>Cultural Sensitivity</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-gradient-to-b from-warm-white to-base-200">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
				Ready to Start Your <span class="text-primary">Health Journey?</span>
			</h2>

			<p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
				Schedule your free 15-minute consultation today and discover how personalized nutrition can transform your life.
			</p>

			<div class="flex flex-wrap items-center justify-center gap-4 pt-6">
				<a
					href="/#contact"
					class="btn btn-primary btn-lg text-lg px-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group border-0"
				>
					Book Free Consultation
					<ArrowRight class="transition-transform group-hover:translate-x-2" size={20} />
				</a>
				<a
					href="/"
					class="btn btn-outline btn-lg text-lg px-10 hover-lift"
				>
					Back to Home
				</a>
			</div>
		</div>
	</div>
</section>

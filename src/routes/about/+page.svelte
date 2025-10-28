<script lang="ts">
	import { Award, Heart, Users, Globe, Check, ArrowRight, Target, Eye, Lightbulb, Shield, GraduationCap, Stethoscope } from '@lucide/svelte';

	const doctors = [
		{
			name: 'Dr. Yamilet Pina',
			photo: '👩‍⚕️',
			specialties: ['Integrative Medicine', 'Urology', 'Health Coaching'],
			credentials: [
				'Medical Doctor',
				'IIN Certified Health Coach',
				'20+ years experience'
			],
			background: 'Medical doctor with over 20 years of experience in Integrative General Medicine and Urology in Cuba. Graduated as a Health Coach from the Institute for Integrative Nutrition (IIN) in New York.',
			journey: 'After moving to Canada in 2021, Dr. Pina experienced firsthand the communication challenges that non-native English speakers face in healthcare. This inspired her passion for helping people navigate the healthcare system and find their path to a fulfilling and healthy life.',
			focus: 'Bridging communication gaps and empowering Spanish-speaking clients to better understand and advocate for their health.'
		},
		{
			name: 'Dr. Maurin Casella',
			photo: '👨‍⚕️',
			specialties: ['General Medicine', 'Pathology', 'Health Coaching'],
			credentials: [
				'Medical Doctor',
				'IIN Certified Health Coach',
				'20+ years experience'
			],
			background: 'Medical doctor with over 20 years of experience in General Medicine and Pathology in Cuba. Graduated as a Health Coach from the Institute for Integrative Nutrition (IIN) in New York.',
			journey: 'After undergoing surgery that resulted in kidney loss, Dr. Casella experienced a profound personal transformation through lifestyle and nutrition changes. Observing that a high percentage of the population leads unhealthy lifestyles, she became passionate about helping others achieve better health through preventive care.',
			focus: 'Empowering clients with practical lifestyle and nutrition strategies for lasting wellness and disease prevention.'
		}
	];

	const credentials = [
		{ icon: Stethoscope, title: '40+ Years', subtitle: 'Combined Medical Experience', description: 'Decades of clinical practice in multiple medical specialties' },
		{ icon: GraduationCap, title: 'IIN Certified', subtitle: 'Health Coaches', description: 'Graduate training from Institute for Integrative Nutrition, New York' },
		{ icon: Heart, title: 'Integrative', subtitle: 'Approach', description: 'Combining medical expertise with holistic health coaching' },
		{ icon: Globe, title: 'Bilingual', subtitle: 'EN • ES', description: 'Accessible care for Hispanic and English-speaking communities' }
	];

	const values = [
		{
			icon: Heart,
			title: 'Compassionate Care',
			description: 'We understand the challenges of navigating healthcare, especially for non-native English speakers. Our approach centers on empathy, patience, and truly listening to your concerns.'
		},
		{
			icon: Users,
			title: 'Cultural Understanding',
			description: 'As members of the Hispanic community, we understand the unique cultural, linguistic, and health challenges our clients face. We provide culturally sensitive care that honors your background.'
		},
		{
			icon: Shield,
			title: 'Medical Expertise',
			description: 'With over 40 years of combined medical experience, we bring deep clinical knowledge to health coaching. We understand health from both conventional and integrative perspectives.'
		},
		{
			icon: Lightbulb,
			title: 'Lifestyle Transformation',
			description: 'We believe in the power of nutrition and lifestyle changes for lasting health. Our personal journeys and medical backgrounds uniquely position us to guide your transformation.'
		}
	];

	const approach = [
		{
			number: '01',
			title: 'Comprehensive Assessment',
			description: 'We begin with an in-depth consultation in your preferred language (English or Spanish). Understanding your health history, cultural background, and lifestyle is essential to creating your personalized plan.'
		},
		{
			number: '02',
			title: 'Personalized Health Coaching',
			description: 'Drawing from our medical backgrounds and integrative training, we develop a customized nutrition and lifestyle protocol. We help you communicate more effectively with your healthcare providers and make informed decisions.'
		},
		{
			number: '03',
			title: 'Ongoing Support',
			description: 'Health transformation takes time and support. We provide regular follow-ups, adjust your plan as needed, and empower you with the knowledge and tools to achieve lasting wellness.'
		}
	];

	const story = {
		mission: 'To empower individuals, especially in the Hispanic community, to take control of their health through personalized health coaching. We bridge communication gaps, combine medical expertise with integrative nutrition, and guide our clients toward healthier, more fulfilling lives.',
		vision: 'A community where everyone—regardless of language or cultural background—has access to compassionate, expert health coaching that empowers them to achieve optimal wellness and communicate effectively with their healthcare providers.',
		commitment: 'We are committed to serving our community with the same care and attention we give our own families. Having experienced healthcare challenges ourselves, we understand your struggles and are dedicated to being your advocates and partners in health.'
	};
</script>

<svelte:head>
	<title>About Us - Vicaria Health</title>
	<meta name="description" content="Learn about Vicaria Health's mission to provide personalized, evidence-based nutrition coaching in Hamilton. Meet our certified team and discover our values." />
</svelte:head>

<!-- Hero Section -->
<section class="section-padding bg-gradient-to-br from-primary via-primary-dark to-sage relative overflow-hidden min-h-[60vh] flex items-center">
	<!-- Decorative elements -->
	<div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
				<Heart class="text-white" size={18} />
				<span class="text-sm font-medium text-white">About Us</span>
			</div>

			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
				Meet Our <span class="block">Health Coaches</span>
			</h1>

			<p class="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
				Two medical doctors with over 40 years of combined experience, now dedicated to empowering you through integrative health coaching.
			</p>

			<div class="flex flex-wrap items-center justify-center gap-4 pt-6">
				<a
					href="#mission"
					class="btn btn-lg bg-white text-primary hover:bg-white/90 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
				>
					Our Mission
					<ArrowRight class="transition-transform group-hover:translate-x-2" size={20} />
				</a>
				<a
					href="#contact"
					class="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary hover:border-white transition-all"
				>
					Get Started
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Meet Our Doctors -->
<section class="section-padding bg-warm-white relative overflow-hidden">
	<div class="container-custom">
		<div class="max-w-7xl mx-auto space-y-20">
			{#each doctors as doctor, index}
				<div class="grid lg:grid-cols-2 gap-16 items-center" class:lg:flex-row-reverse={index % 2 === 1}>
					<!-- Image Column -->
					<div class="relative" class:lg:order-2={index % 2 === 1}>
						<div class="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
							<div class="absolute inset-0 bg-gradient-to-br from-sage via-primary to-primary-dark flex items-center justify-center p-12">
								<div class="text-center space-y-6 text-white">
									<div class="w-40 h-40 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
										<span class="text-8xl">{doctor.photo}</span>
									</div>
									<div class="space-y-3">
										<p class="text-3xl font-bold">{doctor.name}</p>
										<div class="space-y-2">
											{#each doctor.specialties as specialty}
												<p class="text-white/90 text-sm">{specialty}</p>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Decorative elements -->
						<div class="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
						<div class="absolute -bottom-12 -right-12 w-40 h-40 bg-primary/15 rounded-full blur-2xl"></div>
					</div>

					<!-- Content Column -->
					<div class="space-y-8" class:lg:order-1={index % 2 === 1}>
						<div class="space-y-6">
							<div>
								<h2 class="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
									{doctor.name}
								</h2>
								<div class="flex flex-wrap gap-3">
									{#each doctor.credentials as credential}
										<span class="glass px-4 py-2 rounded-full text-sm font-medium text-primary">
											{credential}
										</span>
									{/each}
								</div>
							</div>

							<div class="space-y-4">
								<div class="prose prose-lg max-w-none">
									<p class="text-lg text-gray-700 leading-relaxed">
										{doctor.background}
									</p>
								</div>

								<!-- Personal Journey -->
								<div class="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
									<h4 class="font-bold text-lg text-charcoal mb-3 flex items-center gap-2">
										<Heart class="text-primary" size={20} />
										Personal Journey
									</h4>
									<p class="text-gray-600 leading-relaxed">
										{doctor.journey}
									</p>
								</div>

								<!-- Focus -->
								<div class="space-y-3">
									<h4 class="font-bold text-lg text-charcoal flex items-center gap-2">
										<Target class="text-primary" size={20} />
										Focus Area
									</h4>
									<p class="text-lg text-gray-700 leading-relaxed">
										{doctor.focus}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Credentials Grid -->
<section class="section-padding bg-gradient-to-b from-warm-white to-base-200">
	<div class="container-custom">
		<div class="max-w-6xl mx-auto space-y-16">
			<div class="text-center max-w-3xl mx-auto space-y-4">
				<h2 class="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
					Why Choose Vicaria Health
				</h2>
				<p class="text-xl text-gray-600">
					Medical expertise meets integrative health coaching for comprehensive, culturally sensitive care.
				</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each credentials as credential, index}
					<div class="group bg-white rounded-2xl p-8 hover-lift border border-gray-100" style="animation-delay: {index * 100}ms">
						<div class="space-y-5">
							<div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all">
								<svelte:component this={credential.icon} class="text-primary" size={32} />
							</div>
							<div>
								<div class="font-bold text-xl text-charcoal mb-1">{credential.title}</div>
								<div class="text-sm font-semibold text-primary mb-2">{credential.subtitle}</div>
								<div class="text-sm text-gray-500 leading-relaxed">{credential.description}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Mission, Vision, Values -->
<section id="mission" class="section-padding bg-base-200 relative overflow-hidden">
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<div class="max-w-6xl mx-auto space-y-16">
			<!-- Mission -->
			<div class="bg-gradient-to-br from-sage via-primary to-primary-dark rounded-3xl overflow-hidden shadow-2xl">
				<div class="relative">
					<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
					<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

					<div class="relative z-10 p-12 md:p-16 text-center">
						<div class="space-y-6">
							<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
								<Target class="text-white" size={18} />
								<span class="text-sm font-medium text-white">Our Mission</span>
							</div>

							<h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
								Empowering Health Through Personalized Nutrition
							</h2>

							<p class="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
								{story.mission}
							</p>

							<div class="flex flex-wrap items-center justify-center gap-8 pt-6 text-white/80 text-sm">
								<div class="flex items-center gap-2">
									<Check size={20} />
									<span>Evidence-Based</span>
								</div>
								<div class="flex items-center gap-2">
									<Check size={20} />
									<span>Compassionate</span>
								</div>
								<div class="flex items-center gap-2">
									<Check size={20} />
									<span>Effective</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Vision & Commitment -->
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Vision -->
				<div class="glass rounded-2xl p-10 space-y-5 hover-lift">
					<div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
						<Eye class="text-primary" size={28} />
					</div>
					<div class="space-y-3">
						<h3 class="text-2xl font-bold text-charcoal">Our Vision</h3>
						<p class="text-lg text-gray-600 leading-relaxed">
							{story.vision}
						</p>
					</div>
				</div>

				<!-- Commitment -->
				<div class="glass rounded-2xl p-10 space-y-5 hover-lift">
					<div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
						<Shield class="text-primary" size={28} />
					</div>
					<div class="space-y-3">
						<h3 class="text-2xl font-bold text-charcoal">Our Commitment</h3>
						<p class="text-lg text-gray-600 leading-relaxed">
							{story.commitment}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Core Values -->
<section class="section-padding bg-warm-white">
	<div class="container-custom">
		<div class="max-w-6xl mx-auto">
			<div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
				<!-- Header -->
				<div class="bg-gradient-to-r from-primary to-primary-dark p-12 text-center">
					<h2 class="text-4xl md:text-5xl font-bold text-white mb-3">Our Core Values</h2>
					<p class="text-white/90 text-lg">The principles that guide every decision we make</p>
				</div>

				<!-- Values Grid -->
				<div class="p-8 md:p-12">
					<div class="grid md:grid-cols-2 gap-10">
						{#each values as value, index}
							<div class="flex gap-5 group" style="animation-delay: {index * 100}ms">
								<div class="flex-shrink-0">
									<div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
										<svelte:component this={value.icon} class="text-primary group-hover:text-white" size={26} />
									</div>
								</div>
								<div class="space-y-3">
									<h3 class="font-bold text-2xl text-charcoal group-hover:text-primary transition-colors">
										{value.title}
									</h3>
									<p class="text-gray-600 leading-relaxed text-lg">{value.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Approach -->
<section class="section-padding bg-gradient-to-b from-warm-white to-base-200">
	<div class="container-custom">
		<div class="max-w-6xl mx-auto space-y-16">
			<div class="text-center max-w-3xl mx-auto space-y-4">
				<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm">
					<Lightbulb class="text-primary" size={16} />
					<span class="text-sm font-medium text-primary">Our Approach</span>
				</div>

				<h2 class="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
					How We Work With You
				</h2>
				<p class="text-xl text-gray-600">
					A proven three-step process for lasting health transformation.
				</p>
			</div>

			<div class="grid lg:grid-cols-3 gap-8">
				{#each approach as step, index}
					<div class="relative group" style="animation-delay: {index * 150}ms">
						<div class="glass rounded-2xl p-10 h-full hover-lift">
							<!-- Number -->
							<div class="text-6xl font-bold text-primary/20 mb-6 group-hover:text-primary/30 transition-colors">
								{step.number}
							</div>

							<!-- Content -->
							<div class="space-y-4">
								<h3 class="text-2xl font-bold text-charcoal group-hover:text-primary transition-colors">
									{step.title}
								</h3>
								<p class="text-lg text-gray-600 leading-relaxed">
									{step.description}
								</p>
							</div>
						</div>

						<!-- Connector Arrow (desktop only) -->
						{#if index < approach.length - 1}
							<div class="hidden lg:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-20">
								<ArrowRight class="text-primary/30" size={32} />
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-base-200 relative overflow-hidden">
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
		<div class="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
	</div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
				Ready to Start Your <span class="text-primary">Health Journey?</span>
			</h2>

			<p class="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
				Schedule your free 15-minute consultation today and discover how personalized nutrition can transform your life.
			</p>

			<div class="flex flex-wrap items-center justify-center gap-4 pt-6">
				<a
					href="#contact"
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

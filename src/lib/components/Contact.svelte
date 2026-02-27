<script lang="ts">
	import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from '@lucide/svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import { faqs } from '$lib/data/faqs';

	const contactInfo = [
		{
			icon: MapPin,
			title: 'Visit Us',
			content: 'Unit 2B 144 James St S',
			subcontent: 'Hamilton, Ontario, L8P3A2',
			link: 'https://maps.google.com/?q=Unit+2B+144+James+St+S+Hamilton+Ontario+L8P3A2',
			external: true
		},
		{
			icon: Phone,
			title: 'Call Us',
			content: '+1 (365) 336-9757',
			subcontent: 'Monday - Friday, 9am-6pm',
			link: 'tel:+13653369757',
			external: false
		},
		{
			icon: Mail,
			title: 'Email Us',
			content: '[email protected]',
			subcontent: 'We reply within 24 hours',
			link: 'mailto:[email protected]',
			external: false
		},
		{
			icon: Clock,
			title: 'Business Hours',
			content: 'Mon-Fri: 9am - 6pm',
			subcontent: 'Weekend by appointment',
			link: null,
			external: false
		}
	];

	// Replace with your actual Cal.com username
	const calComUsername = 'your-calcom-username';
</script>

<section id="contact" class="section-padding bg-gradient-to-b from-warm-white to-base-200 relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

	<div class="container-custom relative z-10">
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-24 space-y-6">
			<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm">
				<Calendar class="text-secondary" size={16} />
				<span class="text-sm font-medium text-secondary">Get In Touch</span>
			</div>

			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight">
				Ready to Transform
				<span class="text-secondary block">Your Health?</span>
			</h2>

			<p class="text-xl text-gray-600 leading-relaxed font-light">
				Book your free 15-minute consultation or reach out with any questions. We're here to help you every step of the way.
			</p>
		</div>

		<!-- Main Grid -->
		<div class="max-w-7xl mx-auto">
			<div class="grid lg:grid-cols-5 gap-12">
				<!-- Contact Info Column -->
				<div class="lg:col-span-2 space-y-6">
					<!-- Contact Cards -->
					<div class="space-y-4">
						{#each contactInfo as info, index}
							{@const Icon = info.icon}
							<div class="group bg-white rounded-2xl p-6 hover-lift border border-gray-100" style="animation-delay: {index * 100}ms">
								<div class="flex items-start gap-4">
									<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all">
										<Icon class="text-primary group-hover:text-white transition-colors" size={24} />
									</div>
									<div class="flex-1 min-w-0">
										<h3 class="font-bold text-lg text-charcoal mb-1">{info.title}</h3>
										{#if info.link}
											<a
												href={info.link}
												target={info.external ? '_blank' : undefined}
												rel={info.external ? 'noopener noreferrer' : undefined}
												class="text-gray-700 hover:text-primary transition-colors font-medium block truncate"
											>
												{info.content}
											</a>
										{:else}
											<p class="text-gray-700 font-medium">{info.content}</p>
										{/if}
										<p class="text-sm text-gray-500 mt-1">{info.subcontent}</p>
									</div>
								</div>
							</div>
						{/each}
					</div>

					<!-- Map -->
					<div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
						<div class="aspect-video">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1234567890!2d-79.8711!3d43.2557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE1JzIwLjUiTiA3OcKwNTInMTYuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
								width="100%"
								height="100%"
								style="border:0;"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
								title="Vicaria Health Location"
							></iframe>
						</div>
					</div>

					<!-- Trust Badge -->
					<div class="bg-green-50 border border-green-200 rounded-2xl p-6">
						<div class="flex gap-3">
							<div class="flex-shrink-0">
								<svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
							</div>
							<div class="flex-1">
								<div class="font-bold text-green-900 mb-1">Free, No-Commitment Consultation</div>
								<p class="text-sm text-green-700">Learn how we can help you achieve your health goals. No credit card required.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Booking Column -->
				<div class="lg:col-span-3">
					<div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
						<!-- Header -->
						<div class="bg-gradient-to-r from-primary to-secondary p-8 text-center">
							<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
								<Calendar class="text-white" size={18} />
								<span class="text-sm font-medium text-white">Book Now</span>
							</div>
							<h3 class="text-3xl font-bold text-white mb-2">
								Schedule Your Free Consultation
							</h3>
							<p class="text-white/90">Choose a time that works for you. Real-time availability.</p>
						</div>

						<!-- Cal.com Embed -->
						<div class="p-8">
							<div class="bg-gray-50 rounded-2xl p-8 min-h-[500px]">
								<!-- Cal.com inline embed -->
								<div
									class="cal-inline-embed"
									data-cal-link="{calComUsername}/15min"
									data-cal-config={JSON.stringify({ layout: 'month_view', theme: 'light' })}
								></div>

								<!-- Fallback -->
								<div class="text-center space-y-8 py-12">
									<div class="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-xl">
										<Calendar class="text-white" size={40} />
									</div>

									<div class="space-y-3">
										<h4 class="text-2xl font-bold text-charcoal">Online Booking</h4>
										<p class="text-gray-600 max-w-md mx-auto">
											To enable instant booking, add your Cal.com username to the
											<code class="bg-gray-200 px-2 py-1 rounded text-sm">calComUsername</code>
											variable in Contact.svelte.
										</p>
									</div>

									<div class="divider">OR CONTACT US DIRECTLY</div>

									<div class="flex flex-col sm:flex-row gap-4 justify-center">
										<a
											href="tel:+13653369757"
											class="btn btn-primary btn-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group border-0"
										>
											<Phone size={20} />
											Call Now
										</a>
										<a
											href="mailto:[email protected]"
											class="btn btn-outline btn-lg hover:bg-primary hover:text-white hover:border-primary transition-all group"
										>
											<Mail size={20} />
											Send Email
										</a>
									</div>
								</div>
							</div>

							<!-- Privacy Note -->
							<div class="mt-6 flex items-center gap-3 text-sm text-gray-500">
								<svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
								</svg>
								<span>Your information is secure and will never be shared. Read our <a href="#" class="text-primary hover:underline">Privacy Policy</a>.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="mt-24">
			<FAQ {faqs} />
		</div>
	</div>
</section>

<svelte:head>
	<!-- Cal.com embed script -->
	<!-- Uncomment when ready to use Cal.com -->
	<!-- <script src="https://app.cal.com/embed/embed.js"></script> -->
</svelte:head>

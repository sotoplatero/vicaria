<script lang="ts">
	import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from '@lucide/svelte';
	import { getHealthCoachingServices, getSkinTreatmentServices } from '$lib/utils/services';

	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Services', href: '/#services' },
		{ label: 'How It Works', href: '/#how-it-works' },
		{ label: 'About', href: '/#about' },
		{ label: 'Contact', href: '/#contact' }
	];

	const healthCoachingServices = getHealthCoachingServices();
	const skinTreatmentServices = getSkinTreatmentServices();

	const socialLinks = [
		{ icon: Facebook, href: 'https://facebook.com/vicariahealth', label: 'Facebook' },
		{ icon: Instagram, href: 'https://instagram.com/vicariahealth', label: 'Instagram' },
		{ icon: Linkedin, href: 'https://linkedin.com/company/vicariahealth', label: 'LinkedIn' }
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer class="bg-gradient-to-b from-charcoal to-base-content text-gray-100 relative overflow-hidden">
	<!-- Decorative background -->
	<div class="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

	<div class="relative z-10">
		<!-- Main Footer -->
		<div class="container-custom py-20">
			<div class="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
				<!-- Brand Column -->
				<div class="lg:col-span-2 space-y-6">
					<div>
						<div class="text-lg flex items-center gap-3">
							<img
								src="/logo.jpg"
								alt="Vicaria Health"
								class="h-10 w-auto "
							/>
							<div>
								<p class="text-lg font-bold">Vicaria Health</p>
								<p class="text-sm text-white/60">Making your life healthier</p>
							</div>
						</div>
					</div>

					<p class="text-gray-300 leading-relaxed">
						Evidence-based nutrition coaching and wellness services in downtown Hamilton. Personalized care for digestive health, chronic conditions, and skin treatments.
					</p>

					<!-- Contact Info -->
					<div class="space-y-3">
						<a
							href="https://maps.google.com/?q=Unit+2B+144+James+St+S+Hamilton+Ontario+L8P3A2"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-start gap-3 text-gray-200 hover:text-primary transition-colors group"
						>
							<MapPin class="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={16} />
							<span class="text-sm leading-relaxed">
								Unit 2B 144 James St S, Hamilton, ON L8P3A2
							</span>
						</a>
						<a
							href="tel:+13653369757"
							class="flex items-center gap-3 text-gray-200 hover:text-primary transition-colors group"
						>
							<Phone class="flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
							<span class="text-sm">+1 (365) 336-9757</span>
						</a>
				</div>

					<!-- Social Links -->
					<div class="flex gap-3">
						{#each socialLinks as social}
							{@const Icon = social.icon}
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								class="w-10 h-10 rounded-xl border border-gray-600 hover:border-primary flex items-center justify-center hover:scale-110 hover:bg-primary/20 transition-all group"
								aria-label={social.label}
							>
								<Icon class="text-gray-200 group-hover:text-primary transition-colors" size={18} />
							</a>
						{/each}
					</div>
				</div>

				<!-- Health Coaching Services -->
				<div>
					<h3 class="font-bold text-lg text-white mb-6">Health Coaching</h3>
					<ul class="space-y-3">
						{#each healthCoachingServices as service}
							<li>
								<a
									href="/service/{service.slug}"
									class="text-gray-200 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
								>
									<span class="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-primary transition-colors"></span>
									{service.service}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Skin Treatments -->
				<div>
					<h3 class="font-bold text-lg text-white mb-6">Skin Treatments</h3>
					<ul class="space-y-3">
						{#each skinTreatmentServices as service}
							<li>
								<a
									href="/service/{service.slug}"
									class="text-gray-200 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
								>
									<span class="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-primary transition-colors"></span>
									{service.service}
								</a>
							</li>
						{/each}
					</ul>

					<!-- Business Hours -->
					<div class="mt-8 rounded-xl p-4 border border-gray-600">
						<h4 class="font-semibold text-sm text-white mb-2">Business Hours</h4>
						<p class="text-xs text-gray-200">
							Mon-Fri: 9:00 AM - 6:00 PM<br />
							Weekend: By Appointment
						</p>
					</div>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="font-bold text-lg text-white mb-6">Quick Links</h3>
					<ul class="space-y-3">
						{#each quickLinks as link}
							<li>
								<a
									href={link.href}
									class="text-gray-200 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
								>
									<span class="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-primary transition-colors"></span>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>

					<!-- Areas Served -->
					<div class="mt-8">
						<h4 class="font-semibold text-sm text-white mb-3">Areas Served</h4>
						<p class="text-xs text-gray-200 leading-relaxed">
							Hamilton, Dundas, Ancaster, Waterdown, Stoney Creek, Binbrook, Burlington
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Map Section -->
		<div class="border-t border-gray-700">
			<div class="container-custom py-16">
				<div class="text-center mb-8">
					<h3 class="text-2xl md:text-3xl font-bold text-white mb-3">Visit Us</h3>
					<p class="text-gray-300">
						<a
							href="https://maps.google.com/?q=Unit+2B+144+James+St+S+Hamilton+Ontario+L8P3A2"
							target="_blank"
							rel="noopener noreferrer"
							class="hover:text-primary transition-colors"
						>
							Unit 2B 144 James St S, Hamilton, ON L8P3A2
						</a>
					</p>
				</div>
				<div class="rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5811.898303524444!2d-79.87372472338556!3d43.252487478254764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9bda3f116e59%3A0x320d69e3f91d430a!2sVicaria%20Health!5e0!3m2!1sen!2sca!4v1762773312315!5m2!1sen!2sca"
						width="100%"
						height="450"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Vicaria Health Location Map"
						class="w-full"
					></iframe>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-gray-700">
			<div class="container-custom py-6">
				<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
					<!-- Copyright -->
					<p class="text-gray-300 text-center md:text-left">
						© {currentYear} Vicaria Health. All rights reserved.
					</p>

					<!-- Legal Links -->
					<div class="flex flex-wrap gap-6 justify-center text-gray-300 text-xs">
						<a href="/privacy" class="hover:text-primary transition-colors">Privacy Policy</a>
						<a href="/terms" class="hover:text-primary transition-colors">Terms of Service</a>
						<a href="/accessibility" class="hover:text-primary transition-colors">Accessibility</a>
					</div>
				</div>

				<!-- Disclaimer -->
				<div class="mt-6 pt-6 ">
					<p class="text-xs text-gray-400 text-center max-w-4xl mx-auto leading-relaxed">
						<strong class="text-gray-300">Disclaimer:</strong> The services provided by Vicaria Health are for educational and coaching purposes only and do not replace medical advice, diagnosis, or treatment. Always consult with your physician or qualified healthcare provider before making changes to your diet, medication, or treatment plan. Our coaching complements but does not substitute professional medical care.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll to Top Button -->
	<button
		onclick={scrollToTop}
		class="fixed bottom-8 right-8 btn btn-circle btn-primary shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all z-40 border-0"
		aria-label="Scroll to top"
	>
		<ArrowUp size={24} />
	</button>
</footer>

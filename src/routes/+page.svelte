<script>
	import { Target, Globe, Star, Home, Phone, Mail, MapPin, Check, Calendar } from 'lucide-svelte';
	import GoogleReviews from '$lib/components/GoogleReviews.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Comparison from '$lib/components/Comparison.svelte';

	let { data } = $props();
</script>

<!-- Hero Section -->
<section class="min-h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10">
	<div class="container mx-auto px-4 py-20">
		<div class="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
			<!-- Left Content -->
			<div class="flex-1 text-center lg:text-left">
				<p class="text-lg mb-6 text-primary font-semibold tracking-wide uppercase">
					Making your life healthier
				</p>
				<h1 class="text-5xl md:text-6xl lg:text-7xl font-light leading-snug mb-6 tracking-tight">
					Health Coaching in Hamilton
				</h1>
				<p class="text-lg md:text-xl mb-8 text-base-content/70 leading-snug">
					Personalized support for chronic conditions from experienced health professionals.
					Bilingual care serving Hamilton, Burlington, Oakville, and Stoney Creek.
				</p>
				<div class="flex flex-col items-center lg:items-start gap-2 mb-10">
					<a
						href="tel:+13653369757"
						class="btn btn-primary btn-xl hover:scale-105 transition-transform"
						><Calendar class="text-white/80 "/> Book Your Free Consultation</a
					>
					<span class="text-sm text-base-content/60">No credit card required</span>
				</div>

				<!-- Trust Indicators -->
				<div class="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
					<div class="flex items-center gap-2">
						<div class="badge badge-primary badge-sm badge-soft"> <Check class="size-4"/> Bilingual Team </div>
					</div>
					<div class="flex items-center gap-2">
						<div class="badge badge-primary badge-sm"></div>
						<span class="text-base-content/70">20+ Years Experience</span>
					</div>
					<div class="flex items-center gap-2">
						<div class="badge badge-primary badge-sm"></div>
						<span class="text-base-content/70">In-Home Visits</span>
					</div>
				</div>
			</div>

			<!-- Right Side - Doctors Images -->
			<div class="flex-1 relative">
				<div class="relative max-w-lg mx-auto">
					<!-- Main Image Container -->
					<div class="relative aspect-[4/5] flex items-end justify-center">
						<!-- Placeholder for doctors image -->
						<div class="text-center p-8">
							<div class="text-6xl mb-4">👩‍⚕️👩‍⚕️</div>
							<p class="text-lg font-semibold text-base-content/70">Our Expert Team</p>
							<p class="text-sm text-base-content/50 mt-2">
								Replace with doctors.webp (transparent background)
							</p>
						</div>
						<!-- When you have the image, replace the div above with:
						<img
							src="/images/doctors.webp"
							alt="Vicaria Health Doctors"
							class="w-full h-auto object-contain drop-shadow-2xl"
							style="filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));"
						/>
						-->
					</div>

					<!-- Floating Card -->
					<div
						class="absolute -bottom-6 -right-6 bg-base-100 rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block z-20 backdrop-blur-sm bg-base-100/95"
					>
						<div class="flex items-center gap-3 mb-2">
							<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
								<Star class="w-6 h-6 text-primary fill-primary" />
							</div>
							<div>
								<p class="font-bold text-2xl">4.9</p>
								<p class="text-sm text-base-content/60">Google Rating</p>
							</div>
						</div>
						<p class="text-xs text-base-content/70">Trusted by Hamilton families</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Healthcare Comparison Section -->
<Comparison />

<!-- Our Services -->
<section id="services" class="py-32 bg-base-100">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="text-center mb-20">
			<p class="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
				What We Offer
			</p>
			<h2 class="text-5xl font-light mb-4">Comprehensive Care for Your Wellness Journey</h2>
		</div>

		<div class="space-y-24">
			<!-- Health Coaching -->
			<div class="flex flex-col md:flex-row gap-12 items-center group">
				<div class="md:w-1/2">
					<div
						class="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow"
					>
						<div class="w-full h-full flex items-center justify-center">
							<Target class="w-32 h-32 text-primary/40" />
						</div>
					</div>
				</div>
				<div class="md:w-1/2 space-y-6">
					<h3 class="text-4xl font-light">Health Coaching</h3>
					<p class="text-lg text-base-content/70 leading-relaxed">
						Personalized programs for digestive and genitourinary disorders, hypertension, diabetes,
						autoimmune conditions, and cancer nutrition. We guide you step by step to achieve real
						lifestyle changes and better long-term health.
					</p>
					<a
						href="/services/health-coaching"
						class="btn btn-primary btn-outline hover:btn-primary transition-all inline-flex gap-2"
					>
						Learn how we can help
						<span class="text-xs">→</span>
					</a>
				</div>
			</div>

			<!-- Skin Tag & Lesion Removal -->
			<div class="flex flex-col md:flex-row-reverse gap-12 items-center group">
				<div class="md:w-1/2">
					<div
						class="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow"
					>
						<div class="w-full h-full flex items-center justify-center">
							<Star class="w-32 h-32 text-secondary/40" />
						</div>
					</div>
				</div>
				<div class="md:w-1/2 space-y-6">
					<h3 class="text-4xl font-light">Skin Tag & Lesion Removal</h3>
					<p class="text-lg text-base-content/70 leading-relaxed">
						Safe, non-invasive diagnosis and treatment for benign skin conditions including skin
						tags, milia, ruby points, seborrheic keratosis, and superficial capillaries. A
						professional and discreet service right here in Hamilton.
					</p>
					<a
						href="/services/skin-tag-removal"
						class="btn btn-primary btn-outline hover:btn-primary transition-all inline-flex gap-2"
					>
						Learn how we can help
						<span class="text-xs">→</span>
					</a>
				</div>
			</div>

			<!-- Ambassador Service -->
			<div class="flex flex-col md:flex-row gap-12 items-center group">
				<div class="md:w-1/2">
					<div
						class="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow"
					>
						<div class="w-full h-full flex items-center justify-center">
							<Globe class="w-32 h-32 text-accent/40" />
						</div>
					</div>
				</div>
				<div class="md:w-1/2 space-y-6">
					<h3 class="text-4xl font-light">Ambassador Service</h3>
					<p class="text-lg text-base-content/70 leading-relaxed">
						We accompany Spanish-speaking clients to medical appointments to ensure they understand
						every detail of their care. Clear communication, cultural understanding, and peace of
						mind.
					</p>
					<a
						href="/services/ambassador-service"
						class="btn btn-primary btn-outline hover:btn-primary transition-all inline-flex gap-2"
					>
						Learn how we can help
						<span class="text-xs">→</span>
					</a>
				</div>
			</div>

			<!-- In-Home Visits -->
			<div class="flex flex-col md:flex-row-reverse gap-12 items-center group">
				<div class="md:w-1/2">
					<div
						class="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow"
					>
						<div class="w-full h-full flex items-center justify-center">
							<Home class="w-32 h-32 text-primary/40" />
						</div>
					</div>
				</div>
				<div class="md:w-1/2 space-y-6">
					<h3 class="text-4xl font-light">In-Home Visits</h3>
					<p class="text-lg text-base-content/70 leading-relaxed">
						When you can't come to us, we bring care to your door. Our health coaching and support
						services are available in the comfort of your home.
					</p>
					<a
						href="/services/in-home-visits"
						class="btn btn-primary btn-outline hover:btn-primary transition-all inline-flex gap-2"
					>
						Learn how we can help
						<span class="text-xs">→</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Us -->
<section id="why-choose-us" class="py-32 bg-base-200">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="text-center mb-20">
			<p class="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
				Our Difference
			</p>
			<h2 class="text-5xl font-light mb-4">What Makes Us Different</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
			<div
				class="text-center p-8 hover:bg-base-100 rounded-2xl transition-all duration-300 hover:-translate-y-2"
			>
				<div class="flex justify-center mb-6">
					<div
						class="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300"
					>
						<Target class="w-12 h-12 text-primary" />
					</div>
				</div>
				<h3 class="font-semibold text-xl mb-3">Specialized Care</h3>
				<p class="text-base-content/70 leading-relaxed">
					Specialized in chronic condition coaching.
				</p>
			</div>

			<div
				class="text-center p-8 hover:bg-base-100 rounded-2xl transition-all duration-300 hover:-translate-y-2"
			>
				<div class="flex justify-center mb-6">
					<div
						class="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300"
					>
						<Globe class="w-12 h-12 text-primary" />
					</div>
				</div>
				<h3 class="font-semibold text-xl mb-3">Bilingual Team</h3>
				<p class="text-base-content/70 leading-relaxed">
					English & Spanish speaking professionals.
				</p>
			</div>

			<div
				class="text-center p-8 hover:bg-base-100 rounded-2xl transition-all duration-300 hover:-translate-y-2"
			>
				<div class="flex justify-center mb-6">
					<div
						class="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300"
					>
						<Star class="w-12 h-12 text-primary" />
					</div>
				</div>
				<h3 class="font-semibold text-xl mb-3">Trusted</h3>
				<p class="text-base-content/70 leading-relaxed">Trusted by Hamilton families.</p>
			</div>

			<div
				class="text-center p-8 hover:bg-base-100 rounded-2xl transition-all duration-300 hover:-translate-y-2"
			>
				<div class="flex justify-center mb-6">
					<div
						class="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300"
					>
						<Home class="w-12 h-12 text-primary" />
					</div>
				</div>
				<h3 class="font-semibold text-xl mb-3">Accessible</h3>
				<p class="text-base-content/70 leading-relaxed">
					Clinic visits, home services, and medical accompaniment.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Google Reviews -->
{#await data.reviewsData}
	<section class="py-20 bg-base-100">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-center mb-12">Google Reviews</h2>
			<div class="flex justify-center">
				<span class="loading loading-spinner loading-lg"></span>
			</div>
		</div>
	</section>
{:then reviewsData}
	<GoogleReviews
		reviews={reviewsData.reviews}
		rating={reviewsData.rating}
		totalReviews={reviewsData.totalReviews}
		error={reviewsData.error}
	/>
{/await}

<!-- FAQ Section -->
<FAQ />

<!-- Business Hours -->
<section class="py-32 bg-base-100">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="text-center mb-20">
			<p class="text-sm uppercase tracking-wider text-primary font-semibold mb-3">
				Visit Us
			</p>
			<h2 class="text-5xl font-light mb-4">When We're Here for You</h2>
		</div>
		<div class="max-w-2xl mx-auto bg-base-200 rounded-2xl p-8 shadow-lg">
			<div class="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 text-lg">
				<div class="font-semibold">Monday:</div>
				<div class="text-base-content/70">12:00 PM - 5:00 PM</div>

				<div class="font-semibold">Tuesday:</div>
				<div class="text-base-content/70">12:00 PM - 8:00 PM</div>

				<div class="font-semibold">Wednesday:</div>
				<div class="text-base-content/70">9:00 AM - 8:00 PM</div>

				<div class="font-semibold">Thursday:</div>
				<div class="text-base-content/70">12:00 PM - 8:00 PM</div>

				<div class="font-semibold">Friday:</div>
				<div class="text-base-content/70">9:00 AM - 5:00 PM</div>

				<div class="font-semibold">Saturday:</div>
				<div class="text-base-content/70">9:00 AM - 2:00 PM</div>

				<div class="font-semibold">Sunday:</div>
				<div class="text-base-content/70">Closed</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section id="contact" class="py-32 bg-primary text-primary-content">
	<div class="container mx-auto px-4 text-center max-w-4xl">
		<div class="mb-12">
			<p class="text-sm uppercase tracking-wider text-primary-content/80 font-semibold mb-3">
				Get Started
			</p>
			<h2 class="text-5xl md:text-6xl font-light mb-6 leading-tight">
				Ready to Start Your Journey?
			</h2>
			<p class="text-xl text-primary-content/80 max-w-2xl mx-auto">
				Take the first step towards better health. Book your free consultation today.
			</p>
		</div>

		<div class="mb-12 space-y-4 text-lg">
			<p class="flex items-center justify-center gap-3">
				<MapPin class="w-5 h-5" />
				Unit 2B, 144 James St S, Hamilton, Ontario L8P 3A2
			</p>
			<p class="flex items-center justify-center gap-3">
				<Phone class="w-5 h-5" />
				<a href="tel:+13653369757" class="link link-hover">+1 (365) 336-9757</a>
			</p>
			<p class="flex items-center justify-center gap-3">
				<Mail class="w-5 h-5" />
				<a href="mailto:info@vicaria.ca" class="link link-hover">info@vicaria.ca</a>
			</p>
		</div>

		<div class="flex gap-4 justify-center mb-10">
			<a
				href="https://facebook.com"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-circle btn-secondary hover:scale-110 transition-transform"
				aria-label="Facebook"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					/>
				</svg>
			</a>
			<a
				href="https://instagram.com"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-circle btn-secondary hover:scale-110 transition-transform"
				aria-label="Instagram"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
					/>
				</svg>
			</a>
		</div>

		<div class="flex flex-col items-center gap-2">
			<a
				href="tel:+13653369757"
				class="btn btn-secondary btn-lg hover:scale-105 transition-transform"
				>Schedule Your Free Consultation</a
			>
			<span class="text-sm text-primary-content/70">Free consultation - no obligation</span>
		</div>
	</div>
</section>

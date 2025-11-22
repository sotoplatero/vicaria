<script lang="ts">
	import { Mail, Phone, MapPin, Clock, MessageCircle } from '@lucide/svelte';
	import Header from '$lib/components/Header.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
	import * as m from '$lib/paraglide/messages';

	const contactInfo = [
		{
			icon: Phone,
			title: 'Phone',
			value: '+1 (365) 336-9757',
			link: 'tel:+13653369757'
		},
		{
			icon: Mail,
			title: 'Email',
			value: 'info@vicaria.ca',
			link: 'mailto:info@vicaria.ca'
		},
		{
			icon: MapPin,
			title: 'Location',
			value: 'Hamilton, Ontario',
			link: null
		},
		{
			icon: Clock,
			title: 'Hours',
			value: 'Mon - Fri: 9am - 5pm',
			link: null
		}
	];
</script>

<svelte:head>
	<title>Contact Us - Vicaria Health | Get in Touch</title>
	<meta
		name="description"
		content="Contact Vicaria Health for personalized health coaching in Hamilton. Schedule a free consultation with our bilingual health coaches today."
	/>
</svelte:head>

<Header />

<!-- Hero Section -->
<section
	class="pt-32 pb-20 bg-gradient-to-br from-warm-white via-blush/10 to-sage-light/10 relative overflow-hidden"
>
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-20 right-10 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 left-10 w-80 h-80 bg-rose/20 rounded-full blur-3xl"></div>
	</div>

	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<div
				class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm"
			>
				<MessageCircle class="text-primary" size={18} />
				<span class="text-sm font-medium text-primary">{m.contact_page_subtitle()}</span>
			</div>

			<h1
				class="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight tracking-tight"
			>
				{m.contact_page_title()}
			</h1>

			<p class="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
				{m.contact_page_description()}
			</p>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section class="section-padding bg-white">
	<div class="container-custom">
		<ContactForm accessKey="8c4dc42f-f5fa-484f-9131-3ec7052487ca" />
	</div>
</section>



<!-- WhatsApp Alternative CTA -->
<section class="section-padding bg-warm-white">
	<div class="container-custom">
		<div class="max-w-5xl mx-auto">
			<div class="relative bg-primary rounded-3xl overflow-hidden shadow-2xl">
				<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
				<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

				<div class="relative z-10 p-12 md:p-16 text-center space-y-6">
					<div
						class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full"
					>
						<MessageCircle class="text-white" size={18} />
						<span class="text-sm font-medium text-white">Quick Response</span>
					</div>

					<h2 class="text-3xl md:text-4xl font-bold text-white leading-tight">
						{m.contact_alternative_title()}
					</h2>

					<p class="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
						{m.contact_alternative_description()}
					</p>

					<div class="pt-4">
						<WhatsAppButton
							text="Chat on WhatsApp"
							message="Hi! I'd like to learn more about your health coaching services."
							size="xl"
							variant="secondary"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

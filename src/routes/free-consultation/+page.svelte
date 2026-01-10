<script lang="ts">
	import { MessageCircle, Phone, Clock, DollarSign, CheckCircle, MapPin } from '@lucide/svelte';
	import CTA from '$lib/components/CTA.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';

	const faqs = [
		{
			id: 'free-1',
			question: 'Is this really free?',
			answer: 'Yes. Completely free. No hidden fees, no credit card required. We believe you should talk to a real doctor and understand your options before spending money.'
		},
		{
			id: 'free-2',
			question: 'Do I have to do a video call?',
			answer: 'Not at all. Most people start with text. Share photos if comfortable. Video is optional—whatever works for you.'
		},
		{
			id: 'free-3',
			question: 'What can I ask about?',
			answer: 'Anything: skin tag removal, milia treatment, digestive issues, diabetes management, blood pressure, menopause support—any health concern. We\'ll tell you honestly if we can help or not.'
		},
		{
			id: 'free-4',
			question: 'Will you pressure me to book?',
			answer: 'No. This is a conversation, not a sales pitch. We\'ll answer your questions, explain pricing, and let you decide. If our services aren\'t right for you, we\'ll tell you.'
		},
		{
			id: 'free-5',
			question: 'How fast will you respond?',
			answer: 'Usually 2-3 hours during business hours (Mon-Fri, 9am-5pm). Sometimes faster.'
		},
		{
			id: 'free-6',
			question: 'Do I need to be in Hamilton?',
			answer: 'We serve Hamilton, Burlington, Ancaster, Dundas, Waterdown, Stoney Creek, and surrounding areas. If you can reach our downtown Hamilton clinic, we can help.'
		}
	];
</script>

<svelte:head>
	<title>Free Health Consultation in Hamilton | Vicaria Health</title>
	<meta
		name="description"
		content="Free health consultation via WhatsApp in Hamilton. Talk to licensed doctors about skin treatments, health coaching, and pricing before booking. No appointment needed."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-32 pb-20 bg-gradient-to-br from-warm-white via-blush/10 to-sage-light/10 overflow-hidden">

	<div class="">
		<div class="max-w-4xl mx-auto text-center space-y-8">
			<!-- Location Badge -->
			<div class="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full shadow-sm">
				<MapPin class="text-primary" size={16} />
				<span class="text-sm font-medium text-primary">Hamilton & Burlington Area</span>
			</div>

			<!-- Headline -->
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight">
				Free Health Consultation
				<span class="text-primary block mt-2">in Hamilton</span>
			</h1>

			<!-- Subheadline -->
			<p class="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
				Talk to Yamilet and Maurin about skin treatments, health coaching, and pricing via WhatsApp before you book anything. No appointment needed. No commitment required.
			</p>

			<!-- CTA -->
			<div class="flex flex-col items-center gap-4 pt-6">
				<WhatsAppButton
					text="Start Free Consultation"
					message="Hi! I'd like a free consultation to discuss my health concerns."
					size="xl"
					variant="primary"
				/>
				<p class="text-sm text-gray-600 flex items-center gap-2">
					<MessageCircle size={16} class="text-green-600" />
					Response in 2-3 hours • Mon-Fri 9am-5pm
				</p>
			</div>
		</div>
	</div>
</section>

<!-- The Problem Section -->
<section class="py-20 bg-white">
	<div class="container-custom">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
					You Shouldn't Have to Pay<br/>
					<span class="text-primary">Just to Ask Questions</span>
				</h2>
				<p class="text-xl text-gray-700">
					But that's how most clinics work
				</p>
			</div>

			<!-- Problem Cards Grid -->
			<div class="grid md:grid-cols-2 gap-6 mb-12">
				<div class="bg-red-50 rounded-2xl p-6 border-2 border-red-100">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
							<DollarSign class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">Pay Before You Know</h3>
					</div>
					<p class="text-gray-700">$60-100 upfront just to find out if they can even help you</p>
				</div>

				<div class="bg-red-50 rounded-2xl p-6 border-2 border-red-100">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
							<Clock class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">Wait for Weeks</h3>
					</div>
					<p class="text-gray-700">Book an appointment and wait days or weeks to get in</p>
				</div>

				<div class="bg-red-50 rounded-2xl p-6 border-2 border-red-100">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
							<Phone class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">Waste Your Time</h3>
					</div>
					<p class="text-gray-700">Spend an hour in-person for questions you could ask in 10 minutes</p>
				</div>

				<div class="bg-red-50 rounded-2xl p-6 border-2 border-red-100">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
							<DollarSign class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">Already Committed</h3>
					</div>
					<p class="text-gray-700">Find out it's too expensive—but you've already paid for the visit</p>
				</div>
			</div>

			<!-- Value Prop -->
			<div class="bg-sage-light/10 border border-sage-light rounded-2xl p-8 text-center">
				<p class="text-xl md:text-2xl font-bold text-charcoal mb-3">
					You shouldn't pay to find out if we can help you.
				</p>
				<p class="text-lg text-gray-700">
					Talk to us first, free. That's how it should work.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- The Solution Section -->
<section class="py-20 bg-gradient-to-br from-sage-light/5 to-warm-white">
	<div class="container-custom">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-charcoal mb-4">
					The Vicaria Way
				</h2>
				<p class="text-xl text-gray-600">
					Free consultation first. Then you decide.
				</p>
			</div>

			<!-- Solution Cards Grid -->
			<div class="grid md:grid-cols-2 gap-6">
				<div class="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-sm">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
							<MessageCircle class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">No Money Required</h3>
					</div>
					<p class="text-gray-700">Send a quick WhatsApp message. Get expert answers for free.</p>
				</div>

				<div class="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-sm">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
							<Clock class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">Answers in Hours</h3>
					</div>
					<p class="text-gray-700">Hear back from real doctors in 2-3 hours, not weeks.</p>
				</div>

				<div class="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-sm">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
							<CheckCircle class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">Know Before You Go</h3>
					</div>
					<p class="text-gray-700">Learn what we offer, pricing, and if it's right for you—upfront.</p>
				</div>

				<div class="bg-white rounded-2xl p-6 border-2 border-green-100 shadow-sm">
					<div class="flex items-center gap-3 mb-3">
						<div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
							<CheckCircle class="text-white" size={20} />
						</div>
						<h3 class="text-lg font-bold text-charcoal">Zero Pressure</h3>
					</div>
					<p class="text-gray-700">Decide if you want to proceed. No hard feelings either way.</p>
				</div>
			</div>

			<!-- CTA -->
			<div class="text-center mt-12">
				<WhatsAppButton
					text="Start Free Chat"
					message="Hi! I have questions about my health concerns and want to know if you can help."
					size="lg"
					variant="primary"
				/>
			</div>
		</div>
	</div>
</section>

<!-- How It Works -->
<section class="py-20 bg-white">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-charcoal mb-4">
					Here's How It Works
				</h2>
				<p class="text-lg text-gray-600">
					Three simple steps. No games.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="text-center">
					<div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
						1
					</div>
					<h3 class="text-xl font-bold text-charcoal mb-3">
						Send a Message
					</h3>
					<p class="text-gray-700">
						Click the button, tell us what's bothering you. Text, photos, or video—your choice.
					</p>
				</div>

				<div class="text-center">
					<div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
						2
					</div>
					<h3 class="text-xl font-bold text-charcoal mb-3">
						Get Expert Answers
					</h3>
					<p class="text-gray-700">
						A licensed doctor responds in 2-3 hours. We'll discuss your situation and explain your options honestly.
					</p>
				</div>

				<div class="text-center">
					<div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
						3
					</div>
					<h3 class="text-xl font-bold text-charcoal mb-3">
						You Decide
					</h3>
					<p class="text-gray-700">
						Know the pricing and what's involved. Book if it makes sense. Zero pressure either way.
					</p>
				</div>
			</div>

			<!-- Bottom Note -->
			<div class="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-center">
				<p class="text-gray-700">
					<strong class="text-charcoal">Serving Hamilton, Burlington, Ancaster, Dundas, Waterdown, Stoney Creek</strong> and surrounding area
				</p>
			</div>

			<!-- CTA -->
			<div class="text-center mt-8">
				<WhatsAppButton
					text="Start My Free Chat"
					message="Hi! I'd like to start a free health chat."
					size="lg"
					variant="secondary"
				/>
			</div>
		</div>
	</div>
</section>

<!-- What We Help With (Brief) -->
<section class="py-16 bg-white">
	<div class="container-custom">
		<div class="max-w-3xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-charcoal mb-8">
				Common Questions We Get
			</h2>
			<div class="grid md:grid-cols-2 gap-6 text-left">
				<div class="p-6 bg-warm-white rounded-xl border border-gray-100">
					<h3 class="font-bold text-charcoal mb-2">"Can you remove these skin tags on my neck?"</h3>
					<p class="text-gray-600 text-sm">We do skin tag removal, milia removal, ruby points, and seborrheic keratosis. <a href="/service" class="text-primary hover:underline">See all skin treatments →</a></p>
				</div>
				<div class="p-6 bg-warm-white rounded-xl border border-gray-100">
					<h3 class="font-bold text-charcoal mb-2">"My gut has been a mess for years. Can you help?"</h3>
					<p class="text-gray-600 text-sm">We offer personalized health coaching for digestive issues, IBS, bloating, and more. <a href="/service" class="text-primary hover:underline">See health coaching →</a></p>
				</div>
				<div class="p-6 bg-warm-white rounded-xl border border-gray-100">
					<h3 class="font-bold text-charcoal mb-2">"How much does it cost to get this looked at?"</h3>
					<p class="text-gray-600 text-sm">That's exactly what we'll tell you—upfront, before you spend anything.</p>
				</div>
				<div class="p-6 bg-warm-white rounded-xl border border-gray-100">
					<h3 class="font-bold text-charcoal mb-2">"Do I really need to come in, or can we do this online?"</h3>
					<p class="text-gray-600 text-sm">Depends on what you need. We'll discuss that during the free chat.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<FAQ {faqs} />

<!-- Final CTA -->
<CTA
	badge="Zero Risk. Zero Pressure."
	badgeIcon={MessageCircle}
	title="Talk to Health Coach in Hamilton for Free"
	description="Stop paying just to ask if someone can help you. Get honest answers about skin treatments, health coaching, and pricing before you spend a dollar. Send us a message on WhatsApp—we'll respond within hours."
	primaryButtonText="Start Free Health Chat"
	whatsappMessage="Hi! I'd like to chat about my health concerns before booking anything."
	trustIndicators={[
		'100% Free',
		'No Appointment Needed',
		'Licensed Medical Doctors',
		'Serving Hamilton & Area'
	]}
	backgroundColor="primary"
/>

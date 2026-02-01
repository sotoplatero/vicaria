<script lang="ts">
	import { Clock, Calendar, Sparkles, Shield, ArrowRight } from "@lucide/svelte";
	import CTA from "$lib/components/CTA.svelte";
	import FAQ from "$lib/components/FAQ.svelte";
	import PricingSystemExplanation from "$lib/components/pricing/PricingSystemExplanation.svelte";
	import HealthCoachingDetailed from "$lib/components/pricing/HealthCoachingDetailed.svelte";
	import SkinTreatmentDetailed from "$lib/components/pricing/SkinTreatmentDetailed.svelte";
	import InsurancePayment from "$lib/components/pricing/InsurancePayment.svelte";
	import type { FAQ as FAQType } from "$lib/types/faq";

	const pricingFAQs: FAQType[] = [
		{
			id: "pricing-package-discount",
			question:
				"Why do packages cost less per session than single sessions?",
			answer: "Our pricing reflects the commitment model. When you commit to multiple sessions, I can plan a more comprehensive program and dedicate resources to your ongoing care. This allows me to offer better value while ensuring you get the sustained support needed for real, lasting change. Think of it as an investment discount the more you invest in your health journey, the better the per-session value.",
			category: "pricing",
		},
		{
			id: "insurance-coverage",
			question: "Will my insurance cover these services?",
			answer: "For Health Coaching: Many extended health insurance plans DO cover consultations with Registered Nutritional Practitioners. Whether you're seeing us in Hamilton or virtually from Burlington, Ancaster, or surrounding areas, we provide detailed receipts for your claims. Check your benefits under 'nutritionist,' 'dietitian,' or 'complementary health practitioners.' For Skin Treatments: These are cosmetic procedures and are NOT covered by OHIP or most insurance plans.",
			category: "insurance",
		},
		{
			id: "package-upgrade",
			question: "Can I upgrade from a smaller package to a larger one?",
			answer: "Absolutely! If you start with a smaller package and want to continue, we can upgrade you to a larger package. You will receive credit for the sessions you have already paid for, and only pay the difference. For example, if you complete a 3-Session Package and want to upgrade to the 6-Session Package, you would pay $210 (the difference between $450 and $240).",
			category: "packages",
		},
		{
			id: "cancellation-reschedule",
			question:
				"What happens if I need to cancel or reschedule a session?",
			answer: "Life happens, and I understand! Please give at least 24 hours notice to cancel or reschedule. Cancellations within 24 hours or no-shows may result in session forfeiture. If you have an emergency, please reach out I will work with you when possible. Communication is key!",
			category: "process",
		},
		{
			id: "session-schedule",
			question: "Do I have to use all my sessions right away?",
			answer: "No! Package sessions must be used within 6 months of purchase, but you can schedule them at a pace that works for you. Some clients prefer weekly sessions initially, then space them out as they gain confidence. We will work together to find the right rhythm for your needs and schedule.",
			category: "packages",
		},
		{
			id: "payment-plans",
			question: "Are there payment plans available?",
			answer: "Currently, we do not offer payment plans. Packages must be paid in full at time of purchase. However, you can always start with a single session to test the waters, then upgrade to a package if you decide to continue. All payments are due at time of service.",
			category: "pricing",
		},
		{
			id: "package-savings",
			question: "How much money can I save with a package?",
			answer: "The savings add up quickly! With the 3-Session Package, you save $15 total ($5 per session). The 6-Session Package saves you $60 ($10 per session). The 3-Month Program (12 sessions) saves you $180 ($15 per session). Plus, the value of sustained support and accountability is priceless when it comes to achieving lasting health results.",
			category: "pricing",
		},
		{
			id: "coaching-included",
			question: "What is included in the Health Coaching sessions?",
			answer: "Each session includes a comprehensive consultation (typically 60 minutes), personalized recommendations, written summaries, and action plans. Package clients also receive email support between sessions, protocol adjustments, progress tracking, and detailed resources. The 3-Month Program includes priority support, unlimited adjustments, and advanced testing guidance.",
			category: "process",
		},
		{
			id: "skin-consultation-duration",
			question: "How long does a skin treatment consultation take?",
			answer: "The initial consultation typically takes 20-30 minutes. During this time, I will examine all your lesions, identify their type, assess size and location, discuss the procedure, and provide a detailed cost estimate. Treatment can often be performed the same day and takes 15-45 minutes depending on the number of lesions being removed.",
			category: "process",
		},
		{
			id: "package-refund",
			question: "Can I get a refund if I change my mind about a package?",
			answer: "Packages are non-refundable once purchased, as I reserve time and resources specifically for you. However, packages ARE transferable you can transfer unused sessions to a family member or friend with advance notice. This ensures your investment is not lost even if circumstances change.",
			category: "packages",
		},
		{
			id: "couples-discount",
			question: "Do you offer discounts for couples or families?",
			answer: "Yes! We offer a Couple or Family Session option for $120 CAD. This allows you to bring your partner or family members into your wellness journey. It is a great way to get everyone on the same page and build collective healthy habits. Contact us to discuss how this can be integrated into your package.",
			category: "general",
		},
		{
			id: "choosing-package",
			question: "What if I am not sure which package is right for me?",
			answer: "That is completely normal! I recommend starting with our free 15-minute discovery call to discuss your goals and challenges. Whether you're visiting our Hamilton clinic or connecting virtually from anywhere in the Golden Horseshoe, we can discuss which package best fits your needs. You can also start with a Single Session to experience the process before committing to a larger package.",
			category: "general",
		},
		{
			id: "insurance-claim-process",
			question: "How do I submit my insurance claim?",
			answer: "After each session, you will receive a detailed receipt via email with all the information your insurance company requires: my credentials and registration number, date and duration of service, service description, and total amount paid. Simply submit this receipt to your insurance provider along with any required claim forms. Most claims are processed within 2-4 weeks.",
			category: "insurance",
		},
		{
			id: "package-comparison",
			question:
				"What is the difference between the 6-Session Package and the 3-Month Program?",
			answer: "The main difference is intensity and support level. The 6-Session Package is spread over 2-3 months with bi-weekly to monthly check-ins, perfect for moderate lifestyle changes. The 3-Month Program includes 12 sessions (weekly initially, then bi-weekly), priority email support, unlimited protocol adjustments, advanced testing guidance, and is designed for comprehensive transformation of complex health issues.",
			category: "packages",
		},
		{
			id: "multiple-lesions",
			question:
				"For skin treatments, can I get multiple lesions removed in one session?",
			answer: "Absolutely! In fact, it is very common to remove multiple lesions in a single treatment session. After your $60 consultation where we identify all your lesions, we can remove as many as you would like (within reason for comfort and healing). You pay the per-lesion price ($20-$25 each) based on size and location. Many clients prefer to do everything at once.",
			category: "process",
		},
	];

	const processSteps = [
		{
			step: "01",
			title: "Discovery Call",
			description:
				"We start with a free 15-minute chat to see if we are a good fit. We discuss your main struggles and how I can help.",
			icon: Clock,
		},
		{
			step: "02",
			title: "Initial Assessment",
			description:
				"In our first deep-dive session, we uncover the root causes of your symptoms through a detailed health history review.",
			icon: Shield,
		},
		{
			step: "03",
			title: "Your Unique Plan",
			description:
				"I create a personalized nutrition and lifestyle protocol tailored specifically to your body and goals.",
			icon: Sparkles,
		},
		{
			step: "04",
			title: "Ongoing Support",
			description:
				"We work together over weeks or months to implement changes, adjust as needed, and ensure sustainable results.",
			icon: Calendar,
		},
	];
</script>

<svelte:head>
	<title>Nutrition Coaching Pricing Hamilton ON | Vicaria Health</title>
	<meta
		name="description"
		content="Transparent pricing for nutrition counseling in Hamilton, Burlington, Ancaster & surrounding areas. Health coaching packages from $85. Insurance-friendly. Book your free consultation."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-32 pb-12 overflow-hidden bg-warm-white">
	<div
		class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"
	></div>
	<div class="w-full mx-auto max-w-4xl text-center">
		<div
			class="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 mb-6"
		>
			<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
			<span class="text-sm font-medium text-primary"
				>Invest in Your Health</span
			>
		</div>
		<h1
			class="text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight"
		>
			Health Counseling <span class="text-primary">Pricing</span> in Hamilton
		</h1>
		<p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
			Transparent pricing for health coaching services in Hamilton,
			Burlington, Ancaster, and surrounding areas. Everything you need to
			know to make the best decision for your health.
		</p>
	</div>
</section>

<!-- Pricing System Explanation -->
<PricingSystemExplanation />

<!-- Services We Offer - Interlinking Section -->
<section class="py-16 bg-white">
	<div class="container-custom">
		<div class="max-w-5xl mx-auto">
			<div class="text-center mb-10">
				<h2 class="text-3xl font-bold text-charcoal mb-4">
					Our Health Coaching Programs
				</h2>
				<p class="text-lg text-gray-600 max-w-2xl mx-auto">
					Our health coaching packages include specialized support for a variety of conditions. Each program is tailored to your specific needs.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				<a href="/service/bloating-relief" class="group flex items-center gap-3 p-4 bg-sage-light/10 rounded-xl hover:bg-sage-light/20 transition-colors">
					<span class="w-2 h-2 rounded-full bg-primary"></span>
					<span class="text-charcoal group-hover:text-primary transition-colors">Bloating & digestive issues</span>
				</a>
				<a href="/service/blood-pressure-balance" class="group flex items-center gap-3 p-4 bg-sage-light/10 rounded-xl hover:bg-sage-light/20 transition-colors">
					<span class="w-2 h-2 rounded-full bg-primary"></span>
					<span class="text-charcoal group-hover:text-primary transition-colors">Blood pressure management</span>
				</a>
				<a href="/service/diabetes-clarity" class="group flex items-center gap-3 p-4 bg-sage-light/10 rounded-xl hover:bg-sage-light/20 transition-colors">
					<span class="w-2 h-2 rounded-full bg-primary"></span>
					<span class="text-charcoal group-hover:text-primary transition-colors">Diabetes & blood sugar control</span>
				</a>
				<a href="/service/prediabetes-nutrition-support" class="group flex items-center gap-3 p-4 bg-sage-light/10 rounded-xl hover:bg-sage-light/20 transition-colors">
					<span class="w-2 h-2 rounded-full bg-primary"></span>
					<span class="text-charcoal group-hover:text-primary transition-colors">Prediabetes reversal</span>
				</a>
				<a href="/service/ibs-nutrition-support" class="group flex items-center gap-3 p-4 bg-sage-light/10 rounded-xl hover:bg-sage-light/20 transition-colors">
					<span class="w-2 h-2 rounded-full bg-primary"></span>
					<span class="text-charcoal group-hover:text-primary transition-colors">IBS & gut health</span>
				</a>
				<a href="/service/menopause-health-coaching" class="group flex items-center gap-3 p-4 bg-sage-light/10 rounded-xl hover:bg-sage-light/20 transition-colors">
					<span class="w-2 h-2 rounded-full bg-primary"></span>
					<span class="text-charcoal group-hover:text-primary transition-colors">Menopause symptom relief</span>
				</a>
			</div>

			<div class="text-center mt-8">
				<a href="/service" class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
					View all our services
					<ArrowRight size={18} />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Health Coaching - Detailed Breakdown -->
<HealthCoachingDetailed />

<!-- Skin Treatment - Detailed Process -->
<SkinTreatmentDetailed />

<!-- Insurance & Payment Information -->
<InsurancePayment />

<!-- Process Section -->
<section
	class="py-24 bg-gradient-to-b from-warm-white to-white overflow-hidden"
>
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-charcoal mb-4">
				Your Journey to Wellness
			</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Here's what you can expect when we work together at our Hamilton
				clinic. A structured path designed for your success, with
				in-person and virtual options available.
			</p>
		</div>

		<div class="relative max-w-5xl mx-auto">
			<!-- Connecting Line (Desktop) -->
			<div
				class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20 -translate-x-1/2"
			></div>

			<div class="space-y-12 md:space-y-24">
				{#each processSteps as step, i}
					<div
						class="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 {i %
							2 ===
						0
							? ''
							: 'md:flex-row-reverse'}"
					>
						<!-- Step Number/Icon Bubble -->
						<div
							class="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-warm-white shadow-lg flex items-center justify-center z-10 hidden md:flex"
						>
							<div
								class="w-3 h-3 rounded-full bg-{i % 2 === 0
									? 'primary'
									: 'secondary'}"
							></div>
						</div>

						<!-- Content -->
						<div
							class="flex-1 text-center md:text-{i % 2 === 0
								? 'right'
								: 'left'}"
						>
							<div
								class="inline-block p-4 rounded-2xl bg-{i %
									2 ===
								0
									? 'primary'
									: 'secondary'}/10 mb-4 text-{i % 2 === 0
									? 'primary'
									: 'secondary'}"
							>
								<svelte:component this={step.icon} size={32} />
							</div>
							<h3 class="text-2xl font-bold text-charcoal mb-3">
								{step.title}
							</h3>
							<p class="text-gray-600 leading-relaxed">
								{step.description}
							</p>
						</div>

						<!-- Empty side for balance -->
						<div class="flex-1 hidden md:block"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<FAQ faqs={pricingFAQs} />

<CTA
	title="Ready to Get Started?"
	description="Join clients across Hamilton, Burlington, Ancaster, and the Golden Horseshoe area who've transformed their health. Start with a free 15-minute discovery call in person at our Hamilton location or virtually."
	badge="No Commitment"
/>

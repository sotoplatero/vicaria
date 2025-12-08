<script lang="ts">
	import { Check, Clock, Mail, FileText, TrendingUp, Calendar, Target, Heart } from '@lucide/svelte';
	import WhatsappButton from '$lib/components/WhatsAppButton.svelte';

	interface SessionStep {
		week?: string;
		title: string;
		points: string[];
	}

	interface PricingPlan {
		name: string;
		price: number;
		pricePerSession: number;
		sessions: number;
		description: string;
		expandedDescription: string;
		bestFor: string[];
		includes: string[];
		whatToExpect: SessionStep[];
		relatedServices: { name: string; href: string }[];
		savings?: number;
		highlighted?: boolean;
	}

	const plans: PricingPlan[] = [
		{
			name: 'Single Session',
			price: 85,
			pricePerSession: 85,
			sessions: 1,
			description: 'Your sixty-minute deep dive: pinpoint your challenge, get clarity and walk away with an actionable next step.',
			expandedDescription: 'Ideal if you are exploring whether nutritional coaching is right for you, or if you have a specific health question that needs expert guidance.',
			bestFor: [
				'Testing the waters before committing',
				'Specific one-off questions',
				'Quick expert consultation',
				'Getting a second opinion'
			],
			includes: [
				'Pre-session health questionnaire',
				'60 minutes of 1-on-1 consultation',
				'Personalized action plan',
				'Written session summary via email',
				'Official receipt for insurance'
			],
			whatToExpect: [
				{
					title: 'Pre-Session (Before your appointment)',
					points: [
						'You will receive a detailed health questionnaire to complete',
						'This helps me understand your current lifestyle, symptoms, and goals',
						'Takes about 10-15 minutes to fill out'
					]
				},
				{
					title: 'During Your Session (60 minutes)',
					points: [
						'In-depth interview about your current lifestyle and eating habits',
						'Review of your main symptoms and health concerns',
						'Identification of 1-2 key factors contributing to your challenge',
						'Discussion of immediate actionable steps you can take',
						'Q&A - your chance to ask anything'
					]
				},
				{
					title: 'After Your Session',
					points: [
						'Email summary of our discussion and recommendations',
						'Your personalized action plan with next steps',
						'Resource links if applicable',
						'Official receipt for insurance claims'
					]
				}
			],
			relatedServices: [
				{ name: 'Chronic Digestive Problems', href: '/service/chronic-digestive-problems' },
				{ name: 'Blood Pressure Balance', href: '/service/blood-pressure-balance' },
				{ name: 'Menopause Health Coaching', href: '/service/menopause-health-coaching' }
			]
		},
		{
			name: '3-Session Package',
			price: 240,
			pricePerSession: 80,
			sessions: 3,
			description: 'Get momentum: start building healthier habits with structure and direction.',
			expandedDescription: 'Perfect for starting to build sustainable health habits. Enough time to see initial changes and develop a foundation for lasting transformation.',
			savings: 15,
			bestFor: [
				'Building initial momentum',
				'Addressing specific health goals',
				'Learning foundational nutrition principles',
				'Making your first lifestyle changes'
			],
			includes: [
				'Everything from Single Session × 3',
				'Email support between sessions',
				'1-2 protocol adjustments based on progress',
				'Implementation guide and resources',
				'Official receipts for all sessions'
			],
			whatToExpect: [
				{
					week: 'Week 1',
					title: 'Session 1: Foundation & Assessment',
					points: [
						'Comprehensive health history review',
						'Deep-dive into symptoms and root cause analysis',
						'Goal setting and success metrics definition',
						'Initial nutrition and lifestyle protocol design',
						'First action steps to implement'
					]
				},
				{
					week: 'Weeks 2-3',
					title: 'Between Sessions',
					points: [
						'You implement initial recommendations',
						'Email check-ins and support',
						'Track your progress and symptoms',
						'Note questions for next session'
					]
				},
				{
					week: 'Week 3-4',
					title: 'Session 2: Progress Check & Adjustments',
					points: [
						'Review what is working and what needs tweaking',
						'Troubleshoot any challenges or obstacles',
						'Protocol adjustments based on your feedback',
						'Integration of new habits and practices',
						'Refined action plan'
					]
				},
				{
					week: 'Weeks 5-7',
					title: 'Between Sessions',
					points: [
						'Continue implementing refined protocol',
						'Ongoing email support',
						'Building consistency and momentum'
					]
				},
				{
					week: 'Week 6-8',
					title: 'Session 3: Consolidation & Long-term Strategy',
					points: [
						'Results review and progress celebration',
						'Solidifying habits that work for you',
						'Long-term maintenance plan',
						'Discussion of next steps (continue or maintain on your own)',
						'Final recommendations and resources'
					]
				}
			],
			relatedServices: [
				{ name: 'Diabetes Clarity', href: '/service/diabetes-clarity' },
				{ name: 'UTI & Pelvic Health', href: '/service/uti-pelvic-health' },
				{ name: 'Cancer Recovery', href: '/service/cancer-recovery' }
			]
		},
		{
			name: '6-Session Package',
			price: 450,
			pricePerSession: 75,
			sessions: 6,
			description: 'Sustain your progress. Ideal if you are ready to commit to meaningful change.',
			expandedDescription: 'The sweet spot for sustainable transformation. Enough sessions to address complex health issues, build lasting habits, and see real, measurable results.',
			savings: 60,
			bestFor: [
				'Sustainable lifestyle transformation',
				'Managing chronic conditions',
				'Addressing multiple health concerns',
				'Building deep, lasting habits'
			],
			includes: [
				'Everything from 3-Session Package × 2',
				'Extended email support throughout',
				'2-3 protocol adjustments and refinements',
				'Custom meal planning guidance',
				'Progress tracking and reviews',
				'Testing recommendations and interpretation'
			],
			whatToExpect: [
				{
					week: 'Month 1 (Sessions 1-2)',
					title: 'Foundation Phase',
					points: [
						'Comprehensive assessment and root cause discovery',
						'Detailed protocol design tailored to your needs',
						'Initial implementation and habit building',
						'Early wins and momentum building'
					]
				},
				{
					week: 'Month 2 (Sessions 3-4)',
					title: 'Implementation & Optimization',
					points: [
						'Deepening practices and expanding protocol',
						'Addressing challenges and barriers',
						'Fine-tuning based on your responses',
						'Lab testing guidance if needed',
						'Ongoing troubleshooting and support'
					]
				},
				{
					week: 'Month 3 (Sessions 5-6)',
					title: 'Integration & Sustainability',
					points: [
						'Results review and progress analysis',
						'Solidifying your sustainable routine',
						'Advanced strategies for continued improvement',
						'Long-term maintenance plan',
						'Planning for independence or continued support'
					]
				}
			],
			relatedServices: [
				{ name: 'Chronic Digestive Problems', href: '/service/chronic-digestive-problems' },
				{ name: 'Blood Pressure Balance', href: '/service/blood-pressure-balance' },
				{ name: 'Menopause Health Coaching', href: '/service/menopause-health-coaching' }
			]
		},
		{
			name: '3-Month Program',
			price: 840,
			pricePerSession: 70,
			sessions: 12,
			description: 'Transform your lifestyle and mindset with lasting results, not just quick fixes.',
			expandedDescription: 'The complete transformation experience. Deep work over three months to create fundamental shifts in your health, habits, and relationship with food and your body.',
			savings: 180,
			highlighted: true,
			bestFor: [
				'Complete health transformation',
				'Complex or multiple health issues',
				'Long-term lifestyle redesign',
				'Maximum support and accountability'
			],
			includes: [
				'12 comprehensive coaching sessions',
				'Priority email support throughout program',
				'Unlimited protocol adjustments',
				'Detailed custom meal planning',
				'Advanced testing guidance and interpretation',
				'Progress tracking with detailed analytics',
				'Resource library access',
				'Bonus: Final sustainability toolkit'
			],
			whatToExpect: [
				{
					week: 'Month 1: Foundation & Discovery',
					title: 'Sessions 1-4',
					points: [
						'Comprehensive health assessment and testing review',
						'Root cause analysis of all symptoms',
						'Detailed protocol design (nutrition, lifestyle, supplements)',
						'Foundation habit building',
						'Weekly sessions for close support and rapid adjustments'
					]
				},
				{
					week: 'Month 2: Deep Implementation',
					title: 'Sessions 5-8',
					points: [
						'Deepening nutritional strategies',
						'Advanced troubleshooting of challenges',
						'Lab testing and functional assessments if needed',
						'Expansion of protocol based on progress',
						'Bi-weekly sessions as you gain independence'
					]
				},
				{
					week: 'Month 3: Integration & Long-term Success',
					title: 'Sessions 9-12',
					points: [
						'Results analysis and celebration of wins',
						'Refinement of sustainable daily routine',
						'Advanced strategies for continued improvement',
						'Creating your long-term wellness blueprint',
						'Transition planning (independence or ongoing support)'
					]
				}
			],
			relatedServices: [
				{ name: 'All Health Coaching Services', href: '/service/chronic-digestive-problems' }
			]
		}
	];
</script>

<section class="py-20 bg-gradient-to-br from-white via-warm-white to-sage-light/10">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Health Coaching: Detailed Breakdown
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Serving Hamilton, Burlington, Ancaster, and surrounding areas. Choose your level of support—here's exactly what you get with each plan, step by step.
			</p>
		</div>

		<div class="space-y-16">
			{#each plans as plan, index}
				<div class="max-w-4xl mx-auto" id="plan-{plan.name.toLowerCase().replace(/\s+/g, '-')}">
					<!-- Plan Header -->
					<div class=" {plan.highlighted ? 'border-primary' : 'border-gray-200'} overflow-hidden">
						
						<div class="p-8 md:p-12">
							<!-- Title & Price -->
							<div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 pb-8 border-b border-gray-200">
								<div class="flex-1">
									<h3 class="text-3xl md:text-4xl font-bold text-charcoal mb-3">
										{plan.name}
									</h3>
									{#if plan.savings}
										<div class=" text-primary font-semibold text-sm mb-4">
											Save ${plan.savings} compared to single sessions
										</div>
									{/if}
									<p class="text-lg text-gray-700 mb-4">
										{plan.description}
									</p>
									<p class="text-gray-600 leading-relaxed">
										{plan.expandedDescription}
									</p>
								</div>
								<div class="text-center md:text-right flex-shrink-0">
									<div class="inline-block bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
										<div class="text-5xl font-bold text-primary mb-2">
											${plan.price}
										</div>
										<div class="text-sm text-gray-600 mb-1">CAD total</div>
										<div class="text-2xl font-semibold text-secondary">
											${plan.pricePerSession}
										</div>
										<div class="text-sm text-gray-600">per session</div>
										<div class="mt-3 text-sm text-gray-700 font-medium">
											{plan.sessions} session{plan.sessions > 1 ? 's' : ''} included
										</div>
									</div>
								</div>
							</div>

							<!-- Best For -->
							<div class="mb-8">
								<h4 class="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
									<Target class="text-primary" size={24} />
									Best For:
								</h4>
								<div class="space-y-3">
									{#each plan.bestFor as item}
										<div class="flex items-start gap-2">
											<Check class="text-primary flex-shrink-0 mt-1" size={18} />
											<span class="text-gray-700">{item}</span>
										</div>
									{/each}
								</div>
							</div>

							<!-- What's Included -->
							<div class="mb-8">
								<h4 class="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
									<Heart class="text-secondary" size={24} />
									What's Included:
								</h4>
								<div class="space-y-3">
									{#each plan.includes as item}
										<div class="flex items-start gap-2">
											<Check class="text-secondary flex-shrink-0 mt-1" size={18} />
											<span class="text-gray-700">{item}</span>
										</div>
									{/each}
								</div>
							</div>

							<!-- What to Expect (Step by Step) -->
							<div class="mb-8">
								<h4 class="text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
									<Calendar class="text-accent" size={24} />
									What to Expect - Your Journey:
								</h4>
								<div class="space-y-6">
									{#each plan.whatToExpect as step, stepIndex}
										<div class="relative pl-8 border-l-4 {stepIndex === plan.whatToExpect.length - 1 ? 'border-accent/30' : 'border-accent/50'} pb-6">
											<div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-white shadow-md"></div>
											{#if step.week}
												<div class="text-xs font-bold text-accent uppercase tracking-wide mb-1">
													{step.week}
												</div>
											{/if}
											<h5 class="text-lg font-bold text-charcoal mb-3">
												{step.title}
											</h5>
											<ul class="space-y-2">
												{#each step.points as point}
													<li class="flex items-start gap-2 text-gray-700">
														<span class="text-accent mt-1.5">•</span>
														<span>{point}</span>
													</li>
												{/each}
											</ul>
										</div>
									{/each}
								</div>
							</div>

							<!-- Related Services -->
							<div class="bg-gradient-to-br from-sage-light/20 to-warm-white rounded-xl p-6 border border-sage/20">
								<h4 class="text-lg font-bold text-charcoal mb-4">
									Related Health Coaching Services:
								</h4>
								<div class="flex flex-wrap gap-3">
									{#each plan.relatedServices as service}
										<a
											href={service.href}
											class="inline-flex items-center gap-2 bg-white hover:bg-sage-light/30 border border-sage/30 rounded-full px-4 py-2 text-sm font-medium text-charcoal transition-all hover:shadow-md"
										>
											<TrendingUp size={16} class="text-primary" />
											{service.name}
										</a>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="text-center mt-16">
			<p class="text-2xl text-gray-700 mb-6 font-medium">
				Ready to invest in your health?
			</p>
			<WhatsappButton message="Hi! I'd like to discuss Health Coaching options." variant="secondary" />
			<p class="text-gray-600 mt-6 max-w-xl mx-auto">
				Not sure which plan is right for you? Let's chat. Whether you're in Hamilton, Burlington, or the surrounding area, I'll help you choose the best option for your goals and situation.
			</p>
		</div>
	</div>
</section>

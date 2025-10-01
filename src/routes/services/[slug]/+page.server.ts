import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

interface ServiceData {
	slug: string;
	title: string;
	description: string;
	heroImage?: string;
	content: string;
	pricing: {
		title: string;
		price: string;
		duration?: string;
		features: string[];
		cta: string;
	}[];
}

const services: Record<string, ServiceData> = {
	'health-coaching': {
		slug: 'health-coaching',
		title: 'Health Coaching',
		description:
			'Personalized programs for digestive and genitourinary disorders, hypertension, diabetes, autoimmune conditions, and cancer nutrition.',
		content: `
## Your Partner in Chronic Condition Management

At Vicaria Health, we understand that managing chronic conditions requires more than just medication—it requires a comprehensive approach that addresses your lifestyle, nutrition, stress levels, and daily habits.

### What We Treat

Our health coaching programs specialize in:

- **Digestive Disorders**: IBS, Crohn's disease, ulcerative colitis, GERD, and food sensitivities
- **Genitourinary Conditions**: Recurrent UTIs, interstitial cystitis, and kidney health
- **Metabolic Conditions**: Type 2 diabetes, pre-diabetes, metabolic syndrome
- **Cardiovascular Health**: Hypertension, high cholesterol, heart disease prevention
- **Autoimmune Conditions**: Rheumatoid arthritis, lupus, Hashimoto's thyroiditis
- **Cancer Nutrition Support**: Nutritional guidance during and after cancer treatment

### Our Approach

We don't just tell you what to do—we work **with** you to create lasting change:

1. **Comprehensive Assessment**: We take time to understand your complete health picture
2. **Personalized Plan**: Every program is tailored to your specific needs and goals
3. **Step-by-Step Implementation**: We break down changes into manageable steps
4. **Regular Follow-ups**: Weekly or bi-weekly sessions to track progress and adjust
5. **Ongoing Support**: Access to guidance between sessions when you need it

### What to Expect

**First Consultation (60-90 minutes)**
- Complete health history review
- Current challenges and goals discussion
- Lab results review (if available)
- Initial action plan creation

**Follow-up Sessions (30-45 minutes)**
- Progress review and celebration of wins
- Challenge problem-solving
- Plan adjustments based on results
- New strategies and techniques introduction

### Why Choose Our Health Coaching?

- **Evidence-Based**: Our programs are grounded in current research and best practices
- **Bilingual Support**: All services available in English and Spanish
- **Flexible Format**: In-person, virtual, or home visits available
- **Holistic Focus**: We address nutrition, movement, stress, sleep, and lifestyle
- **Sustainable Changes**: Focus on long-term habits, not quick fixes
		`,
		pricing: [
			{
				title: 'Initial Consultation',
				price: '$150',
				duration: '60-90 minutes',
				features: [
					'Comprehensive health assessment',
					'Review of medical history and labs',
					'Personalized action plan',
					'Resource materials',
					'Follow-up summary email'
				],
				cta: 'Book Your Consultation'
			},
			{
				title: 'Monthly Coaching Package',
				price: '$480',
				duration: '4 sessions/month',
				features: [
					'Four 45-minute sessions',
					'Personalized meal plans',
					'Recipe suggestions',
					'Email support between sessions',
					'Progress tracking tools',
					'Educational materials'
				],
				cta: 'Start Your Program'
			},
			{
				title: 'Comprehensive 3-Month Program',
				price: '$1,350',
				duration: '12 sessions',
				features: [
					'Initial 90-minute consultation',
					'Eleven 45-minute follow-ups',
					'Customized nutrition plans',
					'Lifestyle modification support',
					'Unlimited email support',
					'Educational workshops access',
					'Final progress assessment'
				],
				cta: 'Transform Your Health'
			}
		]
	},
	'skin-tag-removal': {
		slug: 'skin-tag-removal',
		title: 'Skin Tag & Lesion Removal',
		description:
			'Safe, non-invasive treatment for benign skin conditions including skin tags, milia, and more.',
		content: `
## Professional Skin Lesion Treatment

Our specialized skin tag and lesion removal service provides safe, effective treatment for common benign skin conditions in a comfortable, professional setting.

### Conditions We Treat

- **Skin Tags**: Small, soft growths that typically appear on neck, armpits, and groin
- **Milia**: Small white bumps often found around eyes and cheeks
- **Ruby Points (Cherry Angiomas)**: Small, bright red spots caused by blood vessels
- **Seborrheic Keratosis**: Brown, black, or tan growths with a waxy appearance
- **Superficial Capillaries**: Visible small blood vessels on the face

### Our Process

**Consultation & Assessment**
We begin with a thorough examination to:
- Identify the type of lesion
- Confirm it's benign and suitable for treatment
- Discuss treatment options
- Answer all your questions

**Treatment**
- Quick, minimally invasive procedures
- Local anesthesia when needed
- Minimal to no downtime
- Professional aftercare instructions

### Why Choose Vicaria for Skin Lesion Removal?

- **Safe & Professional**: Performed by trained healthcare professionals
- **Comfortable Environment**: Private, clean, professional setting
- **Clear Communication**: Bilingual service ensures you understand everything
- **Affordable**: Transparent pricing with no hidden fees
- **Convenient**: Located in Hamilton with flexible scheduling
		`,
		pricing: [
			{
				title: 'Consultation',
				price: '$75',
				duration: '30 minutes',
				features: [
					'Professional assessment',
					'Treatment plan discussion',
					'Cost estimate',
					'Questions answered',
					'Applied to treatment if booked'
				],
				cta: 'Book Consultation'
			},
			{
				title: 'Per Lesion Treatment',
				price: '$50-150',
				duration: 'Varies',
				features: [
					'Professional removal',
					'Local anesthesia if needed',
					'Aftercare instructions',
					'Follow-up check included',
					'Price varies by size and type'
				],
				cta: 'Schedule Treatment'
			},
			{
				title: 'Multiple Lesion Package',
				price: 'Custom Quote',
				duration: '45-60 minutes',
				features: [
					'Treatment of multiple lesions',
					'Package discount applied',
					'Comprehensive aftercare',
					'Follow-up appointment included',
					'Contact for personalized quote'
				],
				cta: 'Get Your Quote'
			}
		]
	},
	'ambassador-service': {
		slug: 'ambassador-service',
		title: 'Ambassador Service',
		description:
			'We accompany Spanish-speaking clients to medical appointments to ensure clear communication and understanding.',
		content: `
## Your Voice at Medical Appointments

Language barriers in healthcare can be frightening and dangerous. Our Ambassador Service ensures you fully understand your medical care and that your healthcare providers understand you.

### What We Do

We accompany you to medical appointments and provide:

- **Professional Interpretation**: Clear, accurate medical translation
- **Cultural Mediation**: Bridge cultural differences in healthcare communication
- **Documentation**: Notes and summaries of appointments in Spanish
- **Advocacy**: Ensure your questions are answered and concerns addressed
- **Follow-up Support**: Help you understand instructions and next steps

### Who Benefits

This service is ideal for:
- Spanish-speaking individuals with limited English proficiency
- Patients with complex medical conditions requiring clear communication
- Elderly patients who are more comfortable in their native language
- Families who want to ensure they understand treatment plans
- Anyone who has felt confused or lost in medical settings

### Our Ambassador Process

**Before the Appointment**
- Discuss your medical history and concerns
- Prepare questions you want to ask
- Review any documentation you have
- Coordinate logistics and timing

**During the Appointment**
- Accompany you to the appointment
- Provide real-time interpretation
- Help you communicate your symptoms and concerns
- Ensure you understand diagnoses and treatments
- Take notes for your reference

**After the Appointment**
- Provide written summary in Spanish
- Explain next steps and instructions
- Help coordinate follow-up care if needed
- Answer any remaining questions

### Peace of Mind

Our service provides more than translation—it offers:
- **Confidence**: Know you're being heard and understood
- **Clarity**: Leave appointments knowing exactly what's happening
- **Empowerment**: Take an active role in your healthcare
- **Safety**: Reduce errors from miscommunication
- **Support**: Feel accompanied and advocated for
		`,
		pricing: [
			{
				title: 'Single Appointment',
				price: '$120',
				duration: 'Up to 2 hours',
				features: [
					'Pre-appointment consultation',
					'Accompaniment to appointment',
					'Real-time interpretation',
					'Written summary in Spanish',
					'Post-appointment follow-up call'
				],
				cta: 'Book Ambassador Service'
			},
			{
				title: 'Monthly Package',
				price: '$400',
				duration: '4 appointments',
				features: [
					'Four appointment accompaniments',
					'Unlimited pre-consultation calls',
					'Detailed written summaries',
					'Help coordinating follow-ups',
					'Priority scheduling',
					'Valid for 60 days'
				],
				cta: 'Get Monthly Package'
			},
			{
				title: 'Specialized Support',
				price: '$150/hour',
				duration: 'Extended appointments',
				features: [
					'Longer appointments (surgery, procedures)',
					'Complex medical situations',
					'Multiple specialists in one day',
					'Hospital accompaniment',
					'Emergency department support'
				],
				cta: 'Request Specialized Support'
			}
		]
	},
	'in-home-visits': {
		slug: 'in-home-visits',
		title: 'In-Home Visits',
		description:
			'Professional health coaching and support services delivered in the comfort of your home.',
		content: `
## Healthcare That Comes to You

Sometimes getting to appointments is the biggest barrier to care. Our in-home visit service brings professional health coaching and support directly to your door.

### Services Available at Home

All of our core services can be provided in your home:

- **Health Coaching Sessions**: Complete nutritional and lifestyle coaching
- **Follow-up Consultations**: Progress check-ins and plan adjustments
- **Dietary Assessments**: Kitchen reviews and meal planning support
- **Education Sessions**: Teaching and demonstration of health techniques
- **Ambassador Preparation**: Pre-appointment planning and preparation

### Who Benefits from Home Visits?

Our in-home service is perfect for:
- Individuals with mobility limitations
- Busy professionals who can't take time off work
- Parents with young children
- Elderly patients more comfortable at home
- Anyone recovering from illness or surgery
- People living in Hamilton, Burlington, Oakville, or Stoney Creek

### What to Expect

**Scheduling**
- Flexible appointment times, including evenings and weekends
- Advance booking recommended
- Same-week appointments often available
- Confirmation call 24 hours before visit

**The Visit**
- Professional, friendly service
- All necessary materials brought to you
- Comfortable, private consultation in your home
- Full session time dedicated to your needs
- No rushing or feeling pressured

**Safety & Professionalism**
- All standard health and safety protocols followed
- Professional conduct and boundaries
- Respect for your home and privacy
- Clear communication throughout

### Additional Benefits

**Practical Advantages**
- No travel time or parking hassles
- More comfortable environment
- See your actual kitchen and living space
- Family members can participate easily
- More time-efficient for you

**Better Care**
- We can provide more personalized advice seeing your environment
- Dietary recommendations based on what's actually in your kitchen
- Lifestyle suggestions tailored to your real-life setup
- More relaxed conversations often lead to better outcomes
		`,
		pricing: [
			{
				title: 'Single Home Visit',
				price: '$175',
				duration: '60 minutes',
				features: [
					'All services available',
					'Travel included (within service area)',
					'Flexible scheduling',
					'Full consultation time',
					'Follow-up summary provided'
				],
				cta: 'Schedule Home Visit'
			},
			{
				title: 'Home Visit Package',
				price: '$640',
				duration: '4 visits',
				features: [
					'Four 60-minute sessions',
					'Priority scheduling',
					'Same coach each visit',
					'Between-visit email support',
					'Educational materials',
					'Valid for 3 months'
				],
				cta: 'Get Visit Package'
			},
			{
				title: 'Extended Home Session',
				price: '$250',
				duration: '90 minutes',
				features: [
					'Longer consultation time',
					'Ideal for initial assessments',
					'Kitchen/home environment review',
					'Detailed meal planning',
					'Family education sessions'
				],
				cta: 'Book Extended Session'
			}
		]
	}
};

export const load: PageServerLoad = async ({ params }) => {
	const service = services[params.slug];

	if (!service) {
		throw error(404, 'Service not found');
	}

	return {
		service
	};
};

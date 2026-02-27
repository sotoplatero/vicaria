# Vicaria Health - Website Redesign Project Brief

## Executive Summary

Complete redesign of vicaria.ca to create Hamilton's best health coaching landing page. The new site will focus on converting visitors into clients through modern design, clear messaging, and optimized user experience for patients underserved by the healthcare system.

---

## Business Overview

**Business Name:** Vicaria Health
**Location:** Unit 2B 144 James St S, Hamilton, Ontario, L8P3A2
**Phone:** +1 (365) 336-9757
**Email:** [email protected]

**Mission:** Providing personalized nutrition coaching and health services to patients excluded or poorly served by the traditional healthcare system in Hamilton and surrounding areas.

---

## Target Audience

**Demographics:**
- Age: 35-60 years old
- Location: Hamilton and surrounding areas
- Language: English & Spanish speakers

**Pain Points:**
- Digestive disorders (IBS, GERD, food sensitivities)
- Genitourinary disorders
- Hypertension and Diabetes Mellitus
- Nutritional management of cancer
- Patients feeling excluded or poorly treated by conventional healthcare

**Psychographics:**
- Seeking personalized, empathetic healthcare
- Frustrated with one-size-fits-all medical approaches
- Willing to invest in their health
- Value holistic, symptom-specific treatment

---

## Services Offered

### Primary Service: Personalized Nutrition Coaching
Symptom-specific nutrition plans tailored to individual health conditions:
- Digestive disorder management
- Diabetes & hypertension nutrition therapy
- Cancer nutritional support
- Genitourinary health optimization

### Additional Service: Skin Tag Removal
Professional, safe skin tag removal service

---

## Design System

### Brand Personality
**Tone:** Warm & Nurturing
**Values:** Empathy, expertise, personalization, hope

### Color Palette (Modern Green & Pink)

**Primary Colors:**
- **Sage Green:** `#6B9080` (trust, health, calm)
- **Accent Green:** `#A4C3B2` (lighter, approachable)
- **Deep Green:** `#3D5A4B` (professional, credible)

**Secondary Colors:**
- **Soft Rose:** `#E8B4B8` (warmth, care)
- **Blush Pink:** `#F4DFE0` (nurturing, gentle)
- **Terracotta:** `#D4978E` (grounded, natural)

**Neutral Colors:**
- **Warm White:** `#FDFBF7` (backgrounds)
- **Warm Gray:** `#8B8985` (text secondary)
- **Charcoal:** `#2C2C2C` (text primary)

### Typography
- **Headings:** Inter (modern, professional, clean)
- **Body:** Inter (excellent readability)
- **Scale:** Mobile-first, fluid typography

---

## Site Structure & Components

### 1. Navigation Component (`Header.svelte`)
**Features:**
- Sticky header on scroll
- Logo (from vicaria.ca)
- Hamburger menu (mobile)
- CTA button: "Book Free Consultation"
- Smooth scroll to sections
- Mobile-first responsive

**Links:**
- Home
- Services
- About
- Testimonials
- Contact

---

### 2. Hero Section (`Hero.svelte`)

**Layout:** Full-screen, split layout (desktop) / stacked (mobile)

**Elements:**
- **Headline (H1):** "Personalized Nutrition Coaching for Your Unique Health Journey"
- **Subheadline:** "Specialized care for digestive disorders, diabetes, hypertension, and cancer nutrition in Hamilton"
- **Primary CTA:** "Book Your Free 15-Minute Consultation" (links to Cal.com)
- **Secondary CTA:** "Learn About Our Services" (scroll to services)
- **Hero Image:** Placeholder - warm, welcoming health coaching scene
- **Trust Badges:**
  - "Serving Hamilton for X years"
  - "Personalized care plans"
  - "Bilingual services (EN/ES)"

**Mobile Optimizations:**
- Stack elements vertically
- Reduce hero image size
- Prominent CTA buttons (min 48px tap target)

---

### 3. Services Section (`Services.svelte`)

**Layout:** Card-based grid (3 cols desktop / 1 col mobile)

**Service Cards:**

#### Card 1: Digestive Health Coaching
- Icon: Digestive system illustration
- Headline: "Digestive Disorder Management"
- Description: "Personalized nutrition plans for IBS, GERD, food sensitivities, and chronic digestive issues"
- CTA: "Learn More"

#### Card 2: Metabolic Health
- Icon: Heart/glucose monitor
- Headline: "Diabetes & Hypertension Care"
- Description: "Evidence-based nutritional therapy to manage blood sugar and blood pressure naturally"
- CTA: "Learn More"

#### Card 3: Cancer Nutrition Support
- Icon: Supportive hands
- Headline: "Cancer Nutritional Management"
- Description: "Compassionate nutrition guidance to support your body during cancer treatment and recovery"
- CTA: "Learn More"

#### Card 4: Genitourinary Health
- Icon: Health icon
- Headline: "Genitourinary Wellness"
- Description: "Specialized nutritional support for urinary and reproductive health conditions"
- CTA: "Learn More"

#### Card 5: Skin Tag Removal
- Icon: Dermatology icon
- Headline: "Professional Skin Tag Removal"
- Description: "Safe, quick, and effective skin tag removal procedures"
- CTA: "Book Appointment"

**Mobile Optimizations:**
- Full-width cards
- Touch-friendly spacing
- Icons scale appropriately

---

### 4. How It Works Section (`HowItWorks.svelte`)

**Layout:** 3-step process (horizontal desktop / vertical mobile)

**Steps:**
1. **Book Free Consultation**
   - Icon: Calendar
   - Description: "15-minute discovery call to understand your health goals"

2. **Get Your Personalized Plan**
   - Icon: Document/Chart
   - Description: "Receive a customized nutrition plan tailored to your symptoms"

3. **Start Your Healing Journey**
   - Icon: Growth/Arrow up
   - Description: "Ongoing support and adjustments as you progress"

**CTA:** "Start Today" → Cal.com booking

---

### 5. Testimonials Section (`Testimonials.svelte`)

**Layout:** Carousel/slider (3 visible desktop / 1 mobile)

**Mockup Testimonial Data Structure:**
```typescript
interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  quote: string;
  rating: number;
  avatar: string; // placeholder
}
```

**Sample Testimonials (Mockup):**

1. **Maria G. - Hamilton, ON**
   - Condition: Digestive Issues
   - Quote: "After years of struggling with IBS, Vicaria's personalized approach finally gave me relief. I wish I had found them sooner!"
   - Rating: 5/5

2. **James T. - Burlington, ON**
   - Condition: Type 2 Diabetes
   - Quote: "My A1C dropped significantly thanks to the tailored nutrition plan. The care and attention I received was exceptional."
   - Rating: 5/5

3. **Sofia R. - Stoney Creek, ON**
   - Condition: Cancer Support
   - Quote: "During my cancer treatment, Vicaria provided the nutritional guidance my oncologist couldn't. I felt supported and empowered."
   - Rating: 5/5

**Technical Note:** Component built for easy Google Reviews integration later

---

### 6. About Section (`About.svelte`)

**Layout:** Two-column (image + text on desktop / stacked mobile)

**Content:**

**Headline:** "Healthcare That Listens"

**Story/Philosophy:**
"At Vicaria Health, we understand the frustration of feeling unheard by the healthcare system. Too many patients in Hamilton are given generic advice that doesn't address their unique symptoms and circumstances.

We believe in personalized, compassionate care that treats you as an individual, not a diagnosis. Our evidence-based nutrition coaching is tailored specifically to your symptoms, lifestyle, and health goals.

Whether you're managing a chronic condition or seeking preventive care, we're here to guide you toward lasting health and vitality."

**Credentials Section:**
- Registered Holistic Nutritionist (RHN)
- Certified Nutritional Practitioner (CNP)
- Specialized training in [specific areas]
- Bilingual services (English/Spanish)

**Image:** Placeholder - professional headshot/team photo (warm, approachable)

**CTA:** "Meet Our Team" or "Book Consultation"

---

### 7. Contact/Booking Section (`Contact.svelte`)

**Layout:** Split layout (Contact info + Booking)

**Left Side - Contact Information:**
- **Address:** Unit 2B 144 James St S, Hamilton, Ontario, L8P3A2
- **Phone:** +1 (365) 336-9757
- **Email:** [email protected]
- **Hours:** [To be added]
- **Embedded Map:** Google Maps iframe (Hamilton location)

**Right Side - Cal.com Integration:**
- **Headline:** "Book Your Free 15-Minute Consultation"
- **Cal.com Embed:** Inline booking widget
- **Fallback:** "Having trouble booking? Call us at (365) 336-9757"

**Mobile Optimizations:**
- Stack vertically (contact info first)
- Full-width Cal.com embed
- Click-to-call phone button
- Click-to-email button

---

### 8. Footer Component (`Footer.svelte`)

**Sections:**

**Column 1 - Branding:**
- Vicaria Health logo
- Tagline: "Making your life healthier"
- Social media icons (placeholder)

**Column 2 - Quick Links:**
- Services
- About
- Testimonials
- Contact
- Blog (future)

**Column 3 - Services:**
- Digestive Health
- Diabetes Management
- Cancer Nutrition
- Skin Tag Removal

**Column 4 - Contact:**
- Phone
- Email
- Address
- Hours

**Bottom Bar:**
- © 2024 Vicaria Health. All rights reserved.
- Privacy Policy | Terms of Service
- Language selector (EN/ES)

---

## Conversion Optimization Strategy

### Primary CTA Placements:
1. Hero section (above fold)
2. After services section
3. After testimonials
4. Contact section
5. Sticky/floating CTA (mobile)

### Trust Building Elements:
- Client testimonials (social proof)
- Credentials and certifications
- Years of experience
- Bilingual services badge
- "Free consultation" (low barrier to entry)
- Hamilton-local emphasis

### SEO Keywords:
- Nutritionist Hamilton
- Diabetes nutrition coach Hamilton
- IBS nutritionist Hamilton
- Cancer nutrition support Hamilton
- Digestive health coach Hamilton
- Personalized nutrition Hamilton

---

## Technical Implementation

### Stack:
- **Framework:** SvelteKit 2 + Svelte 5 (runes)
- **Styling:** Tailwind CSS 4 + custom design tokens
- **Animations:** CSS transitions + view transitions API
- **Forms:** Cal.com embed
- **i18n:** Paraglide JS (EN/ES)
- **Hosting:** TBD

### Component Architecture:

```
src/
├── routes/
│   ├── +page.svelte (main landing page)
│   └── +layout.svelte
├── lib/
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── Hero.svelte
│   │   ├── Services.svelte
│   │   ├── HowItWorks.svelte
│   │   ├── Testimonials.svelte
│   │   ├── About.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   ├── types/
│   │   └── testimonial.ts
│   └── data/
│       └── testimonials.ts (mockup data)
```

### Responsive Breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md-lg)
- Desktop: > 1024px (xl)

### Performance Goals:
- Lighthouse Score: 95+
- Core Web Vitals: All green
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

---

## Mobile-First Design Principles

1. **Touch Targets:** Minimum 48x48px for all interactive elements
2. **Typography:** Minimum 16px body text (prevent iOS zoom)
3. **Forms:** Large, accessible input fields
4. **Navigation:** Hamburger menu with smooth transitions
5. **Images:** Optimized WebP with lazy loading
6. **CTAs:** Sticky bottom bar on scroll (mobile)
7. **Spacing:** Generous padding/margins for thumb-friendly UX
8. **Loading:** Skeleton screens for perceived performance

---

## Future Enhancements (Phase 2)

- Blog/Resources section for SEO
- Patient portal/login
- Google Reviews integration (replace mockup testimonials)
- Newsletter signup
- Online payment integration
- Spanish language toggle (full site translation)
- Booking confirmation emails
- Analytics & conversion tracking

---

## Success Metrics

### Primary KPIs:
- Booking conversion rate (target: 5-10%)
- Average time on page (target: 3+ minutes)
- Bounce rate (target: < 40%)
- Mobile usability score (target: 100)

### Secondary KPIs:
- CTA click-through rate
- Phone call conversions
- Email inquiries
- Service page engagement
- Testimonial section scroll depth

---

## Timeline Estimate

- Design system setup: 0.5 day
- Component development: 2-3 days
- Content integration: 1 day
- Mobile optimization: 1 day
- Testing & refinement: 0.5 day

**Total:** ~5 days for MVP

---

## Next Steps

1. ✅ Finalize brand colors and extract logo
2. ⏳ Set up Tailwind custom theme
3. ⏳ Build component library
4. ⏳ Implement responsive layouts
5. ⏳ Integrate Cal.com booking
6. ⏳ Mobile testing on real devices
7. ⏳ Performance optimization
8. ⏳ Deploy and launch

---

**Document Version:** 1.0
**Last Updated:** 2025-10-04
**Project Code:** VICARIA-REDESIGN-2024

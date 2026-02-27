<script lang="ts">
	import { ArrowRight, GraduationCap, Stethoscope, Globe } from '@lucide/svelte';

	interface Props {
		author?: string;
		authorCredentials?: string;
		category?: 'health-coaching' | 'skin-treatments';
	}

	let { author, authorCredentials, category = 'health-coaching' }: Props = $props();

	// Author details based on service category
	const authorDetails = {
		'Dr. Yamilet Pina': {
			photo: '/images/yamilet-pina.webp',
			shortBio: 'Medical doctor with over 20 years of experience in Integrative General Medicine and Urology. Certified Health Coach from the Institute for Integrative Nutrition (IIN) in New York.',
			specialties: ['Integrative Medicine', 'Urology', 'Health Coaching'],
			experience: '20+ years'
		},
		'Dr. Maurin Casella': {
			photo: '/images/maurin-casella.webp',
			shortBio: 'Medical doctor with over 20 years of experience in General Medicine and Pathology. Certified Health Coach from the Institute for Integrative Nutrition (IIN) in New York.',
			specialties: ['General Medicine', 'Pathology', 'Health Coaching'],
			experience: '20+ years'
		}
	};

	const details = author && authorDetails[author as keyof typeof authorDetails]
		? authorDetails[author as keyof typeof authorDetails]
		: authorDetails['Dr. Yamilet Pina'];
</script>

{#if author}
	<section class="mt-16 pt-12 border-t border-gray-200">
		<div class="bg-gradient-to-br from-sage-light/20 to-blush/10 rounded-2xl p-8 md:p-10">
			<div class="flex flex-col md:flex-row gap-8 items-start">
				<!-- Author photo -->
				<div class="flex-shrink-0">
					<a href="/about" class="block">
						<img
							src={details.photo}
							alt={author}
							class="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg border-4 border-white"
						/>
					</a>
				</div>

				<!-- Author info -->
				<div class="flex-1 space-y-4">
					<div>
						<p class="text-sm font-medium text-primary uppercase tracking-wide mb-1">About the Author</p>
						<h3 class="text-2xl font-bold text-charcoal">{author}</h3>
						{#if authorCredentials}
							<p class="text-gray-600">{authorCredentials}</p>
						{/if}
					</div>

					<p class="text-gray-700 leading-relaxed">
						{details.shortBio}
					</p>

					<!-- Credentials badges -->
					<div class="flex flex-wrap gap-3 pt-2">
						<div class="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full text-sm text-gray-700">
							<Stethoscope class="text-primary" size={16} />
							<span>{details.experience} Experience</span>
						</div>
						<div class="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full text-sm text-gray-700">
							<GraduationCap class="text-primary" size={16} />
							<span>IIN Certified</span>
						</div>
						<div class="inline-flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full text-sm text-gray-700">
							<Globe class="text-primary" size={16} />
							<span>Bilingual (EN/ES)</span>
						</div>
					</div>

					<!-- Link to full bio -->
					<div class="pt-2">
						<a
							href="/about"
							class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
						>
							Read full biography
							<ArrowRight size={18} />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

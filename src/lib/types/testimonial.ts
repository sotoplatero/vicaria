export interface Testimonial {
	id: string;
	name: string;
	location: string;
	condition: string;
	quote: string;
	rating: number;
	avatar?: string;
	source?: 'google' | 'manual';
	time?: number;
	googleUrl?: string;
}

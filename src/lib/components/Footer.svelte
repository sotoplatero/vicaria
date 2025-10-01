<script>
	import { MapPin, Phone } from 'lucide-svelte';
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content">
	<div class="grid grid-flow-col gap-4">
		<a href="#services" class="link link-hover">Services</a>
		<a href="#why-choose-us" class="link link-hover">Why Choose Us</a>
		<a href="#testimonials" class="link link-hover">Testimonials</a>
		<a href="#contact" class="link link-hover">Contact</a>
	</div>
	<div>
		<p class="font-bold">Vicaria Health</p>
		<p class="flex items-center justify-center gap-2">
			<MapPin class="w-4 h-4" />
			Unit 2B, 144 James St S, Hamilton, Ontario
		</p>
		<p class="flex items-center justify-center gap-2">
			<Phone class="w-4 h-4" />
			<a href="tel:+13653369757" class="link">+1 (365) 336-9757</a>
		</p>
	</div>
	<div>
		<p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
	</div>
</footer>

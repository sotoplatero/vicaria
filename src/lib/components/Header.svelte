<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import WhatsAppButton from './WhatsAppButton.svelte';

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = () => {
		isMenuOpen = false;
	};

	const handleScroll = () => {
		isScrolled = window.scrollY > 20;
	};

	$effect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});

	const navItems = [
		{ label: 'Services', href: '#services' },
		{ label: 'How It Works', href: '#how-it-works' },
		{ label: 'Testimonials', href: '#testimonials' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'glass shadow-lg border-b border-gray-200'
		: 'bg-transparent'}"
>
	<div class="container-custom">
		<nav class="flex items-center justify-between py-3">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group">
				<div class="flex items-center gap-3 relative">
					<img
						src="/logo.webp"
						alt="Vicaria Health"
						class="h-12 w-auto transition-transform group-hover:scale-105"
					/>
					<span class="hidden md:inline text-lg font-bold">Vicaria Health</span>
					<!-- Subtle glow on hover -->
					<!-- <div class="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div> -->
				</div>
			</a>

			<!-- Navigation Links & CTA -->
			<div class="flex items-center gap-6">

				<WhatsAppButton size="md" />
			</div>
		</nav>
	</div>
</header>

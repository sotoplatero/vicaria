<script lang="ts">
	import { Menu, X } from '@lucide/svelte';

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
		{ label: 'About', href: '#about' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'glass shadow-lg border-b border-gray-200'
		: 'bg-white'}"
>
	<div class="container-custom">
		<nav class="flex items-center justify-between py-4">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group">
				<div class="flex items-center gap-3 relative">
					<img
						src="/logo.jpg"
						alt="Vicaria Health"
						class="h-12 w-auto transition-transform group-hover:scale-105"
					/>
					<span class="text-lg font-bold">Vicaria Health</span>
					<!-- Subtle glow on hover -->
					<!-- <div class="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div> -->
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center gap-1">
				{#each navItems as item}
					<a
						href={item.href}
						onclick={closeMenu}
						class="px-4 py-2 rounded-xl text-gray-700 font-medium hover:text-primary hover:bg-primary/5 transition-all"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- CTA & Mobile Menu -->
			<div class="flex items-center gap-3">
				<a
					href="#contact"
					class="hidden md:inline-flex btn btn-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all border-0"
				>
					Book Free Consultation
				</a>

				<!-- Mobile Menu Button -->
				<button
					onclick={toggleMenu}
					class="lg:hidden btn btn-circle glass hover:scale-110 transition-all border-gray-200"
					aria-label="Toggle menu"
				>
					{#if isMenuOpen}
						<X size={24} class="text-primary" />
					{:else}
						<Menu size={24} class="text-primary" />
					{/if}
				</button>
			</div>
		</nav>
	</div>
</header>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
	<div class="fixed inset-0 z-40 lg:hidden animate-fade-in">
		<!-- Backdrop -->
		<button
			onclick={closeMenu}
			class="absolute inset-0 bg-black/50 backdrop-blur-sm"
			aria-label="Close menu"
		></button>

		<!-- Menu Panel -->
		<nav class="absolute top-20 right-4 left-4 glass rounded-3xl shadow-2xl p-6 animate-scale-in border border-gray-200">
			<ul class="space-y-2 mb-6">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							onclick={closeMenu}
							class="block px-6 py-4 rounded-2xl text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<div class="pt-4 border-t border-gray-200">
				<a
					href="#contact"
					onclick={closeMenu}
					class="btn btn-primary btn-block btn-lg shadow-lg border-0"
				>
					Book Free Consultation
				</a>
			</div>
		</nav>
	</div>
{/if}

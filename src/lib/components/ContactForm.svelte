<script lang="ts">
	import { Send, CheckCircle, AlertCircle } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';

	interface Props {
		accessKey: string;
	}

	let { accessKey }: Props = $props();

	interface FormData {
		name: string;
		email: string;
		phone: string;
		subject: string;
		message: string;
	}

	interface FormErrors {
		name?: string;
		email?: string;
		subject?: string;
		message?: string;
	}

	let formData = $state<FormData>({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	let errors = $state<FormErrors>({});
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

	function validateEmail(email: string): boolean {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	}

	function validateForm(): boolean {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = m.contact_form_required();
		}

		if (!formData.email.trim()) {
			newErrors.email = m.contact_form_required();
		} else if (!validateEmail(formData.email)) {
			newErrors.email = m.contact_form_invalid_email();
		}

		if (!formData.subject.trim()) {
			newErrors.subject = m.contact_form_required();
		}

		if (!formData.message.trim()) {
			newErrors.message = m.contact_form_required();
		}

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;
		submitStatus = 'idle';

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					access_key: accessKey,
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					subject: formData.subject,
					message: formData.message
				})
			});

			const result = await response.json();

			if (result.success) {
				submitStatus = 'success';
				// Reset form
				formData = {
					name: '',
					email: '',
					phone: '',
					subject: '',
					message: ''
				};
				errors = {};
			} else {
				submitStatus = 'error';
			}
		} catch (error) {
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}

	function resetStatus() {
		submitStatus = 'idle';
	}
</script>

<div class="w-full max-w-2xl mx-auto">
	<!-- Success Message -->
	{#if submitStatus === 'success'}
		<div
			class="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-fade-in"
		>
			<CheckCircle class="w-16 h-16 text-green-500 mx-auto mb-4" />
			<h3 class="text-2xl font-bold text-green-800 mb-2">
				{m.contact_form_success_title()}
			</h3>
			<p class="text-green-700 mb-6">
				{m.contact_form_success_message()}
			</p>
			<button onclick={resetStatus} class="btn btn-primary btn-md">
				{m.contact_form_submit()}
			</button>
		</div>
	{:else if submitStatus === 'error'}
		<!-- Error Message -->
		<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center animate-fade-in">
			<AlertCircle class="w-16 h-16 text-red-500 mx-auto mb-4" />
			<h3 class="text-2xl font-bold text-red-800 mb-2">
				{m.contact_form_error_title()}
			</h3>
			<p class="text-red-700 mb-6">
				{m.contact_form_error_message()}
			</p>
			<button onclick={resetStatus} class="btn btn-primary btn-md">
				{m.contact_form_submit()}
			</button>
		</div>
	{:else}
		<!-- Contact Form -->
		<form
			onsubmit={handleSubmit}
			class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
		>
			<h2 class="text-3xl font-bold text-charcoal mb-6">{m.contact_form_title()}</h2>
			
			<input type="hidden" name="access_key" value="8c4dc42f-f5fa-484f-9131-3ec7052487ca">
			<input type="hidden" name="replyto" value="maurin.casella@gmail.com" />
			<input type="hidden" name="subject" value="Contact from Vicaria Web Site">
			<!-- Name Field -->
			<div class="mb-6">
				<label for="name" class="block text-sm font-semibold text-charcoal mb-2">
					{m.contact_form_name_label()}
					<span class="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					placeholder={m.contact_form_name_placeholder()}
					class="input input-bordered w-full bg-warm-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
					class:border-red-500={errors.name}
					disabled={isSubmitting}
				/>
				{#if errors.name}
					<p class="text-red-500 text-sm mt-1">{errors.name}</p>
				{/if}
			</div>

			<!-- Email Field -->
			<div class="mb-6">
				<label for="email" class="block text-sm font-semibold text-charcoal mb-2">
					{m.contact_form_email_label()}
					<span class="text-red-500">*</span>
				</label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					placeholder={m.contact_form_email_placeholder()}
					class="input input-bordered w-full bg-warm-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
					class:border-red-500={errors.email}
					disabled={isSubmitting}
				/>
				{#if errors.email}
					<p class="text-red-500 text-sm mt-1">{errors.email}</p>
				{/if}
			</div>

			<!-- Phone Field -->
			<div class="mb-6">
				<label for="phone" class="block text-sm font-semibold text-charcoal mb-2">
					{m.contact_form_phone_label()}
				</label>
				<input
					type="tel"
					id="phone"
					bind:value={formData.phone}
					placeholder={m.contact_form_phone_placeholder()}
					class="input input-bordered w-full bg-warm-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
					disabled={isSubmitting}
				/>
			</div>

			<!-- Message Field -->
			<div class="mb-8">
				<label for="message" class="block text-sm font-semibold text-charcoal mb-2">
					{m.contact_form_message_label()}
					<span class="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					bind:value={formData.message}
					placeholder={m.contact_form_message_placeholder()}
					rows="6"
					class="textarea textarea-bordered w-full bg-warm-white border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
					class:border-red-500={errors.message}
					disabled={isSubmitting}
				></textarea>
				{#if errors.message}
					<p class="text-red-500 text-sm mt-1">{errors.message}</p>
				{/if}
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={isSubmitting}
				class="btn btn-primary btn-lg w-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group border-0"
			>
				{#if isSubmitting}
					<span class="loading loading-spinner"></span>
					{m.contact_form_submitting()}
				{:else}
					<Send class="w-5 h-5" />
					{m.contact_form_submit()}
				{/if}
			</button>
		</form>
	{/if}
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.4s ease-out;
	}
</style>

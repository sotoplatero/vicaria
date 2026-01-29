<script lang="ts">
	import { Shield, Check, AlertCircle, RefreshCw } from "@lucide/svelte";
</script>

<section class="py-20 bg-gradient-to-br from-white to-warm-white">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
				Insurance & Payment Information
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Everything you need to know about insurance coverage, payment
				options, and our policies.
			</p>
		</div>

		<div class="max-w-4xl mx-auto space-y-16">
			<!-- Insurance Coverage -->
			<div>
				<h3
					class="text-3xl font-bold text-charcoal mb-8 flex items-center gap-3"
				>
					<Shield class="text-primary" size={32} />
					Insurance Coverage
				</h3>

				<div class="space-y-8">
					<!-- Health Coaching -->
					<div class="space-y-4">
						<h4 class="text-xl font-bold text-charcoal">
							Health Coaching Services
						</h4>
						<p class="text-gray-700 leading-relaxed">
							<strong class="text-charcoal">Good news!</strong> Many
							extended health insurance plans cover consultations with
							Registered Nutritional Practitioners. Check your plan's
							coverage for "nutritionist," "dietitian," or "complementary
							health practitioners."
						</p>
						<ul class="space-y-3 pl-4">
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<span class="text-gray-700"
									>Often covered under "Nutritionist" or
									"Dietitian" benefits</span
								>
							</li>
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<span class="text-gray-700"
									>Check your plan for "complementary health
									practitioners" coverage</span
								>
							</li>
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<span class="text-gray-700"
									>We provide detailed official receipts with
									all required information</span
								>
							</li>
						</ul>

						<div class="mt-4 pl-4">
							<p class="text-sm font-semibold text-charcoal mb-2">
								Your receipt includes:
							</p>
							<ul class="text-sm text-gray-600 space-y-1 pl-4">
								<li>
									• Practitioner credentials and registration
									number
								</li>
								<li>• Date and duration of service</li>
								<li>• Detailed service description</li>
								<li>• Total amount paid</li>
							</ul>
						</div>
					</div>

					<!-- Skin Treatments -->
					<div class="space-y-4 pt-8 border-t border-gray-200">
						<h4 class="text-xl font-bold text-charcoal">
							Skin Treatment Services
						</h4>
						<p class="text-gray-700 leading-relaxed">
							<strong class="text-charcoal">Important:</strong> Skin
							tag removal and similar cosmetic procedures are NOT covered
							by OHIP or most insurance plans. These are considered
							cosmetic, not medically necessary. Payment is required
							at time of service, and we provide receipts for your
							records.
						</p>
					</div>

					<!-- How to Submit Claims -->
					<div class="space-y-4 pt-8 border-t border-gray-200">
						<h4 class="text-xl font-bold text-charcoal">
							How to Submit Your Insurance Claim
						</h4>
						<ol class="space-y-3">
							<li class="flex items-start gap-4">
								<span
									class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5"
									>1</span
								>
								<span class="text-gray-700"
									>Keep your detailed receipt from our session</span
								>
							</li>
							<li class="flex items-start gap-4">
								<span
									class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5"
									>2</span
								>
								<span class="text-gray-700"
									>Check with your insurance provider for
									their claim process</span
								>
							</li>
							<li class="flex items-start gap-4">
								<span
									class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5"
									>3</span
								>
								<span class="text-gray-700"
									>Submit receipt along with any required
									claim forms</span
								>
							</li>
							<li class="flex items-start gap-4">
								<span
									class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5"
									>4</span
								>
								<span class="text-gray-700"
									>Reimbursement typically processed within
									2-4 weeks</span
								>
							</li>
						</ol>
					</div>
				</div>
			</div>

			<!-- Payment Information -->
			<div class="border-t border-gray-200 pt-16">
				<h3 class="text-3xl font-bold text-charcoal mb-8">
					Payment Information
				</h3>

				<div class="space-y-8">
					<!-- Payment Methods -->
					<div class="space-y-4">
						<h4 class="text-xl font-bold text-charcoal">
							We Accept
						</h4>
						<p class="text-gray-700 leading-relaxed">
							<strong class="text-charcoal">Credit Card</strong>
							(Visa, Mastercard, Amex) •
							<strong class="text-charcoal">Debit Card</strong>
							(all major debit cards) •
							<strong class="text-charcoal">E-Transfer</strong>
							(Interac e-Transfer) •
							<strong class="text-charcoal">Cash</strong> (cash payments
							welcome)
						</p>
						<p class="text-sm text-gray-600">
							All card transactions are processed through secure,
							encrypted payment systems. Your financial
							information is never stored and remains completely
							confidential.
						</p>
					</div>

					<!-- Payment Terms -->
					<div class="space-y-4 pt-8 border-t border-gray-200">
						<h4 class="text-xl font-bold text-charcoal">
							Payment Terms
						</h4>
						<ul class="space-y-3">
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										Payment due at time of service
									</p>
									<p class="text-sm text-gray-600">
										All sessions must be paid when rendered
									</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										Packages paid in full upfront
									</p>
									<p class="text-sm text-gray-600">
										Multi-session packages require full
										payment at time of booking
									</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<AlertCircle
									class="text-secondary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										No payment plans currently available
									</p>
									<p class="text-sm text-gray-600">
										Full payment required we do not offer
										installment options at this time
									</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										Receipts provided immediately
									</p>
									<p class="text-sm text-gray-600">
										Digital receipt sent via email after
										each payment
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Cancellation & Refund Policy -->
			<div class="border-t border-gray-200 pt-16">
				<h3
					class="text-3xl font-bold text-charcoal mb-8 flex items-center gap-3"
				>
					<RefreshCw class="text-accent" size={32} />
					Cancellation & Refund Policy
				</h3>

				<div class="grid md:grid-cols-2 gap-12">
					<div class="space-y-4">
						<h4 class="text-xl font-bold text-charcoal">
							Cancellation Policy
						</h4>
						<ul class="space-y-3">
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										24-hour notice required
									</p>
									<p class="text-sm text-gray-600">
										Cancel or reschedule at least 24 hours
										before your appointment
									</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<AlertCircle
									class="text-secondary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										Late cancellations
									</p>
									<p class="text-sm text-gray-600">
										Cancellations within 24 hours may result
										in session forfeiture
									</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<AlertCircle
									class="text-secondary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										No-shows
									</p>
									<p class="text-sm text-gray-600">
										No-show appointments will forfeit the
										session with no refund
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div class="space-y-4">
						<h4 class="text-xl font-bold text-charcoal">
							Refund Policy
						</h4>
						<ul class="space-y-3">
							<li class="flex items-start gap-3">
								<AlertCircle
									class="text-secondary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										Packages are non-refundable
									</p>
									<p class="text-sm text-gray-600">
										Multi-session packages cannot be
										refunded once purchased
									</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										Packages are transferable
									</p>
									<p class="text-sm text-gray-600">
										Unused sessions can be transferred to
										another person with notice
									</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<Check
									class="text-primary flex-shrink-0 mt-1"
									size={18}
								/>
								<div>
									<p class="font-semibold text-charcoal">
										Package validity
									</p>
									<p class="text-sm text-gray-600">
										Sessions must be used within 6 months of
										purchase date
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div class="mt-8 pt-6 border-t border-gray-200">
					<p class="text-gray-700 leading-relaxed">
						<strong class="text-charcoal">Life happens.</strong> If you
						need to cancel or reschedule, please contact us as soon as
						possible. We understand emergencies occur and will work with
						you when we can. Communication is key!
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

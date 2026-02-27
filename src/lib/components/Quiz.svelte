<script lang="ts">
    import type { Quiz, QuizQuestion } from "$lib/types/quiz";

    let {
        quiz,
        oncomplete,
        oncancel,
    }: {
        quiz: Quiz;
        oncomplete: (answers: Record<string, any>) => void;
        oncancel?: () => void;
    } = $props();

    // Quiz state
    let currentStep = $state(0);
    let answers = $state<Record<string, any>>({});
    let showLeadCapture = $state(false);
    let leadData = $state<Record<string, string>>({});

    // Get current question
    const currentQuestion = $derived<QuizQuestion | undefined>(
        quiz.quiz_questions[currentStep],
    );

    // Check if current question is answered
    const isAnswered = $derived(() => {
        if (!currentQuestion) return false;
        return answers[currentQuestion.field_id] !== undefined;
    });

    // Handle answer
    function handleAnswer(fieldId: string, value: any) {
        answers[fieldId] = value;
    }

    // Next question
    function nextQuestion() {
        if (currentStep < quiz.quiz_questions.length - 1) {
            currentStep++;
        } else {
            // Quiz questions completed, show lead capture
            showLeadCapture = true;
        }
    }

    // Previous question
    function previousQuestion() {
        if (showLeadCapture) {
            showLeadCapture = false;
        } else if (currentStep > 0) {
            currentStep--;
        } else if (oncancel) {
            oncancel();
        }
    }

    // Handle lead capture submit
    function submitLeadCapture(e: Event) {
        e.preventDefault();
        // Combine answers and lead data
        oncomplete({ ...answers, ...leadData });
    }

    // Progress percentage
    const progress = $derived((currentStep / quiz.quiz_questions.length) * 100);
</script>

<div class="min-h-screen bg-gradient-to-br from-primary/5 to-white py-12">
    <div class="container-custom max-w-3xl">
        <!-- Progress Bar -->
        <div class="mb-8">
            <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-gray-600"
                    >Question {currentStep + 1} of {quiz.quiz_questions
                        .length}</span
                >
                <span class="text-sm font-medium text-primary"
                    >{Math.round(progress)}%</span
                >
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                    class="bg-primary h-2 rounded-full transition-all duration-300"
                    style="width: {progress}%"
                ></div>
            </div>
        </div>

        {#if showLeadCapture}
            <!-- Lead Capture Form -->
            <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
                <h2 class="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    {quiz.lead_capture.headline}
                </h2>
                <p class="text-gray-600 mb-8">
                    {quiz.lead_capture.subheadline}
                </p>

                <form onsubmit={submitLeadCapture} class="space-y-6">
                    {#each quiz.lead_capture.fields as field}
                        {#if field.type !== "tel" && field.name !== "phone"}
                            <div class="form-control w-full">
                                <label class="label" for={field.name}>
                                    <span class="label-text font-medium"
                                        >{field.placeholder}</span
                                    >
                                </label>
                                <input
                                    type={field.type}
                                    id={field.name}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    bind:value={leadData[field.name]}
                                    class="input input-bordered w-full"
                                />
                            </div>
                        {/if}
                    {/each}

                    <p class="text-xs text-gray-500 mt-4">
                        {quiz.lead_capture.consent_text}
                    </p>

                    <div class="flex items-center justify-between gap-4 mt-8">
                        <button
                            type="button"
                            onclick={previousQuestion}
                            class="btn btn-outline"
                        >
                            Back
                        </button>
                        <button type="submit" class="btn btn-primary">
                            {quiz.lead_capture.submit_button}
                        </button>
                    </div>
                </form>
            </div>
        {:else}
            <!-- Question Card -->
            {#if currentQuestion}
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
                    <!-- Show intro text for first question if available -->
                    {#if currentQuestion.intro_text && currentStep === 0}
                        <p class="text-primary font-medium mb-4 text-center">
                            {currentQuestion.intro_text}
                        </p>
                    {/if}

                    <h2
                        class="text-2xl md:text-3xl font-bold text-charcoal mb-8"
                    >
                        {currentQuestion.question}
                    </h2>

                    <!-- Question Type: Single Choice -->
                    {#if currentQuestion.type === "single_choice" && currentQuestion.options}
                        <div class="space-y-3">
                            {#each currentQuestion.options as option}
                                <button
                                    onclick={() =>
                                        handleAnswer(
                                            currentQuestion.field_id,
                                            option.value,
                                        )}
                                    class="w-full text-left p-4 rounded-xl border-2 transition-all {answers[
                                        currentQuestion.field_id
                                    ] === option.value
                                        ? 'border-primary bg-primary/10'
                                        : 'border-gray-200 hover:border-primary/50 bg-white'}"
                                >
                                    <span class="font-medium text-gray-800"
                                        >{option.label}</span
                                    >
                                </button>
                            {/each}
                        </div>
                    {/if}

                    <!-- Question Type: Multiple Choice -->
                    {#if currentQuestion.type === "multiple_choice" && currentQuestion.options}
                        <div class="space-y-3">
                            {#each currentQuestion.options as option}
                                {@const selectedValues =
                                    answers[currentQuestion.field_id] || []}
                                {@const isSelected = selectedValues.includes(
                                    option.value,
                                )}
                                <button
                                    onclick={() => {
                                        const current =
                                            answers[currentQuestion.field_id] ||
                                            [];
                                        if (isSelected) {
                                            handleAnswer(
                                                currentQuestion.field_id,
                                                current.filter(
                                                    (v: string) =>
                                                        v !== option.value,
                                                ),
                                            );
                                        } else {
                                            handleAnswer(
                                                currentQuestion.field_id,
                                                [...current, option.value],
                                            );
                                        }
                                    }}
                                    class="w-full text-left p-4 rounded-xl border-2 transition-all {isSelected
                                        ? 'border-primary bg-primary/10'
                                        : 'border-gray-200 hover:border-primary/50 bg-white'}"
                                >
                                    <span class="font-medium text-gray-800"
                                        >{option.label}</span
                                    >
                                </button>
                            {/each}
                        </div>
                        <p class="text-sm text-gray-500 mt-3">
                            Select up to {currentQuestion.max_selections ||
                                "all"} options
                        </p>
                    {/if}

                    <!-- Question Type: Scale -->
                    {#if currentQuestion.type === "scale"}
                        <div class="space-y-4">
                            <input
                                type="range"
                                min={currentQuestion.min}
                                max={currentQuestion.max}
                                value={answers[currentQuestion.field_id] ||
                                    currentQuestion.min}
                                oninput={(e) =>
                                    handleAnswer(
                                        currentQuestion.field_id,
                                        parseInt(e.currentTarget.value),
                                    )}
                                class="range range-primary w-full"
                            />
                            <div
                                class="flex justify-between text-sm text-gray-600"
                            >
                                <span
                                    >{currentQuestion.labels?.min ||
                                        currentQuestion.min}</span
                                >
                                <span class="font-bold text-primary text-lg"
                                    >{answers[currentQuestion.field_id] ||
                                        currentQuestion.min}</span
                                >
                                <span
                                    >{currentQuestion.labels?.max ||
                                        currentQuestion.max}</span
                                >
                            </div>
                        </div>
                    {/if}

                    <!-- Question Type: Textarea -->
                    {#if currentQuestion.type === "textarea"}
                        <textarea
                            value={answers[currentQuestion.field_id] || ""}
                            oninput={(e) =>
                                handleAnswer(
                                    currentQuestion.field_id,
                                    e.currentTarget.value,
                                )}
                            placeholder={currentQuestion.placeholder}
                            maxlength={currentQuestion.max_length}
                            class="textarea textarea-bordered w-full h-32 text-base"
                        ></textarea>
                        {#if currentQuestion.max_length}
                            <p class="text-sm text-gray-500 mt-2">
                                {(answers[currentQuestion.field_id] || "")
                                    .length} / {currentQuestion.max_length} characters
                            </p>
                        {/if}
                    {/if}
                </div>
            {/if}

            <!-- Navigation Buttons -->
            <div class="flex items-center justify-between gap-4">
                <button onclick={previousQuestion} class="btn btn-outline">
                    Previous
                </button>

                <button
                    onclick={nextQuestion}
                    disabled={!isAnswered()}
                    class="btn btn-primary"
                >
                    {currentStep === quiz.quiz_questions.length - 1
                        ? "Next"
                        : "Next"}
                </button>
            </div>
        {/if}
    </div>
</div>

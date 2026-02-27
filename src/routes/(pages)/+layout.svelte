<script lang="ts">
	let { children } = $props();
</script>

<article class="prose prose-lg mx-auto">
    {@render children?.()}
</article>

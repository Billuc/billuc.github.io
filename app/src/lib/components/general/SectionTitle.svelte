<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="my-8 flex flex-row flex-nowrap justify-center">
	<div
		class="
		rounded-md shadow-xl p-4
		text-zinc-800 dark:text-zinc-700 bg-yellow-400 dark:bg-yellow-600
		font-black uppercase text-center text-4xl
	"
	>
		{@render children?.()}
	</div>
</div>

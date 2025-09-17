<script lang="ts">
	interface Props {
		class?: string;
		background?: string;
		color?: string;
		children?: import('svelte').Snippet;
	}

	let {
		class: className = '',
		background = 'bg-yellow-500 dark:bg-yellow-500',
		color = 'text-zinc-800 dark:text-zinc-800',
		children
	}: Props = $props();
</script>

<div class={`rounded-md shadow-xl ${className} ${background} ${color}`}>
	{@render children?.()}
</div>

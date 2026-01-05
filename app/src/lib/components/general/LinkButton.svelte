<script lang="ts">
	interface Props {
		to: string;
		download?: string | undefined;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { to, download = undefined, class: className = '', children }: Props = $props();
</script>

<a
	href={to}
	class={[
		'rounded-sm overflow-hidden',
		'flex justify-center items-center',
		'transition-colors duration-200',
		'bg-slate-900 text-slate-100 hover:text-red-300',
		'py-1 px-8',
		'text-base',
		className
	]}
	{download}
>
	{@render children?.()}
</a>

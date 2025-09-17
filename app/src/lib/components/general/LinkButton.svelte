<script lang="ts">
	import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	interface Props {
		to: string;
		download?: string | undefined;
		compact?: boolean | undefined;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		to,
		download = undefined,
		compact = undefined,
		class: className = '',
		children
	}: Props = $props();
</script>

<a
	href={to}
	class={`
		rounded-sm overflow-hidden 
		flex justify-center items-center 
		transition-colors duration-200
		bg-slate-900 text-slate-100 hover:text-red-300
		${compact ? 'py-0 px-6' : 'py-1 px-8'}
		${compact ? 'text-sm' : 'text-base'}
		${className}
	`}
	{download}
>
	{@render children?.()}
	<div class={`${compact ? 'ml-2' : 'ml-4'} duration-150 rotate-90`}>
		<Fa icon={faArrowUp} />
	</div>
</a>

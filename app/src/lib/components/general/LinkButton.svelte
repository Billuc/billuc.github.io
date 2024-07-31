<script lang="ts">
	import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let to: string;
	export let download: string | undefined = undefined;
	export let compact: boolean | undefined = undefined;

	let className: string = '';

	export { className as class };
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
	<slot />
	<div class={`${compact ? 'ml-2' : 'ml-4'} duration-150 rotate-90`}>
		<Fa icon={faArrowUp} />
	</div>
</a>

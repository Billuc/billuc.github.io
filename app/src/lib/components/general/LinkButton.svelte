<script lang="ts">
	import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
		rounded-full overflow-hidden 
		flex justify-center items-center 
		bg-stone-900 text-slate-100 hover:bg-slate-900 hover:text-pink-100
		${compact ? 'border' : 'border-2'} border-stone-900 hover:border-pink-600
		${compact ? 'py-0 px-6 hover:px-4' : 'py-1 px-8 hover:px-6'}
		${compact ? 'text-sm' : 'text-base'}
		group duration-150 ${className}
	`}
	{download}
>
	<slot />
	<div
		class={`
		${compact ? 'ml-2 group-hover:ml-6' : 'ml-4 group-hover:ml-8'}
		duration-150 rotate-90
	`}
	>
		<Fa icon={faArrowUp} class="animate-bounce" />
	</div>
</a>

<script lang="ts">
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let to: string;
	export let download: string | undefined = undefined;

	let className: string = '';

	export { className as class };
</script>

<a
	href={to}
	class={`rounded-full overflow-hidden 
		flex justify-center items-center 
		shadow-xl
		bg-slate-900 text-slate-50 hover:bg-slate-800
		px-8 py-1 hover:px-6
		group duration-150 ${className}`}
	{download}
>
	<slot />
	<Fa icon={faArrowRight} class="ml-2 group-hover:ml-6 duration-150" />
</a>

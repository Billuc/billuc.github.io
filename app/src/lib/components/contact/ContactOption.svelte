<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	let className: string = '';
	export { className as class };

	export let icon: IconDefinition;
	export let title: string;
	export let link: string;
</script>

<a href={link} class="flex flex-row flex-nowrap group items-center my-1">
	<div class={'text-xl ' + className}><Fa {icon} /></div>
	<div class="relative ml-2">
		<div
			class="
				absolute left-0 bottom-0 w-0 h-px 
				transition-[width] duration-300 group-hover:w-full
				bg-teal-500
			"
		/>
		{title}
	</div>
</a>

<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	$: isIcon = typeof skill !== 'string';

	export let skill: IconDefinition | string;
</script>

<div
	class="
		rounded-full bg-teal-50 text-zinc-900 
		flex justify-center items-center 
		w-6 h-6 my-1 drop-shadow-xl text-xs
	"
>
	{#if isIcon}
		<Fa icon={skill} size="lg" />
	{:else}
		{skill}
	{/if}
</div>

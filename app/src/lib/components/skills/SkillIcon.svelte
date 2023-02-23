<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	$: isIcon = typeof skill !== 'string';
	$: iconString = skill as string;
	$: isImage = !isIcon && iconString.startsWith('http');

	export let skill: IconDefinition | string;
	export let color: string;
	export let size: string = 'text-xl';
</script>

<div
	class={`rounded-full bg-teal-50 text-zinc-900 
		flex justify-center items-center 
		w-12 h-12 shadow-xl ${size}`}
>
	{#if isIcon}
		<Fa icon={skill} {color} size="lg" />
	{:else if isImage}
		<img src={iconString} alt={iconString} class="max-w-10 max-h-10 p-1" />
	{:else}
		{skill}
	{/if}
</div>

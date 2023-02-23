<script lang="ts">
	import { type Proficiency, MAXIMUM_PROFICIENCY, Proficiencies } from '$lib/model';
	import Tooltip from '../general/Tooltip.svelte';

	export let proficiency: Proficiency;
</script>

<Tooltip>
	<div class="flex w-full h-1" slot="activator">
		{#each Array(MAXIMUM_PROFICIENCY) as _, i}
			{#if i < proficiency}
				<div class="bg-amber-600 w-1/4 h-1" />
			{:else}
				<div class="bg-zinc-300 w-1/4 h-1" />
			{/if}
		{/each}
	</div>
	<div slot="tooltip" class="w-max">
		{Proficiencies[proficiency]}
	</div>
</Tooltip>

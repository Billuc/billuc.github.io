<script lang="ts">
	import { type Proficiency, MAXIMUM_PROFICIENCY, Proficiencies } from '$lib/model';

	export let proficiency: Proficiency;
</script>

<div class="flex w-full h-2">
	{#each Array(MAXIMUM_PROFICIENCY) as _, i}
		{#if i < proficiency}
			<div class="bg-teal-600 w-1/4 h-2" />
		{:else}
			<div class="bg-zinc-300 w-1/4 h-2" />
		{/if}
	{/each}
</div>
<div class="w-full text-zinc-800">
	{Proficiencies[proficiency]}
</div>

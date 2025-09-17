<script lang="ts">
	import { Skills } from '$lib/model/skills';
	import SkillCategory from './SkillCategory.svelte';
</script>

<div class="py-16 text-center w-full">
	<div class="flex flex-col items-center">
		<span class="text-4xl font-black text-slate-900">My skills</span>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40"></div>

		{#each Skills as category}
			<SkillCategory {category} />
		{/each}
	</div>
</div>

<script lang="ts">
	import { Skills } from '$lib/model/skills';
	import SkillCard from './SkillCard.svelte';
</script>

<div
	class="
		flex flex-col gap-8
		justify-center items-start
		w-full
	"
>
	<span class="text-4xl font-black text-slate-900">My skills</span>

	<div class="flex flex-col md:flex-row gap-4 w-full">
		{#each Skills as category}
			<SkillCard {category} />
		{/each}
	</div>
</div>

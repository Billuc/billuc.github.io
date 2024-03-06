<script lang="ts">
	import type { Skill, SkillCategory } from '$lib/model/skills';
	import SkillCardFront from './SkillCardFront.svelte';
	import SkillCardBack from './SkillCardBack.svelte';
	import '$lib/assets/css/skills.css';

	export let category: SkillCategory;
	let flipped = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-full md:w-1/4 relative h-80 rounded-md overflow-hidden"
	class:flipped
	on:click={(_) => (flipped = !flipped)}
>
	<SkillCardFront {category} />
	<SkillCardBack {category} />
</div>

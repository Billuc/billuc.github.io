<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import SkillIcon from './SkillIcon.svelte';

	import type { Proficiency } from '$lib/model';
	import SkillProficiency from './SkillProficiency.svelte';

	export let name: string;
	export let skill: IconDefinition | string;
	export let color: string = '';
	export let proficiency: Proficiency;
	export let size: string = 'text-xl';
</script>

<div class="w-10 group/card relative transition-all duration-300 hover:mr-3">
	<SkillIcon {skill} {color} {size} class="ring-2 ring-yellow-400 dark:ring-yellow-600" />

	<div
		class="
			absolute bottom-14 left-1/2 -translate-x-1/2
			w-48 p-2 rounded-md z-10
			bg-yellow-400 dark:bg-yellow-600
			scale-0 group-hover/card:scale-100 transition-transform duration-500
			"
	>
		<div class="mb-2 text-zinc-800 font-bold">{name}</div>
		<SkillProficiency {proficiency} />
	</div>
</div>

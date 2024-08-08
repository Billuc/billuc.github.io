<script lang="ts">
	import type { Skill, SkillCategory } from '$lib/model/skills';
	import { MAXIMUM_PROFICIENCY } from '$lib/model/proficiency';
	import Chip from '../general/Chip.svelte';
	import Fa from 'svelte-fa';
	import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
	import { faStar } from '@fortawesome/free-regular-svg-icons';

	export let category: SkillCategory;

	$: skillsOrderedByProficiency = orderByProficiency(category.skills);

	const orderByProficiency = (skills: Skill[]) => {
		return skills.sort((skillA, skillB) => skillB.proficiency - skillA.proficiency);
	};
</script>

<div class="text-2xl font-black my-4">{category.title}</div>

<div class="flex flex-col gap-y-1 w-full px-10 md:px-20">
	{#each skillsOrderedByProficiency as skill}
		<Chip icon={skill.icon} iconColor={skill.color} class="bg-slate-800 text-slate-100 px-4 py-1">
			<span class="mx-2 whitespace-nowrap">{skill.name}</span>

			<div class="flex">
				{#each [...Array(skill.proficiency + 1)] as _}
					<Fa icon={faStarSolid} />
				{/each}
				{#each [...Array(MAXIMUM_PROFICIENCY - skill.proficiency)] as _}
					<Fa icon={faStar} />
				{/each}
			</div>
		</Chip>
	{/each}
</div>

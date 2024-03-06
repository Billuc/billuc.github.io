<script lang="ts">
	import type { Skill, SkillCategory } from '$lib/model/skills';
	import { Proficiencies, Proficiency, ProficiencyLabels } from '$lib/model/proficiency';
	import Chip from '../general/Chip.svelte';

	export let category: SkillCategory;

	$: skillsGroupedByProficiency = groupByProficiency(category.skills);

	const groupByProficiency = (skills: Skill[]) => {
		const map = new Map<Proficiency, Skill[]>();

		for (let s of skills) {
			if (!map.has(s.proficiency)) map.set(s.proficiency, []);

			map.get(s.proficiency)?.push(s);
		}

		return map;
	};
</script>

<div class="back flex flex-col items-center justify-start gap-6 p-8">
	{#each [...Proficiencies].reverse() as prof}
		{#if skillsGroupedByProficiency.has(prof)}
			<div>
				<div class="font-bold text-sky-100 text-center">{ProficiencyLabels[prof]}</div>

				<div class="flex flex-wrap justify-center gap-x-2 gap-y-1 mt-2">
					{#each skillsGroupedByProficiency.get(prof) ?? [] as skill}
						<Chip icon={skill.icon} iconColor={skill.color} class="bg-blue-950 text-sky-50 px-4">
							<span class="ml-2">{skill.name}</span>
						</Chip>
					{/each}
				</div>
			</div>
		{/if}
	{/each}
</div>

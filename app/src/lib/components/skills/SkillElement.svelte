<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Card from '../general/Card.svelte';
	import SkillIcon from './SkillIcon.svelte';

	import type { Proficiency } from '$lib/model';
	import SkillProficiency from './SkillProficiency.svelte';

	export let name: string;
	export let skill: IconDefinition | string;
	export let color: string = '';
	export let proficiency: Proficiency;
	export let size: string = 'text-xl';
</script>

<Card class="w-full max-w-md px-4 py-2 mx-auto flex">
	<SkillIcon {skill} {color} {size} />

	<div class="ml-4 grow">
		<div class="mb-2">{name}</div>
		<SkillProficiency {proficiency} />
	</div>
</Card>

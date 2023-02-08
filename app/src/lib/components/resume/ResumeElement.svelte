<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Card from '../general/Card.svelte';
	import ResumeElementSkills from './ResumeElementSkill.svelte';
	import ResumeElementText from './ResumeElementText.svelte';

	export let title: string;
	export let image: string = '';

	export let dates: string;
	export let location: string;
	export let skills: (IconDefinition | string)[];
	export let description: string[];
</script>

<Card
	class="
	text-teal-50 bg-teal-700 w-1/2 my-4 py-2 px-4
	flex flex-col flex-nowrap justify-start items-center
"
>
	<div class="text-teal-50 uppercase font-semibold text-2xl text-center">{title}</div>
	<div class="flex flex-row flex-nowrap justify-between items-center w-full">
		{#if image}
			<div class="mr-2">
				<img src={image} alt="" class="max-h-32 max-w-32" />
			</div>
		{/if}

		<ResumeElementText {dates} {location} {description} />

		<div class="flex flex-col flex-wrap ml-2">
			{#each skills as skill}
				<ResumeElementSkills {skill} />
			{/each}
		</div>
	</div>
</Card>

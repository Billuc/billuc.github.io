<script lang="ts">
	import type { SkillCategory } from '$lib/model/skills';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let category: SkillCategory;
</script>

<div class="front flex flex-col justify-evenly items-center px-2 py-8">
	<img
		src={category.imgLink}
		alt={`Image ${category.title}`}
		class="shadow-md rounded-sm h-36 w-auto"
	/>

	<div class="flex flex-col items-center gap-4">
		<div class="text-xl font-black text-sky-50">{category.title}</div>
		<div
			class="w-6 h-6 rounded-full animate-bounce border-2 border-sky-200 flex flex-row justify-center items-center"
		>
			<Fa icon={faArrowRight} class="text-sky-200" />
		</div>
	</div>
</div>

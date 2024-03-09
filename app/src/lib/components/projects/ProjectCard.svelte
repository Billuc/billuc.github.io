<script lang="ts">
	import type { Project } from '$lib/model/projects';
	import { faArrowDown, faArrowUp, faLink } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let project: Project;
	let expanded = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="project break-inside-avoid-column
		flex flex-col items-center
		shadow-xl bg-gradient-to-b from-blue-700 to-blue-900
		rounded-md p-4 mb-4
		"
	class:expanded
>
	<div>
		<img
			src={project.imgSrc}
			alt={`Image for project ${project.label}`}
			class="rounded-sm cursor-pointer max-h-40"
			on:click={() => (expanded = !expanded)}
		/>
	</div>

	<div class="details flex flex-col items-center text-sky-50 my-2">
		<a href={project.projectLink} class="underline text-lg font-black mb-2 flex items-center gap-2">
			{project.label}
			{#if project.projectLink}
				<Fa icon={faLink} size="sm" />
			{/if}
		</a>
		<p class="text-sm text-justify italic">{project.description}</p>
	</div>

	<div
		class="expander w-6 h-6 border-2 border-sky-200 rounded-full flex flex-row justify-center items-center animate-bounce mt-2 cursor-pointer"
		on:click={() => (expanded = !expanded)}
	>
		<Fa icon={expanded ? faArrowUp : faArrowDown} class="text-sky-200" />
	</div>
</div>

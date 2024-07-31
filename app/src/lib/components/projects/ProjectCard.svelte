<script lang="ts">
	import type { Project } from '$lib/model/projects';
	import Fa from 'svelte-fa';
	import LinkButton from '../general/LinkButton.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	export let project: Project;
</script>

<div class="bg-slate-800 text-slate-100 flex flex-col p-4 rounded-sm max-w-xl">
	<span class="text-xl font-black mb-2">{project.label}</span>

	<div class="flex gap-4">
		<img
			src={project.imgSrc}
			alt={`Image for project ${project.label}`}
			class="rounded-sm h-40 w-40 object-contain shrink-0"
		/>

		<div class="flex flex-col justify-around">
			<div class="text-sm text-justify px-4">{project.description}</div>

			{#if project.projectLink}
				<LinkButton to={project.projectLink} class="mt-2">
					<Fa icon={faGithub} class="mr-2" />
					See code
				</LinkButton>
			{/if}
		</div>
	</div>
</div>

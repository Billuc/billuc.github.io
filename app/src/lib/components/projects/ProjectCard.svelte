<script lang="ts">
	import type { Project } from '$lib/model/projects';
	import Fa from 'svelte-fa';
	import LinkButton from '../general/LinkButton.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<div class="bg-slate-800 text-slate-100 flex flex-col p-4 rounded-sm max-w-xl shadow-md">
	<span class="text-xl font-black mb-2">{project.label}</span>

	<div class="flex flex-col md:flex-row gap-4">
		<img
			src={project.imgSrc}
			alt={`Image for project ${project.label}`}
			class="rounded-sm h-40 w-40 object-contain shrink-0 mx-auto"
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

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

<div
	class={[
		'bg-slate-800 text-slate-100',
		'flex flex-row items-center gap-2',
		'px-4 py-2 rounded-sm max-w-xl shadow-md'
	]}
>
	<img
		src={project.imgSrc}
		alt={`Image for project ${project.label}`}
		class="rounded-sm h-20 w-20 object-cover shrink-0 mx-auto"
	/>

	<div class="flex flex-col gap-2">
		<span class="text-xl font-black">{project.label}</span>

		<div class="justify-around text-sm text-justify px-2">
			{project.description}
		</div>

		{#if project.projectLink}
			<LinkButton to={project.projectLink} class="mx-4">
				<Fa icon={faGithub} class="mr-2" />
				See code
			</LinkButton>
		{/if}
	</div>
</div>

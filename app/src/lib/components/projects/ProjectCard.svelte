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
		'bg-slate-200',
		'flex flex-row items-center gap-2',
		'rounded-sm max-w-lg',
		'px-4 py-2 mb-4 mx-auto'
	]}
>
	<img
		src={project.imgSrc}
		alt={`Image for project ${project.label}`}
		class="rounded-sm h-20 w-20 object-cover shrink-0"
	/>

	<div class="px-2">
		<span class="text-xl font-black mb-2">{project.label}</span>

		<div class="text-sm text-justify">
			{project.description}
		</div>

		{#if project.projectLink}
			<LinkButton to={project.projectLink} class="mx-4 mt-2">
				<Fa icon={faGithub} class="mr-2" title={project.label + ' on Github'} />
				See code
			</LinkButton>
		{/if}
	</div>
</div>

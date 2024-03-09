<script lang="ts">
	import { Projects } from '$lib/model/projects';
	import ProjectCard from './ProjectCard.svelte';
	import '$lib/assets/css/projects.css';
	import LinkButton from '../general/LinkButton.svelte';
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div
	class="
		flex flex-col gap-4
		justify-center items-start
		w-full h-auto
	"
>
	<span class="text-4xl font-black text-slate-900">Some of my projects</span>
	<span class="text-sm italic text-slate-800 mt-4">From the oldest to the most recent</span>

	<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 w-full">
		{#each Projects as p}
			<ProjectCard project={p} />
		{/each}
	</div>

	<LinkButton to="https://github.com/Billuc" class="mt-2 mx-auto">
		More on my Github <Fa icon={faGithub} class="ml-2" />
	</LinkButton>
</div>

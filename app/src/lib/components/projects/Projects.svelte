<script lang="ts">
	import { Projects, ProjectCategories } from '$lib/model/projects';
	import ProjectCard from './ProjectCard.svelte';
	import LinkButton from '../general/LinkButton.svelte';
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="py-4 text-center w-full">
	<h1 class="text-4xl font-black text-slate-900">Some of my projects</h1>
	<div class="my-4 mx-auto border-b-2 border-red-600 border-opacity-30 w-40"></div>

	{#each ProjectCategories as p}
		<div class="px-4">
			<h2 class="text-2xl font-black text-start my-4 border-b-4 border-red-600 w-fit">{p}</h2>

			{#each Projects.filter((proj) => proj.category == p) as proj}
				<ProjectCard project={proj} />
			{/each}
		</div>
	{/each}

	<LinkButton to="https://github.com/Billuc" class="mt-4 mx-auto w-fit">
		<Fa icon={faGithub} class="mr-2" title="My Github" />
		More on my Github
	</LinkButton>
</div>

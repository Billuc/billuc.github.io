<script lang="ts">
	import { Projects, ProjectCategories } from '$lib/model/projects';
	import ProjectCard from './ProjectCard.svelte';
	import LinkButton from '../general/LinkButton.svelte';
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="py-16 text-center w-full">
	<div class="flex flex-col items-center">
		<span class="text-4xl font-black text-slate-900">Some of my projects</span>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40"></div>

		{#each ProjectCategories as p}
			<div>
				<div class="text-2xl font-bold my-4">{p}</div>

				<div class="flex flex-row flex-wrap justify-evenly gap-2">
					{#each Projects.filter((proj) => proj.category == p) as proj}
						<ProjectCard project={proj} />
					{/each}
				</div>
			</div>
		{/each}

		<LinkButton to="https://github.com/Billuc" class="mt-8 mx-auto">
			More on my Github <Fa icon={faGithub} class="ml-2" />
		</LinkButton>
	</div>
</div>

<script lang="ts">
	import { Projects } from '$lib/model/projects';
	import ProjectCard from './ProjectCard.svelte';
	import '$lib/assets/css/projects.css';
</script>

<div
	class="
		flex flex-col gap-8
		justify-center items-start
		w-full h-auto
	"
>
	<span class="text-4xl font-black text-slate-900">Some of my projects</span>

	<div class="columns-1 md:columns-3 gap-4 w-full">
		{#each Projects as p}
			<ProjectCard project={p} />
		{/each}
	</div>
</div>

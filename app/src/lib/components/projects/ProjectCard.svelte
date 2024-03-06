<script lang="ts">
	import type { Project } from '$lib/model/projects';

	export let project: Project;
	let expanded = false;
</script>

<div class="shadow-xl bg-gradient-to-b from-blue-700 to-blue-900 rounded-md p-4 mb-8">
	<img src={project.imgSrc} alt={`Image for project ${project.label}`} class="rounded-sm" />
</div>

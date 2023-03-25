<script lang="ts">
	import { projects } from './projects';

	import ProjectCarousel from './ProjectCarousel.svelte';
	import SectionTitle from '../general/SectionTitle.svelte';

	export let fullHeight: boolean = false;
</script>

<div id="projects" class:min-h-screen={fullHeight}>
	<SectionTitle>My Projects</SectionTitle>

	WIP...<br/>

	<ProjectCarousel elements={projects} />
</div>

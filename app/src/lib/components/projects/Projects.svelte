<script lang="ts">
	// import ResumeElement from '$lib/components/resume/ResumeElement.svelte';

	import SectionTitle from "../general/SectionTitle.svelte";

	export let fullHeight: boolean = false;
</script>

<div id="projects" class:full-height={fullHeight}>
	<SectionTitle>My Projects</SectionTitle>
	<div class="projects-title second-text">My Projects</div>
	
	<div>WIP...</div>
</div>

<style>
	.projects-title {
		font-size: 2.5rem;
		text-align: center;
		margin: 3rem 0 2rem;
	}
</style>

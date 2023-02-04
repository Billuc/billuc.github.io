<script lang="ts">
	import ResumeElement from '$lib/components/resume/ResumeElement.svelte';
	import resume from '$lib/assets/CV_Luc_Billaud.pdf';

	export let fullHeight: boolean = false;
</script>

<div id="resume" class:full-height={fullHeight}>
	<div class="resume-title second-text">My experiences</div>

	<ResumeElement
		title="Software Engineer at Dative"
		dates="2021-2023"
		description="Fullstack developper (C# and Vue.JS)"
		color="primary"
	>
		<div class="list-element">Developped features for a data acquisition application.</div>
		<div class="list-element">Created extensions for a cloud data vizualisation platform</div>
		<div class="list-element">Increased test coverage by more than 20 percent</div>
		<div class="list-element">Created tools to increase the team's efficiency</div>
	</ResumeElement>

	<ResumeElement
		title="End of studies internship"
		dates="2021-2021"
		description="VR reseach project in an IT laboratory"
		color="secondary"
		onLeft
	>
		<div class="list-element">Created a protocol to dynamically stream compressed 3D meshes</div>
		<div class="list-element">Implemented different strategies and metrics</div>
		<div class="list-element">
			Performed a statistical analysis to determine the best combination
		</div>
	</ResumeElement>

	<ResumeElement
		title="Master of Science in Computer Science and Engineering"
		dates="2016-2021"
		description="Institut National des Sciences Appliquées de Lyon"
		color="primary"
	/>

	<div class="resume-download">
		<a href={resume} download class="tertiary">Download my resume</a>
	</div>
</div>

<style>
	.resume-title {
		font-size: 2.5rem;
		text-align: center;
		margin: 3rem 0 2rem;
	}

	.list-element {
		padding: 0 1.5rem;
		margin-top: 0.5rem;
	}

	.list-element ~ .list-element {
		margin-top: 0.25rem;
	}

	.resume-download {
		text-align: center;
		margin-top: 2rem;
	}

	.resume-download a {
		display: inline-block;

		color: var(--background);

		padding: 0.5rem 0.75rem;
		border-radius: 0.15rem;
		box-shadow: 0px 5px 15px -10px black;

		font-size: 0.75rem;
		text-decoration: none;
		text-transform: uppercase;

		transition: all 0.2s ease-out;
	}

	.resume-download a:hover {
		filter: brightness(80%);
		transform: translateY(-0.2rem);
		box-shadow: 0px 10px 15px -10px black;
	}
</style>

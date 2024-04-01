<script lang="ts">
	import type { Project } from '$lib/model/projects';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import LinkButton from '../general/LinkButton.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	export let project: Project;
	let expanded = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="
		project break-inside-avoid-column
		flex flex-row items-center
		shadow-xl bg-gradient-to-br from-blue-700 to-blue-900
		rounded-md cursor-pointer
		overflow-clip
		"
	class:expanded
	on:click={() => (expanded = !expanded)}
>
	<div
		class="
		h-full
		rounded-lg
		flex items-center
		p-2
	"
	>
		<img
			src={project.imgSrc}
			alt={`Image for project ${project.label}`}
			class="rounded-sm max-h-40 max-w-40"
		/>
	</div>

	<div
		class={`
		details 
		flex flex-col items-center 
		text-sky-50 
		${expanded ? 'mr-2' : 'mr-0'} py-2
	`}
	>
		<span
			class="
			text-xl leading-6 font-black
			bg-pink-700
			rounded-md
			px-4 py-1 mb-2
		"
		>
			{project.label}
		</span>

		<p
			class="
			text-sm text-justify italic
			py-2 px-4
			rounded-md
			"
		>
			{project.description}
		</p>

		{#if project.projectLink}
			<LinkButton to={project.projectLink} class="mt-2">
				<Fa icon={faGithub} class="mr-2" />
				See code
			</LinkButton>
		{/if}
	</div>

	<!-- <div
		class={`
			expander
			w-4 h-4
			ring-2 ring-sky-200
			rounded-full
			flex flex-row justify-center items-center
			ml-4
			transition-transform duration-300
			${expanded ? '-rotate-180' : 'rotate-0'}
		`}
	>
		<Fa icon={faArrowRight} class="text-sky-200" size="xs" />
	</div> -->
</div>

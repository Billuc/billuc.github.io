<script lang="ts">
	import type { Experience } from '$lib/model/experiences';
	import ResumeDetails from './ResumeDetails.svelte';
	import ResumeSkills from './ResumeSkills.svelte';

	export let experience: Experience;
</script>

<div class="flex flex-col gap-4 rounded-2xl bg-blue-800 text-slate-50 px-2 py-2 shadow-xl max-w-md">
	<div class="rounded-lg px-4 py-2 bg-blue-300 shadow-inner">
		<img src={experience.imgLink} alt={`${experience.company} Logo`} class="w-96 mx-auto" />
	</div>

	<div class="mx-auto px-8 pb-4 flex flex-col text-center">
		<div class="text-xl">
			<span class="text-2xl font-black">{experience.title}</span> @
			<a href={experience.companyLink} class="font-bold underline">
				{experience.company}
			</a>
		</div>

		<div class="mt-2 italic font-light">
			<span>{experience.dates}</span>
			<span class="ml-6">{experience.location}</span>
		</div>

		<ResumeDetails details={experience.details} />
		<ResumeSkills skills={experience.skills} />
	</div>
</div>

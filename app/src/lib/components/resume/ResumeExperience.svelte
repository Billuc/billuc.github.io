<script lang="ts">
	import type { Experience } from '$lib/model/experiences';
	import ResumeDetails from './ResumeDetails.svelte';
	import ResumeSkills from './ResumeSkills.svelte';

	export let experience: Experience;
</script>

<div class="flex flex-col items-center">
	<div
		class="
		relative
		rounded-full
		flex justify-center items-center
		shadow-md shadow-slate-700
		bg-slate-800 text-slate-50
		px-8 py-1 mb-4
	"
	>
		{experience.dates}
	</div>

	<div class="max-w-md w-screen">
		<div
			class="
				flex flex-row gap-8
				rounded-lg
				bg-gradient-to-br from-blue-700 to-blue-900
				text-slate-50 px-4 py-4
				shadow-md w-full
			"
		>
			<div class="text-center w-2/5">
				<div class="rounded-sm px-4 py-2 bg-blue-300 shadow-inner">
					<img src={experience.imgLink} alt={`${experience.company} Logo`} class="w-96 mx-auto" />
				</div>

				<div class="mt-2 italic font-light">
					{experience.location}
				</div>

				<ResumeSkills skills={experience.skills} />
			</div>

			<div class="text-center w-3/5">
				<div
					class="
				text-xl font-black
				bg-gradient-to-b from-pink-700 to-pink-800
				shadow-sm shadow-pink-800
				rounded-md
				px-4 py-2"
				>
					<span class="text-2xl font-black">{experience.title}</span> @
					<a href={experience.companyLink} class="font-bold underline">
						{experience.company}
					</a>
				</div>

				<ResumeDetails details={experience.details} />
			</div>
		</div>
	</div>
</div>

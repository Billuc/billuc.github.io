<script lang="ts">
	import resume from '$lib/assets/CV_Luc_Billaud_2024.pdf';
	import Button from '../general/Button.svelte';
	import LinkButton from '../general/LinkButton.svelte';

	import { Experiences, type Experience } from '$lib/model/experiences';
	import ResumeExperience from './ResumeExperience.svelte';

	let selected: Experience = Experiences[0];
</script>

<div
	class="
		flex flex-col md:flex-row gap-8
		justify-evenly items-center
		w-full
	"
>
	<div class="flex flex-col">
		<span class="text-4xl font-black text-slate-900">My experience</span>

		<div class="flex flex-col gap-2 mt-8">
			{#each Experiences as ex}
				<Button on:click={() => (selected = ex)} selected={selected == ex}>
					{`${ex.company}   ${ex.dates}`}
				</Button>
			{/each}
			<LinkButton to={resume} download="CV_Luc_Billaud_2024.pdf" class="mt-2">
				Download my resume
			</LinkButton>
		</div>
	</div>

	{#key selected}
		<ResumeExperience experience={selected} />
	{/key}
</div>

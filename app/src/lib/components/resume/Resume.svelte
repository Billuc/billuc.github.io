<script lang="ts">
	import resume from '$lib/assets/CV_Luc_Billaud_2023.pdf';
	import Button from '../general/Button.svelte';
	import LinkButton from '../general/LinkButton.svelte';

	import { Experiences, type Experience } from '$lib/model/experiences';
	import ResumeExperience from './ResumeExperience.svelte';

	let selected: Experience = Experiences[0];
</script>

<div
	class="
		flex flex-col md:flex-row gap-16
		justify-evenly items-center
		w-full
	"
>
	<div class="flex flex-col">
		<span class="text-4xl font-black text-slate-900">My experience</span>

		<div class="flex flex-col gap-2 mt-8">
			{#each Experiences as ex}
				<Button on:click={() => (selected = ex)}>{`${ex.company}   ${ex.dates}`}</Button>
			{/each}
			<LinkButton label="Download my resume" to={resume} download class="mt-2" />
		</div>
	</div>

	<ResumeExperience experience={selected} />
</div>

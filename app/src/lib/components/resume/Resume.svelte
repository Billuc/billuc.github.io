<script lang="ts">
	import resume from '$lib/assets/CV_Luc_Billaud_2024.pdf';
	import Button from '../general/Button.svelte';
	import LinkButton from '../general/LinkButton.svelte';

	import { Experiences, type Experience } from '$lib/model/experiences';
	import ResumeExperience from './ResumeExperience.svelte';
	import Fa from 'svelte-fa';
	import { faChevronRight, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

	let selected: Experience = Experiences[0];
</script>

<div
	class="
		flex flex-col gap-8
		justify-center items-start
		w-full
	"
>
	<span class="text-4xl font-black text-slate-900">My experience</span>

	<div
		class="
			flex flex-row gap-8
			max-w-full overflow-x-scroll
			p-2
		"
	>
		{#each Experiences as ex}
			<ResumeExperience experience={ex} />
			<Fa icon={faHandPointRight} size="lg" class="relative top-1/2 last:hidden" />
		{/each}
	</div>

	<LinkButton to={resume} download="CV_Luc_Billaud_2024.pdf">Download my resume</LinkButton>
</div>

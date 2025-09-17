<script lang="ts">
	import resume from '$lib/assets/CV_Luc_Billaud_2024.pdf';
	import LinkButton from '../general/LinkButton.svelte';

	import { Experiences } from '$lib/model/experiences';
	import ResumeExperience from './ResumeExperience.svelte';
</script>

<div class="py-16 text-center w-full">
	<div class="flex flex-col items-center">
		<span class="text-4xl font-black text-slate-900">My experience</span>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40" />

		<LinkButton to={resume} download="CV_Luc_Billaud_2024.pdf" class="mb-4">
			Download my resume
		</LinkButton>

		<div
			class="
			flex flex-col
			max-w-full overflow-x-auto
			p-2
		"
		>
			{#each Experiences as ex}
				<ResumeExperience experience={ex} />
			{/each}
		</div>
	</div>
</div>

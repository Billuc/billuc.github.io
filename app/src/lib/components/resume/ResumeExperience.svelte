<script lang="ts">
	import type { Experience } from '$lib/model/experiences';
	import Fa from 'svelte-fa';
	import ResumeDetails from './ResumeDetails.svelte';
	import ResumeSkills from './ResumeSkills.svelte';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	export let experience: Experience;

	let open: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="
		bg-slate-800 text-slate-100
		rounded-sm overflow-clip
	"
>
	<div
		class="
			flex justify-between items-center gap-4
			h-14 py-2 px-4
			border-y border-slate-100 border-opacity-30
			cursor-pointer hover:bg-slate-700
		"
		on:click={() => {
			open = !open;
		}}
	>
		<span class="font-bold">{experience.dates}</span>

		<div
			class={`
				px-2 py-1 
				${experience.imgBackground == 'dark' ? 'bg-slate-800' : 'bg-slate-100'}
				h-full rounded-sm
			`}
		>
			<img src={experience.imgLink} alt={`${experience.company} Logo`} class="h-full" />
		</div>

		<Fa
			icon={faChevronDown}
			class={`
			${open ? 'rotate-180' : 'rotate-0'}
			transition-transform duration-150
		`}
		/>
	</div>

	<div class={`transition-all duration-500 max-h-96 ${open ? 'h-fit' : 'h-0'}`}>
		<div class="text-center p-4 bg-slate-700">
			<div>
				<span class="font-black">{experience.title}</span> @
				<a href={experience.companyLink} class="font-bold underline">
					{experience.company}
				</a>
			</div>
			<div class="italic font-light">
				{experience.location}
			</div>

			<div class="flex flex-row flex-nowrap gap-8 mt-4">
				<ResumeSkills skills={experience.skills} />
				<ResumeDetails details={experience.details} />
			</div>
		</div>
	</div>
</div>

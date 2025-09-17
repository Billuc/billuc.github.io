<script lang="ts">
	import type { Experience } from '$lib/model/experiences';
	import Fa from 'svelte-fa';
	import ResumeDetails from './ResumeDetails.svelte';
	import ResumeSkills from './ResumeSkills.svelte';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
	import { slide } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	interface Props {
		experience: Experience;
		opened?: boolean;
		toggle?: () => void;
	}

	let { experience, opened, toggle }: Props = $props();
</script>

<div class={['bg-slate-800 text-slate-100', 'rounded-sm', 'overflow-clip', 'md:w-sm', 'lg:w-lg']}>
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="
			flex justify-between items-center gap-4
			h-14 py-2 px-4
			border-t border-slate-100 border-opacity-30
			cursor-pointer hover:bg-slate-700
		"
		onclick={toggle}
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
			${opened ? 'rotate-180' : 'rotate-0'}
			transition-transform duration-150
		`}
		/>
	</div>

	{#if opened}
		<div transition:slide={{ duration: 300, easing: quadInOut }}>
			<div class="text-center p-4 bg-slate-600">
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
	{/if}
</div>

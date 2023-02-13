<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import ResumeElement from './ResumeElement.svelte';

	export let title: string;
	export let image: string = '';

	export let dates: string;
	export let location: string;
	export let skills: (IconDefinition | string)[];
	export let description: string[];
</script>

<div class="group relative mx-36 mb-72">
	<div class="
        bg-teal-50 w-8 h-8 rounded-full 
        ring-inset ring-4 ring-offset-4 ring-teal-500 dark:ring-zinc-800
    " />

	<div class="
        scale-0 group-hover:scale-100 transition-transform duration-500
        absolute -top-0 -left-36 z-10 origin-top
    ">
		<ResumeElement {title} {dates} {description} {image} {location} {skills} />
	</div>
</div>

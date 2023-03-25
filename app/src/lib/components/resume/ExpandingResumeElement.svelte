<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Card from '../general/Card.svelte';
	import ResumeElement from './ResumeElement.svelte';

	export let title: string;
	export let image: string = '';

	export let dates: string;
	export let location: string;
	export let skills: (IconDefinition | string)[];
	export let description: string[];
</script>

<div class="group relative mb-8 transition-all hover:mb-72 duration-500">
	<Card
		class="
		font-semibold px-2 py-1
	"
	>
		{dates}
	</Card>

	<div
		class="
        scale-0 group-hover:scale-100 transition-transform duration-500
        absolute -top-0 -left-48 z-10 origin-top w-96 ml-[50%]
    "
	>
		<ResumeElement {title} {dates} {description} {image} {location} {skills} />
	</div>
</div>

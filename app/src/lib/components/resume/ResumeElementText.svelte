<script lang="ts">
	import { faCalendarWeek, faLocationDot } from '@fortawesome/free-solid-svg-icons';
	import Chip from '../general/Chip.svelte';

	export let dates: string;
	export let location: string;
	export let description: string[];
</script>

<div class="flex flex-col flex-nowrap items-center gap-2">
	<div>
		<Chip icon={faCalendarWeek} class="bg-teal-500 dark:bg-zinc-800 dark:text-teal-500">{dates}</Chip>
		<Chip icon={faLocationDot} class="bg-teal-500 dark:bg-zinc-800 dark:text-teal-500">{location}</Chip>
	</div>
	<ul class="text-sm">
		{#each description as desc}
			<li class="mb-2">{desc}</li>
		{/each}
	</ul>
</div>

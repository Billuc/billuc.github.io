<script lang="ts">
	import { faCalendarWeek, faLocationDot } from '@fortawesome/free-solid-svg-icons';
	import Chip from '../general/Chip.svelte';

	export let dates: string;
	export let location: string;
	export let description: string[];
</script>

<div class="flex flex-col flex-nowrap items-center">
	<div>
		<Chip icon={faCalendarWeek} class="bg-zinc-900">{dates}</Chip>
		<Chip icon={faLocationDot} class="bg-zinc-900">{location}</Chip>
	</div>
	<ul class="">
		{#each description as desc}
			<li>{desc}</li>
		{/each}
	</ul>
</div>

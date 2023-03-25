<script lang="ts">
	import Card from '../general/Card.svelte';

	export let title: string;
</script>

<div class="flex flex-row flex-wrap items-center mb-6 gap-x-1 gap-y-2">
	<div class="mr-4 w-full md:w-1/3 lg:w-1/4">
		<Card class="align-center p-2 text-lg font-semibold w-fit">{title}</Card>
	</div>
	<slot />
</div>

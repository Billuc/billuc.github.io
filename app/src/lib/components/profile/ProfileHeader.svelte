<script lang="ts">
	import Card from '../general/Card.svelte';

	export let image: string;
	export let name: string;
	export let description: string;
	export let fullHeight: boolean = false;
</script>

<div
	id="profile"
	class:min-h-screen={fullHeight}
	class="flex flex-col flex-nowrap justify-center items-center mx-auto mb-4"
>
	<img alt="" src={image} class="ring-4 ring-amber-600 rounded-full mb-12 shadow-xl" />

	<Card class="text-center p-4 text-teal-50 bg-zinc-800 dark:bg-teal-500">
		<div class="uppercase font-black text-5xl">{name}</div>
		<div class="text-3xl font-bold mt-2">{description}</div>
	</Card>
</div>

<style>
	img {
		width: min(75vw, 300px);
		height: auto;
	}
</style>

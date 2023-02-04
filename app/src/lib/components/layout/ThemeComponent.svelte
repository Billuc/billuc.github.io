<script lang="ts">
	import '$lib/styles/themes/black-and-colors.css';
	import '$lib/styles/themes/black-and-red.css';
	import '$lib/styles/themes/classy.css';
	import '$lib/styles/themes/black-and-blue.css';
	import ThemePicker from './ThemePicker.svelte';

	export let theme: string = 'black-and-colors';
	export let withPicker: boolean = false;
</script>

<div class="theme-component" data-theme={theme}>
	{#if withPicker}
		<div class="picker">
			Theme :
			<ThemePicker bind:value={theme} />
		</div>
	{/if}
	<slot />
</div>

<style>
	.theme-component {
		display: flex;
		flex-flow: column nowrap;
	}

	.picker {
		display: flex;
		margin: 1rem auto;
	}
</style>

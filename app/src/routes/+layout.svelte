<script>
	import '$lib/styles/global.css';

	import NavigationDrawer from '$lib/components/layout/NavigationDrawer.svelte';
	import ThemeComponent from '$lib/components/layout/ThemeComponent.svelte';

	let theme = 'black-and-blue';
</script>

<ThemeComponent bind:theme withPicker>
	<NavigationDrawer />

	<div class="container">
		<slot />
	</div>
</ThemeComponent>

<style>
	.container {
		padding-left: var(--nav-drawer-width);
		width: 80%;
		margin: auto;
	}
</style>

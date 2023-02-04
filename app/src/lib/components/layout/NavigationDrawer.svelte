<script lang="ts">
	import NavigationDrawerHeader from './NavigationDrawerHeader.svelte';
	import NavigationDrawerBody from './NavigationDrawerBody.svelte';
	import NavigationDrawerFooter from './NavigationDrawerFooter.svelte';
</script>

<div class="navigation-drawer">
	<NavigationDrawerHeader />
	<NavigationDrawerBody />
	<NavigationDrawerFooter />

	<div class="border" />
</div>

<style>
	.navigation-drawer {
		position: fixed;
		top: 0;
		left: 0;

		width: var(--nav-drawer-width);
		height: 100%;
		padding: 0.5rem 5px 0.5rem 0;
		box-sizing: border-box;

		background: var(--background);

		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: center;
	}

	.navigation-drawer .border {
		position: absolute;
		top: 0;
		right: 0;

		width: 5px;
		height: 100%;

		background: var(--primary);
		background: linear-gradient(0deg, var(--second-background) -50%, var(--primary) 100%);
	}
</style>

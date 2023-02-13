<script lang="ts">
	import '../app.css';

	import ThemeComponent from '$lib/components/layout/ThemeComponent.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
</script>

<ThemeComponent>
	<Navigation />

	<div class="container mx-auto">
		<slot />
	</div>

	<div class="mx-auto mb-4">
		Website developped by Luc Billaud using Svelte, Vite, Tailwind, FontAwesome, Github & Github
		Actions
	</div>
</ThemeComponent>

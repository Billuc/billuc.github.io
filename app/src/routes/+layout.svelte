<script lang="ts">
	import '../app.css';

	import Layout from '$lib/components/layout/Layout.svelte';
</script>

<Layout>
	<div class="px-4">
		<slot />
	</div>

	<div class="mx-auto mb-4 text-center">
		Website developped by Luc Billaud using Svelte, Vite, Tailwind, FontAwesome, Github & Github
		Actions
	</div>
</Layout>

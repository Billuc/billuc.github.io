<script lang="ts">
	import '../app.css';
	import Layout from '$lib/components/layout/Layout.svelte';
	import { fade } from 'svelte/transition';

	export let data: { currentRoute: string };
</script>

{#key data.currentRoute}
	<main in:fade|global={{ duration: 150, delay: 150 }} out:fade|global={{ duration: 150 }}>
		<Layout>
			<slot />
		</Layout>
	</main>
{/key}

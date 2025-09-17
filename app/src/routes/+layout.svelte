<script lang="ts">
	import '../app.css';
	import Layout from '$lib/components/layout/Layout.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		data: { currentRoute: string };
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

{#key data.currentRoute}
	<main in:fade|global={{ duration: 150, delay: 150 }} out:fade|global={{ duration: 150 }}>
		<Layout>
			{@render children?.()}
		</Layout>
	</main>
{/key}

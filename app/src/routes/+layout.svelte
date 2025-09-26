<script lang="ts">
	import '../app.css';
	import Layout from '$lib/components/layout/Layout.svelte';
	import { blur } from 'svelte/transition';

	interface Props {
		data: { currentRoute: string };
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

{#key data.currentRoute}
	<main
		in:blur|global={{ duration: 300, delay: 250, opacity: 70 }}
		out:blur|global={{ duration: 300, opacity: 70 }}
	>
		<Layout>
			{@render children?.()}
		</Layout>
	</main>
{/key}

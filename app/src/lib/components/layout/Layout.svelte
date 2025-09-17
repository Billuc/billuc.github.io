<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let isDark = false;
</script>

<div class:dark={isDark}>
	<div class={['text-slate-900', 'flex flex-row w-full', 'relative']}>
		<NavBar />

		<div
			class={[
				'min-h-screen grow max-w-full md:max-w-screen--xs',
				'bg-slate-100',
				'flex flex-col justify-between'
			]}
		>
			<div class="w-11/12 mx-auto py-6 grow flex">
				{@render children?.()}
			</div>

			<div class="mx-auto mb-4 text-center w-11/12 opacity-60 text-sm">
				Website developped by Luc Billaud using Svelte, Vite, Tailwind, FontAwesome, Github & Github
				Actions
			</div>
		</div>
	</div>
</div>

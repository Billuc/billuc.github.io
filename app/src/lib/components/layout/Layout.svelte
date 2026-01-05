<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let isDark = false;
</script>

<div class:dark={isDark}>
	<div class={['text-slate-900', 'bg-slate-100', 'w-full', 'relative']}>
		<div
			class={[
				'min-h-screen max-w-11/12 md:max-w-xl lg:max-w-2xl',
				'mx-auto',
				'flex flex-col justify-between'
			]}
		>
			<NavBar />

			<div class="w-full py-6 grow">
				{@render children?.()}
			</div>

			<div class="mx-auto mb-4 text-center opacity-60 text-sm">
				Website developped by Luc Billaud using Svelte, Vite, Tailwind, FontAwesome, Github & Github
				Actions
			</div>
		</div>
	</div>
</div>

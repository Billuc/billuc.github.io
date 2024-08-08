<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';

	let isDark: boolean = false;
</script>

<div class:dark={isDark}>
	<div
		class="
			text-slate-900
			transition-all duration-500 ease-in-out relative
			flex flex-row w-full
		"
	>
		<NavBar />

		<div
			class="min-h-screen grow max-w-full
				bg-slate-100
				flex flex-col justify-between
				"
		>
			<div class="w-11/12 mx-auto py-6 grow flex">
				<slot />
			</div>

			<div class="mx-auto mb-4 text-center w-11/12 opacity-60 text-sm">
				Website developped by Luc Billaud using Svelte, Vite, Tailwind, FontAwesome, Github & Github
				Actions
			</div>
		</div>
	</div>
</div>

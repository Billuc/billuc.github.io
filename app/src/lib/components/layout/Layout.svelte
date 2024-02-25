<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';

	let isDark: boolean = false;
</script>

<div class:dark={isDark}>
	<div
		class="
			text-zinc-900 dark:text-teal-500
			transition-all duration-500 ease-in-out relative
		"
	>
		<NavBar />

		<div
			class="min-h-screen
				bg-sky-200 bg-gradient-to-r from-sky-200 via-sky-200 to-sky-300
				dark:bg-sky-700 dark:from-sky-700 dark:via-sky-700 dark:to-blue-800
				flex flex-col justify-between
				mr-12 ml-0 md:mr-0 md:ml-12
				"
		>
			<div class="w-11/12 mx-auto py-6 flex-grow flex">
				<slot />
			</div>

			<div class="mx-auto mb-4 text-center w-11/12 opacity-60 text-sm">
				Website developped by Luc Billaud using Svelte, Vite, Tailwind, FontAwesome, Github & Github
				Actions
			</div>
		</div>
	</div>
</div>

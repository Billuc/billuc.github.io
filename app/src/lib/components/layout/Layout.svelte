<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';

	let isDark: boolean = false;
</script>

<div class:dark={isDark}>
	<div
		class="
			flex flex-col flex-nowrap 
			bg-teal-500 bg-gradient-to-br from-teal-500 via-teal-500 to-teal-700
			dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800
			text-zinc-900 dark:text-teal-500
			transition-all duration-500 ease-in-out
		"
	>
		<DarkModeToggle bind:isDark />
		<Navigation />

		<div class="w-11/12 mx-auto my-8">
			<slot />
		</div>
	</div>
</div>

<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';

	let isDark: boolean = false;
</script>

<div class:dark={isDark}>
	<div
		class="
			flex flex-col flex-nowrap 
			bg-teal-500 bg-gradient-to-b from-teal-500 via-teal-500 to-teal-800 
			dark:bg-zinc-900 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800
			text-zinc-900 dark:text-teal-500
			transition-all duration-500 ease-in-out
		"
	>
		<DarkModeToggle bind:isDark />
		<slot />
	</div>
</div>

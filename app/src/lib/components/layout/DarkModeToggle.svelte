<script lang="ts">
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import IconButton from '../general/IconButton.svelte';

	$: icon = isDark ? faSun : faMoon;

	export let isDark: boolean;
</script>

<div class="fixed top-4 right-4 z-10">
	<IconButton
		on:click={() => (isDark = !isDark)}
		{icon}
		class="shadow-xl bg-teal-500 dark:bg-zinc-800"
	/>
</div>

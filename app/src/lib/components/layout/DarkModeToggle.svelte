<script lang="ts">
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import IconButton from '../general/IconButton.svelte';

	$: icon = isDark ? faSun : faMoon;

	export let isDark: boolean;
</script>

<div
	class="
	px-2 rounded-full 
	hover:bg-zinc-700 dark:hover:bg-teal-700 
	flex flex-col justify-center
	"
>
	<IconButton on:click={() => (isDark = !isDark)} {icon} noBorder />
</div>
